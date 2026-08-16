import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

  const answer = `Thank you for sharing your travel vision.

  Based on your preferences:

  "${message}"

  Our Private Travel Concierge recommends:

  • Mediterranean Escape
  Private coastal experiences and timeless landscapes.

  • Alpine Retreat
  Remote mountain journeys designed for reflection.

  • Island Sanctuary
  Exclusive escapes surrounded by nature.

  Your journey can be personalized with:

  ✓ Private villas
  ✓ Luxury transportation
  ✓ Authentic cultural experiences
  ✓ Dedicated concierge support

  A member of our private travel team can further design your perfect itinerary.`;

    return NextResponse.json({
      answer,
    });

  } catch (error) {

    console.error("Concierge error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  }
}