import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        {
          success: false,
          message: "First name, last name, and email are required.",
        },
        { status: 400 }
      );
    }

    const application = await prisma.membershipApplication.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        country: data.country || null,
        occupation: data.occupation || null,
        travelInterests: data.travelInterests || null,
        reason: data.reason || null,
        referral: data.referral || null,
      },
    });

    console.log("MEMBERSHIP APPLICATION RECEIVED:");
    console.log(application);

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Private Travel Club <onboarding@resend.dev>",
        to: "benjamin.lee1011@outlook.com",
        subject: `New Membership Application from ${data.firstName} ${data.lastName}`,
        html: `
          <h2>New Private Travel Club Membership Application</h2>

          <p><strong>First Name:</strong> ${data.firstName}</p>
          <p><strong>Last Name:</strong> ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Country:</strong> ${data.country || "Not provided"}</p>
          <p><strong>Occupation:</strong> ${data.occupation || "Not provided"}</p>
          <p><strong>Travel Interests:</strong> ${data.travelInterests || "Not provided"}</p>
          <p><strong>Reason for Joining:</strong> ${data.reason || "Not provided"}</p>
          <p><strong>Referral:</strong> ${data.referral || "Not provided"}</p>

          <hr />

          <p><strong>Status:</strong> PENDING</p>
        `,
      });

    if (emailError) {
      console.error("Membership email error:", emailError);

      return NextResponse.json({
        success: true,
        application,
        emailSent: false,
        message:
          "Application submitted successfully, but email notification failed.",
      });
    }

    console.log("MEMBERSHIP EMAIL SENT:");
    console.log(emailData);

    return NextResponse.json({
      success: true,
      application,
      emailSent: true,
    });
  } catch (error) {
    console.error("Membership application error:", error);

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

    const applications =
      await prisma.membershipApplication.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("Membership application fetch error:", error);

    return NextResponse.json(
      { error: "Failed to load membership applications" },
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

    const application =
      await prisma.membershipApplication.update({
        where: {
          id: data.id,
        },
        data: {
          status: data.status,
          adminNotes: data.adminNotes,
          reviewedAt:
            data.status === "APPROVED" ||
            data.status === "DECLINED"
              ? new Date()
              : null,
        },
      });

    return NextResponse.json(application);
  } catch (error) {
    console.error("Membership application update error:", error);

    return NextResponse.json(
      { error: "Failed to update membership application" },
      { status: 500 }
    );
  }
}