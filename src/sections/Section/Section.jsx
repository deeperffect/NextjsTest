"use client";
import Image from "next/image";
import {
	SectionBody,
	SectionColumns,
	SectionContent,
	SectionHead,
	SectionImage,
	SectionShell,
	SectionWrapper,
} from "./elements";
import Card from "@/collections/Card/Card";

export const Section = ({ image, title, description, items }) => {
	return (
		<SectionWrapper>
			<SectionShell>
				<SectionHead>
					<h2>{title}</h2>
					<p>{description}</p>
				</SectionHead>
				<SectionBody>
					<SectionColumns>
						<SectionImage>
							<Image
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						</SectionImage>
						<SectionContent>
							{items.map((item) => {
								return <Card key={item.title} {...item}></Card>;
							})}
						</SectionContent>
					</SectionColumns>
				</SectionBody>
			</SectionShell>
		</SectionWrapper>
	);
};
