module.exports = {
    content: ["*.html"],
    theme: {
        extend: {
            colors: {
                primaryBg: "#f5f5f5",
                primaryText: "#18191a",
                secondaryText: "#949494",
            },
            fontFamily: {
                Krona: ["Krona One", "sans-serif"],
                Sora: ["Sora", "sans-serif"],
            },
            fontSize: {
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
            },
            lineHeight: { 12: "3rem", 13: "3.25rem", 14: "3.5rem" },
            backgroundImage: {
                hero: "url('images/landing.jpg')",
            },
        },
    },
    plugins: [],
};
