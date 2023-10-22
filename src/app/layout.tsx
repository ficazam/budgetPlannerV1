import Navigation from "./components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Budget Planner V0",
	description: "Your awesome budgeting app!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
			<Navigation />
		</html>
	);
}
