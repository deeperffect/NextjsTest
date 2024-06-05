// Styled elements for the Card go here
import styled from "styled-components";

export const CardContent = styled.div`
	font-size: 0.875rem;

	h4 {
		font-size: 1.25rem;
		font-weight: 600;
		padding-bottom: 0.25rem;
		text-decoration: underline;
		text-decoration-thickness: 0.125rem;
		text-underline-offset: 0.125rem;
		text-decoration-color: var(--hover-color);
		transition: text-decoration-color 0.3s, color 0.3s;
	}

	> p {
		line-height: 1.2;
	}
`;

export const CardIcon = styled.figure`
	margin: 0;
	font-size: 0;
	aspect-ratio: 1;

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

export const CardColumns = styled.div`
	display: grid;
	grid-template-columns: 3.5rem auto;
	gap: 2rem;
	align-items: center;
`;

export const CardWrapper = styled.div`
	--max-width: 22rem;
	--step: 2rem;
	--hover-color: transparent;
	border: 0.125rem solid var(--hover-color);
	min-height: 7.5rem;
	max-width: min(
		calc(var(--max-width) + (var(--step) * var(--card-index, 0))),
		100%
	);
	background-color: #f9f9f9;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	transition: border-color 0.3s;

	&:hover {
		--hover-color: #549ffc;
	}

	&:hover h4 {
		color: #549ffc;
	}
`;
