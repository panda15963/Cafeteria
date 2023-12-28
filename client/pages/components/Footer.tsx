import React from "react";
const Footer = () => {
    return (React.createElement("div", { className: "bg-amber-100 text-black p-8 text-center" },
        React.createElement("p", null,
            "Built with ",
            React.createElement("a", { href: "https://nextjs.org/" }, "Next.js"),
            " and ",
            React.createElement("a", { href: "https://tailwindcss.com/" }, "Tailwind CSS"))));
}
export default Footer;