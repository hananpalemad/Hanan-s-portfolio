import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Hanan's | Portofolio",

    description:
		"",

    author: "Hanan Shafelbilyunazra",
    siteUrl: "https://www.hanan.com",
    applicationName: "Hanan's",

    keywords: [
		"hanan",
		"hanan pt",
		"shafel",
		"hanan ",
		"hanan shaf",
		"bloodfallen",
		"hanan porto",
		"hanan um",
	],

    openGraph: {
		type: "website",
		url: "https://www.hanan.com",
		title: "Hanan's | Portofolio",
		site_name: "Hanan's | Portofolio",
		description: "My name is Hanan, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Hanan's Portofolio",
			},
		],
		site_name: "Hanan's | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}