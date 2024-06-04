import styles from "./page.module.css";
import { Hero } from "@/sections";
import { AgencySelection } from "@/sections";

const heroProps = {
	image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
	title: "Agency procurement, outsourced.",
	description: "Start the process here",
	ctaText: "Start",
};

const agencySelectionProps = {
	image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
	title: "Agency procurement, outsourced.",
	description: "Start the process here",
	ctaText: "Start",
};

export default function Home() {
	return (
		<main>
			<Hero {...heroProps} />
			<AgencySelection {...agencySelectionProps} />
		</main>
	);
}
