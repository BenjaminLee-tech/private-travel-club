import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {

  console.log("API ROUTE HIT");
  try {
    const data = await request.json();

    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        destination: data.destination,
        start: data.start,
        end: data.end,
        message: data.message,
      },
    });

    console.log("PRIVATE INQUIRY RECEIVED:");
    console.log(inquiry);

    return NextResponse.json({
      success: true,
      inquiry,
    });

  } catch (error) {
    console.error("Inquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}