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
	image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
	title: "Managed agency selection",
	description: "Strenghten your onboarding process",
	items: [
		{
			title: "Brief",
			description:
				"Complete brief writing or simple guidance on what to include, we've got you covered.",
			image: {
				src: "/img/icon1.png",
				alt: "",
				width: 80,
				height: 80,
			},
		},
		{
			title: "Search",
			description:
				"In-depth agency search coverng; criteria matching, door knocking and due-diligence vetting.",
			image: {
				src: "/img/icon2.png",
				alt: "",
				width: 80,
				height: 80,
			},
		},
		{
			title: "Pitch",
			description:
				"Comprehensive pitch management, including comms, diary management and pitch hosting.",
			image: {
				src: "/img/icon3.png",
				alt: "",
				width: 80,
				height: 80,
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
