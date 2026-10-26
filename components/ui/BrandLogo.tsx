export default function BrandLogo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Dr. Immanuelson Sam Insignia"
        >
            {/* Letter 'I' */}
            <path
                d="M26 28 H38 V72 H26 Z"
                fill="#F8F9FA"
            />

            {/* Letter 'S' */}
            <path
                d="M48 37 C48 31 54 27 64 27 C72 27 78 30 80 34 L72 39 C70 37 67 35 63 35 C59 35 56 36 56 39 C56 42 59 43 65 45 L70 47 C80 50 84 56 84 63 C84 71 77 75 66 75 C57 75 50 71 47 65 L55 60 C57 63 61 66 66 66 C70 66 74 64 74 61 C74 57 71 55 64 53 L59 51 C52 48 48 43 48 37 Z"
                fill="#F8F9FA"
            />

            {/* Dynamic Gold Orbit & Leaping Figure */}
            <path
                d="M18 52 C22 66 38 73 58 70 C72 68 83 60 88 50 C80 56 68 61 54 62 C36 63 24 58 20 49 C18 43 21 37 26 33 C22 38 17 45 18 52 Z"
                fill="#D4AF37"
            />

            {/* Front Accent Swoosh */}
            <path
                d="M32 58 C45 64 62 61 76 50 C65 57 50 58 38 54 C35 53 33 55 32 58 Z"
                fill="#EED888"
            />

            {/* Pinnacle Figure Head */}
            <circle cx="84" cy="38" r="5" fill="#D4AF37" />
        </svg>
    );
}