import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const isAuth = cookieStore.get("admin_session")?.value === "authenticated";

    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const quotes = await Quote.find().sort({ createdAt: -1 });

    return NextResponse.json(quotes);
  } catch (error: any) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
