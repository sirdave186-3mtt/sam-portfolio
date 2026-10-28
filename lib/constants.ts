export const SITE_METADATA = {
    name: "Dr. Immanuelson Sam",
    title: "Management Consultant, Leadership Coach & Global Speaker",
    tagline: "Unlocking Leadership Potential... Empowering Africa's Future in Uncertain Times",
    firm: "Goldenmuv Premium Consulting Limited (GMPC)",
    firmWebsite: "https://www.goldenmuv.com",
    phone: "+234-9060141044",
    email: "Samimmanuelson@gmail.com",
    socials: {
        linkedin: "https://linkedin.com/in/immanuelsonsam",
        instagram: "https://instagram.com/immanuelsonsam",
        facebook: "https://facebook.com/immanuelsonsam",
    },
    ecosystemUrl: "https://becomerscommunity.com",
};

export const ACCREDITATIONS = [
    "Certified Management Consultant (CMC)",
    "Young African Leaders Initiative (YALI) Fellow",
    "Certified Leadership Coach",
    "Certified Executive Coach",
    "Member, Nigerian Institute of Management (NIM)",
    "Institute of Chartered Management Consultants",
    "World Bank-Supported Digital Program Participant",
];

export interface ClientLogo {
    name: string;
    src: string;
    alt: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
    {
        name: "Mangal Group",
        src: "/images/logos/cred_mangal.png",
        alt: "Mangal Cement & Mangal Group",
    },
    {
        name: "Rano Air",
        src: "/images/logos/Rano_Air.png",
        alt: "Rano Air",
    },
    {
        name: "Transkredit",
        src: "/images/logos/Transkredit.png",
        alt: "Transkredit Financial Services",
    },
    {
        name: "Norrenberger",
        src: "/images/logos/Norrenberger.png",
        alt: "Norrenberger Financial Group",
    },
    {
        name: "NASIDA",
        src: "/images/logos/cred_nasida.png",
        alt: "Nasarawa Investment and Development Agency (NASIDA)",
    },
    {
        name: "FUDMA",
        src: "/images/logos/cred_fudma.png",
        alt: "Federal University Dutsin-Ma",
    },
    {
        name: "Iphex Global",
        src: "/images/logos/Iphex-Global.png",
        alt: "Iphex Global",
    },
    {
        name: "Bezalel",
        src: "/images/logos/Bezalel.png",
        alt: "Bezalel",
    },
    {
        name: "Kindred",
        src: "/images/logos/kindred-logo.png",
        alt: "Kindred",
    },
    {
        name: "Corporate Partner 21",
        src: "/images/logos/Picture21.png",
        alt: "Institutional Client Partner",
    },
    {
        name: "Corporate Partner 22",
        src: "/images/logos/Picture22.jpg",
        alt: "Institutional Client Partner",
    },
    {
        name: "Corporate Partner 24",
        src: "/images/logos/Picture24.jpg",
        alt: "Institutional Client Partner",
    },
    {
        name: "Corporate Partner 26",
        src: "/images/logos/Picture26.png",
        alt: "Institutional Client Partner",
    },
    {
        name: "Corporate Partner 29",
        src: "/images/logos/Picture29.png",
        alt: "Institutional Client Partner",
    },
];

export const SIGNATURE_TOPICS = [
    {
        title: "Servant Leadership in Emerging Markets",
        focus: "Empowering leaders to serve humbly and build high-performance, inclusive teams across Africa's dynamic economies.",
    },
    {
        title: "Navigating Organizational Change for Sustainable Impact",
        focus: "Blending strategic risk management, innovation, and culture shifts to thrive amid macroeconomic volatility.",
    },
    {
        title: "Building Future-Ready Leaders in Africa",
        focus: "Equipping executives with practical frameworks for economic inclusion, resilience, and ethical governance.",
    },
    {
        title: "Culture Transformation & Team Empowerment",
        focus: "Unlocking emotional intelligence, organizational design, and productivity for thriving institutional workplaces.",
    },
    {
        title: "Strategic Risk Management in Volatile Economies",
        focus: "Performance optimization, stakeholder value creation, and institutional resilience.",
    },
];

export const ENGAGEMENT_TYPES = [
    { label: "Keynote Speaking (In-Person / Physical)", value: "keynote_physical" },
    { label: "Keynote Speaking (Virtual Webinar)", value: "keynote_virtual" },
    { label: "Strategic Advisory & Management Consulting", value: "strategic_advisory" },
    { label: "Leadership Development & Culture Training", value: "leadership_training" },
    { label: "1-on-1 Executive Leadership Consultation", value: "executive_coaching" },
] as const;