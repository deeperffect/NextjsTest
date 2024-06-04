// The Card to be exported goes here

import Image from "next/image";
import { CardColumns, CardContent, CardIcon, CardWrapper } from "./elements";

const Card = ({ image, title, description }) => {
	return (
		<CardWrapper>
			<CardColumns>
				<CardIcon>
					<Image
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				</CardIcon>
				<CardContent>
					<h4>{title}</h4>
					<p>{description}</p>
				</CardContent>
			</CardColumns>
		</CardWrapper>
	);
};

export default Card;
