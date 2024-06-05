"use client";
import Image from "next/image";
import {
	SectionBackground,
	SectionBody,
	SectionColumns,
	SectionContent,
	SectionHead,
	SectionImage,
	SectionShell,
	SectionWrapper,
} from "./elements";
import Card from "@/collections/Card/Card";

export const Section = ({
	image,
	title,
	description,
	items,
	sectionBackground,
}) => {
	return (
		<SectionWrapper>
			<SectionShell>
				<SectionBackground>
					<Image
						src={sectionBackground.src}
						alt={sectionBackground.alt}
						width={sectionBackground.width}
						height={sectionBackground.height}
					/>
				</SectionBackground>
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
							{items.map((item, index) => {
								return (
									<Card
										style={{ "--card-index": index }}
										key={item.title}
										{...item}
									></Card>
								);
							})}
						</SectionContent>
					</SectionColumns>
				</SectionBody>
			</SectionShell>
		</SectionWrapper>
	);
};
