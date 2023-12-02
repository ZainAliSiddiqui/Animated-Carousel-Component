"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { servicesIcons, servicesIcons2 } from "@constants";

export default function Carousel() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

	return (
		<div
			ref={container}
			className="flex flex-col gap-[3vw] relative my-[300rem] bg-white z-10">
			<motion.div
				style={{ x: x1 }}
				className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">
				{servicesIcons.map((item, index) => {
					return (
						<div
							key={index}
							className="w-[25%] h-[20vw] flex items-center justify-center"
							style={{ backgroundColor: item.color }}>
							<div className="relative w-[80%] h-[80%]">
								<Image
									fill={true}
									alt={"image"}
									src={item.img}
									className="object-cover"
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div
				style={{ x: x2 }}
				className="flex relative gap-[3vw] w-[120vw] left-[-10vw]">
				{servicesIcons2.map((item, index) => {
					return (
						<div
							key={index}
							className="w-[25%] h-[20vw] flex items-center justify-center"
							style={{ backgroundColor: item.color }}>
							<div
								key={index}
								className="relative w-[80%] h-[80%]">
								<Image
									fill={true}
									alt={"image"}
									src={item.img}
									className="object-cover"
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
}
