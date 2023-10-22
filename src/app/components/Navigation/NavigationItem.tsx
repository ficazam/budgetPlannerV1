import Link from "next/link";
import React from "react";

interface INavigationItemProps {
	name: string;
	icon: () => React.ReactNode;
	size: string;
	padding: string;
	bottomPosition: string;
	rightPosition: string;
	link: string;
}

const NavigationItem = (props: INavigationItemProps) => {
	const { icon, padding, size, bottomPosition, rightPosition, link } = props;

	const Icon = icon;

	return (
		<Link
			href={link}
			className={`flex absolute bg-color-prim-three border-2 border-alt-three rounded-full ${bottomPosition} ${rightPosition} ${size} ${padding}`}
		>
			{icon()}
		</Link>
	);
};

export default NavigationItem;
