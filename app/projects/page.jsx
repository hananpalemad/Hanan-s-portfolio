"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import Project from "@/public/image/pro-1.jpg"
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Web Development",
	2: "AI & Machine Learning",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Alvalens"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>

				{/* choose category */}

				{/* projects */}

				<div className="w-full flex flex-col gap-2">
					<div className="w-full flex justify-between px-10">
						<a href="https://talrop-task.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img  className="w-[780px] h-96 hover:scale-105 transition transform"src="/image/pro-1.jpg" alt="" />
						</a>
						<a href="https://jsgame-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img className="w-[780px] h-96 hover:scale-105 transition transform" src="/image/pro-2.jpg" alt="" />
						</a>
					</div>
					<div className="w-full flex justify-between px-10">
						<a href="https://palemad-madrasa-nine.vercel.app//" target="_blank" rel="noopener noreferrer">
							<img className="w-[780px] h-96 hover:scale-105 transition transform" src="/image/pro-3.jpg" alt="" />
						</a>
						<a href="https://todo-list-woad-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img className="w-[780px] h-96 hover:scale-105 transition transform" src="/image/pro-4.jpg" alt="" />
						</a>
					</div>
				</div>




				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
				</motion.div>
			</main>
		</>
	);
}
