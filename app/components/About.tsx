"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="styles.sectionHeadText">Aperçu.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				En tant que talentueux développeur Web FullStack,
				j'ai perfectionné mes compétences en travaillant avec une variété
				de bibliothèques et technologies, notamment React.js, Next.js et Three.js.
				Grâce à mon expérience, j'ai développé une compréhension approfondie
				de la manière dont ces bibliothèques peuvent être exploitées pour créer
				des interfaces utilisateur dynamiques et attrayantes. De plus,
				j'apprends vite et j'ai travaillé sur de nombreux projets utilisant
				des frameworks CSS populaires tels que Bootstrap.
				J'ai confiance en ma capacité à créer des designs élégants et réactifs
				qui répondent aux besoins spécifiques de tout projet. Avec un sens aigu
				du détail et une passion pour fournir un travail de haute qualité,
				je me consacre à créer des expériences belles et conviviales qui ravissent
				les utilisateurs.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
