import styled from "styled-components";

export const SectionWrapper = styled.section`
	padding: 5rem 0;
	overflow: hidden;
`;

export const SectionShell = styled.div`
	max-width: 62.5rem;
	margin: 0 auto;
	padding: 0 1rem;
	position: relative;
	isolation: isolate;
`;

export const SectionBackground = styled.figure`
	position: absolute;
	left: -13rem;
	top: 60%;
	width: 50rem;
	z-index: -1;
	transform: translateY(-50%);

	img {
		display: block;
		width: 100%;
		height: auto;
	}
`;

export const SectionHead = styled.header`
	padding-bottom: 3rem;
	text-align: center;

	h2 {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	p {
		margin-top: 0;
	}
`;

export const SectionBody = styled.div``;

export const SectionColumns = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 5rem;

	@media (max-width: 1199px) {
		gap: 1.5rem;
	}

	@media (max-width: 1023px) {
		grid-template-columns: auto;
`;

export const SectionImage = styled.figure`
	font-size: 0;
	margin: 0;

	@media (max-width: 1023px) {
		max-width: min(100%, 350px);
		margin: 0 auto;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}
`;

export const SectionContent = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	@media (max-width: 1023px) {
		align-items: center;
	}
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
