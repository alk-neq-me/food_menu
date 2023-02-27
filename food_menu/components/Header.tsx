export default function Header() {
	return (
		<div className="w-full relative">
			<div className="max-h-[350px] md:max-h-[400px] overflow-hidden">
	      <img
	        src="/food_header.jpg" 
	        alt="food"
	        className="w-full object-none object-center blur-sm"
	      />
			</div>
			<div className="absolute flex flex-col gap-5 md:gap-7 justify-center items-center font-xl inset-y-0 h-full w-full">
				<h1 className="font-heading text-5xl max-w-[350px] text-center font-bold text-white">Black Gyak Bites</h1>
				<p className="uppercase text-white">caribbean cuisine</p>
			</div>
		</div>
	);
};
