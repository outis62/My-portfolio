export const navLinks = [
	{
		id: "about",
		title: "A propos",
	},
	{
		id: "work",
		title: "Technologies",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "3D Developer",
		icon: "/mobile.webp",
	},
	{
		title: "System Ingeneer",
		icon: "/backend.webp",
	},
	{
		title: "Mobile Developer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "Laravel",
		icon: "/tech/laravel.png",
	},
	{
		name: "Livewire",
		icon: "/tech/livewire.png",
	},
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "Adobe XD",
		icon: "/tech/adobexd.png",
	},
];

const experiences = [
	{
		title: "Web Designer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2020 -  2021",
		points: [
			"Analyzing the needs of customer in a website.",
			"Designing User Interface (UI) for the problem statement.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
		],
	},
	{
		title: "Wordpress Developer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2021 - 2022",
		points: [
			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn est une plateforme de médias sociaux axée sur les entreprises et l'emploi qui fonctionne via des sites Web et des applications mobiles.",
		name: "Boureima ZABRE",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/boureima-zabre-932aa71b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 2,
		testimonial:
			"Consultez également mon profil Github où j'ai partagé tous mes codes, du basique au avancé.",
		name: "Boureima ZABRE",
		image: "/tech/github.webp",
		link: "https://github.com/outis62",
	},
	{
		id: 3,
		testimonial:
			"Behance est une plateforme de médias sociaux appartenant à Adobe dont l'objectif principal est de présenter et de découvrir le travail créatif.",
		name: "Boureima ZABRE",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/boureimazabre",
	},
	{
		id: 4,
		testimonial:
			"Facebook est une plateforme de réseau social mondiale qui permet aux utilisateurs de se connecter avec leurs amis, leur famille et leurs communautés.",
		name: "Boureima ZABRE",
		image: "/socialmedia/facebook.svg",
		link: "https://www.facebook.com/share/mWUZxGNnMasAsQLN/?mibextid=qi2Omg",
	},
	{
		id: 5,
		testimonial:
			"Twitter est une plateforme de réseautage social largement utilisée qui permet aux utilisateurs de publier et d'interagir avec des messages courts appelés « tweets ».",
		name: "Boureima ZABRE",
		image: "/socialmedia/x.svg",
		link: "https://x.com/boureima_zabre",
	},
	{
		id: 6,
		testimonial:
			"Découvrez mes études de design et mes projets créatifs sur mon profil Instagram pour un aperçu approfondi de mes compétences et de ma vision artistique.",
		name: "Boureima ZABRE",
		image: "/socialmedia/instagram.svg",
		link: "https://www.instagram.com/zabre47",
	},
];

const projects = [
	{
		name: "BD Offres & Démandes Enabel Sénégal",
		description:
			"A fully responsive bid and request management web application project with front-end libraries built using Laravel, Livewire, Bootstrap CSS and HTML.",
		tags: [
			{
				name: "Laravel",
				color: "blue-text-gradient",
			},
			{
				name: "Livewire",
				color: "pink-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/quote.webp",
		source_code_link:
			"https://svr-git.switch-maker.net/projets-enabel/offre-demande-senegal/web-app",
		netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
	},
	{
		name: "Site Legrand WEB Services",
		description:
			"React Admin Dashboard is a stunning web application that has a beautiful User Interface and has been built using advanced JavaScript concepts, React, and Tailwind CSS which has different graphs, stats and themes.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "type script",
				color: "orange-text-gradient",
			},
			{
				name: "next js",
				color: "green-text-gradient",
			},
			{
				name: "remix js",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/lws.png",
		source_code_link: "https://github.com/legrandwebservices/main-website",
		netlify_link: "javascript:void(0)",
	},
	{
		name: "A 3D Developer Portfolio",
		description:
			"A responsive 3D Portfolio website created using Three.js, a cross-browser JavaScript library and application programming interface used to create and display animated 3D infographics in a web browser using WebGL.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "next js",
				color: "blue-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/3dprojet.png",
		source_code_link: "https://github.com/outis62/my_portfolio",
		netlify_link: "https://portfoliobyompatel.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
