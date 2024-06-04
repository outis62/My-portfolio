export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
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
	// {
	// 	name: "Redux Toolkit",
	// 	icon: "/tech/redux.webp",
	// },
	// {
	// 	name: "Tailwind CSS",
	// 	icon: "/tech/tailwind.webp",
	// },
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
		link: "https://www.linkedin.com/",
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
		link: "https://www.behance.net/boureima_zabre",
	},
	{
		id: 4,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Boureima ZABRE",
		image: "/socialmedia/facebook.svg",
		link: "https://facebook.com/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Boureima ZABRE",
		image: "/socialmedia/x.svg",
		link: "https://x.com/boureima_zabre",
	},
	{
		id: 6,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Boureima ZABRE",
		image: "/socialmedia/instagram.svg",
		link: "https://instagramm.com/outis62",
	},
];

const projects = [
	{
		name: "BD Offres & Démandes Enabel Sénégal",
		description:
			"A Fully Responsive Random Quote generating website project given by Free Code Camp while completing Front-End Libraries Certifications built using React.JS , Bootstrap CSS and HTML.",
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
	// {
	// 	name: "HooBank",
	// 	description:
	// 		"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/hoobank.webp",
	// 	source_code_link: "https://github.com/omunite215/hoobank",
	// 	netlify_link: "https://hoobankbyom.netlify.app/",
	// },
	// {
	// 	name: "Provid A Youtube Clone",
	// 	description:
	// 		"Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "materialui",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "rapidapi",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/provid.webp",
	// 	source_code_link: "https://github.com/omunite215/Provid-A-YouTube-Clone",
	// 	netlify_link: "https://providbyom.netlify.app/",
	// },
	{
		name: "A 3D Developer Portfolio",
		description:
			"Un site Web 3D Portfolio réactif créé à l'aide de Three.js, une bibliothèque JavaScript multi-navigateurs et une interface de programmation d'application utilisée pour créer et afficher des infographies 3D animées dans un navigateur Web utilisant WebGL. Il possède une belle interface réalisée à l’aide de Tailwind CSS et React.",
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
