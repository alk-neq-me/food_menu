import React from "react";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: React.ReactNode
}

const Button = (props: ButtonProps) => (
	<a {...props} className="bg-primary p-2 rounded text-center w-full text-xl text-white active:bg-primary-active shadow-md">
		{props.children}
	</a>
);

export default function Buttons() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex gap-5 w-[250px] md:w-[350px] flex-col items-center justify-center h-[300px]">
				<Button href="/food_header.jpg">FOOD MENU</Button>
				<Button href="/food_header.jpg">DRINKS MENU</Button>
				<Button href="/food_header.jpg">CATERING MENU</Button>
			</div>
		</div>
	);
};
