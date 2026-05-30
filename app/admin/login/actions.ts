"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import { hashPassword, verifyPassword } from "@/lib/password";
import AdminUser from "@/models/AdminUser";

export async function login(formData: FormData) {
  const email = (formData.get("email") as string).trim().toLowerCase();
  const password = formData.get("password") as string;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  await connectToDatabase();
  const adminUser = await AdminUser.findOne({ email });
  const isDbAdmin = adminUser ? await verifyPassword(password, adminUser.passwordHash) : false;
  const isEnvAdmin = email === adminEmail && password === adminPassword;

  if (isDbAdmin || isEnvAdmin) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    redirect("/admin/dashboard");
  } else {
    return { error: "Invalid credentials" };
  }
}

export async function createAdminAccount(formData: FormData) {
  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim().toLowerCase();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name || !email || !password || !confirmPassword) {
    return { error: "Please fill all fields." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  await connectToDatabase();

  const existingCount = await AdminUser.countDocuments();
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("admin_session")?.value === "authenticated";

  if (existingCount > 0 && !isAuth) {
    return { error: "Admin account already exists. Please login first." };
  }

  const existingUser = await AdminUser.findOne({ email });
  if (existingUser) {
    return { error: "An admin account with this email already exists." };
  }

  const passwordHash = await hashPassword(password);
  await AdminUser.create({ name, email, passwordHash });

  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  redirect("/admin/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}
