import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("API ROUTE HIT");

  try {
    const data = await request.json();

    // Save inquiry to database
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

    // Send notification email
    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Private Travel Club <onboarding@resend.dev>",
        to: "benjamin.lee1011@outlook.com",
        subject: `New Private Travel Inquiry from ${data.name}`,
        html: `
          <h2>New Private Travel Inquiry</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Destination:</strong> ${data.destination || "Not specified"}</p>
          <p><strong>Start:</strong> ${data.start || "Not specified"}</p>
          <p><strong>End:</strong> ${data.end || "Not specified"}</p>

          <h3>Message</h3>
          <p>${data.message || "No message provided"}</p>
        `,
      });

    if (emailError) {
      console.error("Email error:", emailError);

      return NextResponse.json({
        success: true,
        inquiry,
        emailSent: false,
        message: "Inquiry saved, but email notification failed.",
      });
    }

    console.log("EMAIL SENT:");
    console.log(emailData);

    return NextResponse.json({
      success: true,
      inquiry,
      emailSent: true,
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

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Inquiry fetch error:", error);

    return NextResponse.json(
      { error: "Failed to load inquiries" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const data = await request.json();

    const inquiry = await prisma.inquiry.update({
      where: {
        id: data.id,
      },
      data: {
        status: data.status,
      },
    });

    return NextResponse.json(inquiry);
  } catch (error) {
    console.error("Inquiry update error:", error);

    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}