import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const text = message.toLowerCase();

    // Destination detection
    let destination = "a carefully selected destination";

    if (
      text.includes("italy") ||
      text.includes("rome") ||
      text.includes("florence") ||
      text.includes("amalfi") ||
      text.includes("sicily")
    ) {
      destination = "Italy";
    } else if (
      text.includes("france") ||
      text.includes("paris") ||
      text.includes("riviera") ||
      text.includes("provence")
    ) {
      destination = "France";
    } else if (
      text.includes("greece") ||
      text.includes("greek") ||
      text.includes("santorini") ||
      text.includes("mykonos")
    ) {
      destination = "Greece";
    } else if (
      text.includes("spain") ||
      text.includes("barcelona") ||
      text.includes("mallorca") ||
      text.includes("ibiza")
    ) {
      destination = "Spain";
    } else if (
      text.includes("africa") ||
      text.includes("safari") ||
      text.includes("kenya") ||
      text.includes("tanzania")
    ) {
      destination = "East Africa";
    } else if (
      text.includes("japan") ||
      text.includes("tokyo") ||
      text.includes("kyoto")
    ) {
      destination = "Japan";
    } else if (
      text.includes("maldives") ||
      text.includes("bali") ||
      text.includes("thailand") ||
      text.includes("indonesia")
    ) {
      destination = "a private island escape in Asia";
    } else if (
      text.includes("switzerland") ||
      text.includes("alps") ||
      text.includes("ski") ||
      text.includes("mountain")
    ) {
      destination = "the Swiss Alps";
    } else if (text.includes("mediterranean")) {
      destination = "the Mediterranean";
    } else if (
      text.includes("singapore") ||
      text.includes("sentosa")
    ) {
      destination = "Singapore";
    }

    // Travel duration detection
    let duration = "a flexible number of days";

    const durationMatch = text.match(
      /(\d+)\s*[-]?\s*(days?|nights?|weeks?)/
    );

    if (durationMatch) {
      const number = durationMatch[1];
      const unit = durationMatch[2];

      let normalizedUnit = "days";

      if (unit.startsWith("night")) {
        normalizedUnit = "nights";
      } else if (unit.startsWith("week")) {
        normalizedUnit = "weeks";
      }

      duration = `${number} ${normalizedUnit}`;
    }

    // Travel style detection
    let travelStyle = "exclusive and highly personalized";

    if (
      text.includes("romantic") ||
      text.includes("honeymoon") ||
      text.includes("anniversary") ||
      text.includes("couple")
    ) {
      travelStyle = "romantic and intimate";
    } else if (
      text.includes("family") ||
      text.includes("children") ||
      text.includes("kids")
    ) {
      travelStyle = "refined, private, and family-friendly";
    } else if (
      text.includes("adventure") ||
      text.includes("adventurous") ||
      text.includes("explore")
    ) {
      travelStyle = "adventurous yet exceptionally comfortable";
    } else if (
      text.includes("relax") ||
      text.includes("relaxing") ||
      text.includes("quiet") ||
      text.includes("peaceful")
    ) {
      travelStyle = "slow, private, and restorative";
    }

    // Travel party detection
    let travelParty = "your chosen companions";

    const peopleMatch = text.match(
      /(\d+)\s*(people|persons|travelers|travellers|guests)/
    );

    if (peopleMatch) {
      const numberOfPeople = peopleMatch[1];
      travelParty = `${numberOfPeople} travelers`;
    } else if (
      text.includes("couple") ||
      text.includes("two people") ||
      text.includes("for two") ||
      text.includes("honeymoon")
    ) {
      travelParty = "a couple";
    } else if (
      text.includes("family") ||
      text.includes("children") ||
      text.includes("kids")
    ) {
      travelParty = "a family";
    } else if (
      text.includes("friends") ||
      text.includes("group")
    ) {
      travelParty = "a group of friends";
    } else if (
      text.includes("solo") ||
      text.includes("alone") ||
      text.includes("myself")
    ) {
      travelParty = "a solo traveler";
    }

    // Experience detection
    const experiences: string[] = [];

    if (
      text.includes("beach") ||
      text.includes("coast") ||
      text.includes("island") ||
      text.includes("sea")
    ) {
      experiences.push("secluded coastal experiences");
    }

    if (
      text.includes("culture") ||
      text.includes("history") ||
      text.includes("museum") ||
      text.includes("art")
    ) {
      experiences.push(
        "private cultural and historical experiences"
      );
    }

    if (
      text.includes("food") ||
      text.includes("wine") ||
      text.includes("restaurant") ||
      text.includes("dining")
    ) {
      experiences.push(
        "exceptional private dining and culinary experiences"
      );
    }

    if (
      text.includes("villa") ||
      text.includes("private") ||
      text.includes("luxury")
    ) {
      experiences.push(
        "exclusive villas and private residences"
      );
    }

    if (
      text.includes("yacht") ||
      text.includes("boat") ||
      text.includes("sailing")
    ) {
      experiences.push(
        "private yacht and sailing experiences"
      );
    }

    if (
      text.includes("spa") ||
      text.includes("wellness") ||
      text.includes("relax")
    ) {
      experiences.push(
        "private wellness and restorative experiences"
      );
    }

    if (
      text.includes("safari") ||
      text.includes("wildlife") ||
      text.includes("animals")
    ) {
      experiences.push(
        "private wildlife and safari experiences"
      );
    }

    if (experiences.length === 0) {
      experiences.push(
        "private residences and carefully curated local experiences",
        "seamless luxury transportation",
        "personalized cultural experiences"
      );
    }

    // Destination-specific recommendations
    let destinationRecommendations = "";

    if (destination === "Singapore") {
      destinationRecommendations = `
    For Singapore, we would suggest combining refined city experiences with private coastal escapes.

    • Private experience around Sentosa and the Southern Islands
    • Curated cultural exploration through Chinatown, Little India, and Kampong Glam
    • Exceptional dining experiences overlooking Marina Bay
    • Private transfers and carefully coordinated city experiences`;
    } else if (destination === "Italy") {
      destinationRecommendations = `
    For Italy, we would suggest combining timeless culture with exceptional coastal experiences.

    • Private exploration of historic cities and hidden cultural sites
    • Exclusive coastal villas
    • Private culinary and wine experiences
    • Luxury transfers between destinations`;
    } else if (destination === "France") {
      destinationRecommendations = `
    For France, we would suggest combining refined city experiences with the French countryside or Riviera.

    • Private cultural experiences in Paris
    • Exclusive Riviera escapes
    • Exceptional dining and wine experiences
    • Private countryside estates`;
    } else if (destination === "Greece") {
      destinationRecommendations = `
    For Greece, we would suggest a combination of secluded islands, private villas, and authentic local experiences.

    • Private island experiences
    • Secluded luxury villas
    • Private sailing and coastal journeys
    • Curated Greek culinary experiences`;
    } else if (destination === "Japan") {
      destinationRecommendations = `
    For Japan, we would suggest balancing refined modern experiences with traditional culture.

    • Private cultural experiences in Kyoto
    • Carefully selected Tokyo experiences
    • Traditional ryokan stays
    • Curated culinary and cultural journeys`;
    } else if (destination === "East Africa") {
      destinationRecommendations = `
    For East Africa, we would suggest combining exceptional wildlife experiences with refined private lodges.

    • Private safari experiences
    • Exclusive wildlife viewing
    • Remote luxury lodges
    • Carefully coordinated private transfers`;
    } else if (destination === "the Swiss Alps") {
      destinationRecommendations = `
    For the Swiss Alps, we would suggest a private mountain retreat focused on scenery, privacy, and exceptional service.

    • Exclusive alpine chalets
    • Private mountain experiences
    • Scenic rail and road journeys
    • Wellness and restorative experiences`;
    }

    // Final response
    const answer = `Thank you for sharing your travel vision.

We have interpreted your request as a ${travelStyle} journey centered around ${destination}.

Travel profile:

• Destination: ${destination}
• Duration: ${duration}
• Traveling with: ${travelParty}

Our Private Travel Concierge would suggest beginning with a highly personalized itinerary rather than a conventional package.

Destination approach:
${destinationRecommendations}

Recommended experiences:

• ${experiences.join("\n• ")}

Your journey could also include:

✓ Private villas or exceptional residences
✓ Luxury ground transportation
✓ Carefully selected local experiences
✓ Flexible daily arrangements
✓ Dedicated private concierge support

The itinerary can be adjusted around your preferred pace, travel dates, companions, and level of privacy.

Your vision:

"${message}"

A member of our private travel team can refine these ideas into a complete journey designed specifically around you.`;

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Concierge error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}