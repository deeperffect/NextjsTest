import styled from "styled-components";

export const SectionWrapper = styled.section`
	padding: 5rem 0;
`;

export const SectionShell = styled.div`
	max-width: 62.5rem;
	margin: 0 auto;
	padding: 0 1rem;
`;

export const SectionHead = styled.header`
	padding-bottom: 2rem;
`;

export const SectionBody = styled.div``;

export const SectionColumns = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 5rem;
`;

export const SectionImage = styled.figure`
	font-size: 0;

	img {
		display: block;
		width: 100%;
		height: auto;
	}
`;

export const SectionContent = styled.div`
	padding: 1rem 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
	<div {...props} />
))`
	max-width: 32.03rem;
	max-height: 65rem;
	width: 100%;
	height: 100%;
	margin-left: auto;
	position: relative;
	padding-bottom: 68%;

	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
