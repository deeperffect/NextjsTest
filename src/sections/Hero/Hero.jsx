"use client";
import Image from "next/image";

import {
	StyledTextContainer,
	StyledGetStartedBtn,
	StyledTitle,
	StyledDescription,
	StyledCTAContainer,
	StyledImageContainer,
	StyledHeroWrapper,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
	return (
		<StyledHeroWrapper {...props}>
			<StyledTextContainer>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{description}</StyledDescription>
				<StyledCTAContainer>
					<StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
				</StyledCTAContainer>
			</StyledTextContainer>
			<StyledImageContainer>
				<Image
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			</StyledImageContainer>
		</StyledHeroWrapper>
	);
};
