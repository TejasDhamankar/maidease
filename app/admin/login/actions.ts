"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import { verifyPassword } from "@/lib/password";
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

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}
