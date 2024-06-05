import styles from "./page.module.css";
import { Hero } from "@/sections";
import { Section } from "@/sections";

const heroProps = {
	image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
	title: "Agency procurement, outsourced.",
	description: "Start the process here",
	ctaText: "Start",
};

const sectionProps = {
	sectionBackground: {
		src: "/img/background.png",
		alt: "",
		width: 1000,
		height: 1680,
	},
	image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
	title: "Managed agency selection",
	description: "Strenghten your onboarding process",
	items: [
		{
			title: "Brief",
			description: {
				__html: "Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.",
			},
			image: {
				src: "/img/icon1.png",
				alt: "",
				width: 60,
				height: 60,
			},
		},
		{
			title: "Search",
			description: {
				__html: "In-depth agency search coverng; <strong>criteria matching</strong>, door knocking and due-diligence vetting.",
			},
			image: {
				src: "/img/icon2.png",
				alt: "",
				width: 60,
				height: 60,
			},
		},
		{
			title: "Pitch",
			description: {
				__html: "Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.",
			},
			image: {
				src: "/img/icon3.png",
				alt: "",
				width: 60,
				height: 60,
			},
		},
	],
};

export default function Home() {
	return (
		<main>
			<Hero {...heroProps} />
			<Section {...sectionProps} />
		</main>
	);
}
