import { z } from "zod";

export const bookingSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Please enter a valid corporate or personal email"),
    organization: z.string().min(2, "Organization or institution is required"),
    engagementType: z.enum([
        "keynote_physical",
        "keynote_virtual",
        "strategic_advisory",
        "leadership_training",
        "executive_coaching",
    ], {
        message: "Please select an engagement type",
    }),
    eventDate: z.string().min(1, "Preferred date or timeline is required"),
    location: z.string().min(2, "Event city/country or platform is required"),
    message: z.string().min(20, "Please provide context (minimum 20 characters)"),
});

export type BookingInput = z.infer<typeof bookingSchema>;