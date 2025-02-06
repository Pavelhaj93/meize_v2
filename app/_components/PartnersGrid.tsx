import Image from "next/image";
import Link from "next/link";
import amos from "../public/logos/amos-academy.png";
import af from "../public/logos/angus-farm.png";
import avl from "../public/logos/anna-von-lipa.png";
import fs from "../public/logos/fashion-show.png";
import jad from "../public/logos/jencik-a-dcery.png";
import kt from "../public/logos/klaus-timber.png";
import ngp from "../public/logos/ngp.png";
import pg from "../public/logos/parallel-garden.png";
import pils from "../public/logos/pilsner.png";
import pbs from "../public/logos/prague-breakin-school.png";
import skj from "../public/logos/slavnost-kralovny-johanky.png";
import st from "../public/logos/srovnejto.png";
import str from "../public/logos/st-regis.png";
import tekstyl from "../public/logos/tekstyl.png";
import unibrick from "../public/logos/unibrick.png";

const partners = [
	{
		name: "unibrick",
		link: "https://www.unibrick.cz/",
		image: unibrick,
	},
	// {
	//     name: 'tekstyl',
	//     link: 'https://www.tekstyl.cz/',
	//     image: tekstyl,
	// },
	{
		name: "aa",
		link: "https://www.amos.academy",
		image: amos,
	},
	{
		name: "st",
		link: "https://www.srovnejto.cz/",
		image: st,
	},
	{
		name: "skj",
		link: "http://slavnostjohanky.cz/",
		image: skj,
	},
	{
		name: "pbs",
		link: "https://www.praguebreakinschool.cz/",
		image: pbs,
	},
	{
		name: "pg",
		link: "https://www.parallelgarden.com/",
		image: pg,
	},
	{
		name: "kt",
		link: "https://www.klaustimber.cz/",
		image: kt,
	},
	{
		name: "jad",
		link: "https://www.jencikadcery.cz/",
		image: jad,
	},
	{
		name: "fs",
		link: "https://werenext.eu/",
		image: fs,
	},
	{
		name: "avl",
		link: "https://annavonlipa.com/",
		image: avl,
	},
	{
		name: "af",
		link: "https://www.angusfarm.cz/",
		image: af,
	},
	{
		name: "ngp",
		link: "https://www.ngprague.cz/",
		image: ngp,
	},
	{
		name: "str",
		link: "https://st-regis.marriott.com/",
		image: str,
	},
	{
		name: "pils",
		link: "https://www.prazdrojvisit.cz/",
		image: pils,
	},
];

export default function PartnersGrid({ className = "" }) {
	return (
		<div className={`flex flex-wrap justify-center text-0 ${className}`}>
			{partners.map(({ name, link, image }, key) => {
				return (
					<Link
						href={link}
						key={`Partner: ${key}`}
						target="_blank"
						rel="nofollow noreferrer"
						className="w-full max-w-[250px] p-5 sm:p-10 h-40 sm:h-52 sm:max-w-1/2 lg:max-w-1/3 xl:max-w-1/5 hover:scale-105 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 will-change-transform flex justify-center items-center"
					>
						<div className="relative w-full h-full max-h-32">
							<Image src={image} layout="fill" objectFit="contain" alt={name} />
						</div>
					</Link>
				);
			})}
		</div>
	);
}
