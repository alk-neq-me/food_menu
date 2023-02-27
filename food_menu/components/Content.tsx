export default function Content() {
	return (
		<div className="flex flex-col mb-[100px] gap-2 items-center justify-center">
			<div className="relative overflow-hidden w-[200px] md:w-[300px] lg:w-[400px]">
				<img
					src="/cooking-food.jpg"
				/>
			</div>
			
			<div className="text-center max-w-[300px] md:max-w-full text-[#7c2d12]">
				<p className="font-type text-lg font-normal">Hours</p>
				<p className="font-type font-thin">monday - friday: 8am - 4pm</p>
				<p className="font-type font-thin">saturday - sunday: 10am - 4pm</p>
			</div>
			<div className="text-center max-w-[300px] md:max-w-full text-[#7c2d12]">
				<p className="font-type text-lg font-normal">Find us</p>
				<p className="font-type font-thin">1101 mass ave. boston, ma 617-303-1101</p>
			</div>
		</div>
	);
};
