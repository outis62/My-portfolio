import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="https://mega.nz/file/1MlG3bpT#w5rc-HrqtHIrXSZ84E185VwuB3AWfXo515DBZt6t6vE"
			target="_blank"
		>
			<button
				type="button"
				className=" font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300"
				onClick={() =>
					alert(
						"Vous verrez maintenant un lien Mega.nz. Cliquez sur télécharger pour télécharger le CV au format PDF. Merci pour la visite !!",
					)
				}
			>
				<Image
					src="/resume.svg"
					width={24}
					height={24}
					alt="resume"
					className="object-contain animate-pulse"
				/>
				<span className="lg:block hidden text-white">CV</span>
			</button>
		</Link>
	);
};

export default ResumeButton;
