import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = bookingSchema.parse(body);

        const recipient = process.env.BOOKING_RECEIVER_EMAIL || "Samimmanuelson@gmail.com";
        const sender = process.env.SENDER_EMAIL || "onboarding@resend.dev";

        const { data, error } = await resend.emails.send({
            from: `Dr. Sam Bookings <${sender}>`,
            to: [recipient],
            replyTo: validatedData.email,
            subject: `[New Booking Inquiry] ${validatedData.organization} - ${validatedData.fullName}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; line-height: 1.6;">
          <h2 style="color: #A37D45; border-bottom: 2px solid #E5DDD0; padding-bottom: 8px;">
            Executive Booking Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Client Name:</td><td>${validatedData.fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Work Email:</td><td>${validatedData.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Organization:</td><td>${validatedData.organization}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Engagement Type:</td><td>${validatedData.engagementType.replace(/_/g, " ").toUpperCase()}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Target Date:</td><td>${validatedData.eventDate}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Location / Format:</td><td>${validatedData.location}</td></tr>
          </table>
          <h4 style="margin-top: 24px; margin-bottom: 8px;">Context & Objective:</h4>
          <div style="background: #F4F4F6; padding: 16px; border-radius: 6px; white-space: pre-wrap;">
            ${validatedData.message}
          </div>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
    } catch (err: any) {
        if (err.errors) {
            return NextResponse.json({ success: false, validationErrors: err.errors }, { status: 422 });
        }
        return NextResponse.json(
            { success: false, error: "Internal booking route error" },
            { status: 500 }
        );
    }
}