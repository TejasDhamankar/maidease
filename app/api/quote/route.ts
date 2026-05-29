import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Quote from "@/models/Quote";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, location, service, urgency } = body;

  if (!name || !phone || !location || !service || !urgency) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const newQuote = await Quote.create({
      name,
      email,
      phone,
      location,
      service,
      urgency,
    });
    return NextResponse.json(
      { message: "Quote submitted successfully", quote: newQuote },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting quote:", error);
    return NextResponse.json(
      { error: "Failed to submit quote" },
      { status: 500 }
    );
  }
}
