// Styled elements for the Card go here
import styled from "styled-components";

export const CardContent = styled.div``;

export const CardIcon = styled.figure``;

export const CardColumns = styled.div``;

export const CardWrapper = styled.div`
	background-color: ${({ theme, bgColor }) => theme[bgColor]};
`;
