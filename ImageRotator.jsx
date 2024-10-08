import { useState, useEffect } from "react";

const ImageRotator = ({ images, altText }) => {
	const [currentImage, setCurrentImage] = useState(images[0]);

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			index = (index + 1) % images.length;
			setCurrentImage(images[index]);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, [images]);

	return (
		<img
			src={currentImage}
			alt={altText}
			className="mb-2 w-16 h-16"
		/>
	);
};

export default ImageRotator;
