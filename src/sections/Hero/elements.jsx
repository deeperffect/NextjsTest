import styled from "styled-components";
import {
	Button,
	SectionContainer,
	SectionBigHeading,
	SectionSubheading,
} from "@/components";

export const StyledContainer = styled(({ height, ...props }) => (
	<SectionContainer {...props} />
))`
	align-items: center;
`;

export const StyledGetStartedBtn = styled((props) => (
	<Button {...props} variant="contained" color="main" />
))`
	margin-top: 4.375rem;
	padding-top: 0;
	padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
	margin: 0;
	color: black;
`;

export const StyledDescription = styled((props) => (
	<SectionSubheading {...props} />
))`
	margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
	color: black;
	width: max(30%, min(21.875rem, 100%));
	margin-left: auto;
	font-family: sans-serif;

	@media (max-width: 767px) {
		width: 100%;
		text-align: center;
	}
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
	display: flex;

	@media (max-width: 767px) {
		justify-content: center;
	}
`;

export const StyledImageContainer = styled(({ ...props }) => (
	<div {...props} />
))`
	max-width: min(32.03rem, 100%);
	max-height: 65rem;
	width: 100%;
	height: 100%;
	margin-left: auto;
	position: relative;
	padding-bottom: 59.5%;
	overflow: hidden;

	@media (max-width: 767px) {
		max-width: 100%;
		padding-bottom: 62.5%;
	}

	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

export const StyledHeroWrapper = styled(StyledContainer)`
	padding: 0.5rem;

	@media (max-width: 1119px) and (min-width: 768px) {
		gap: 2rem;
	}

	@media (max-width: 767px) {
		padding: 1rem;
		flex-direction: column-reverse;
	}
`;
