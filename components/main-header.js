import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.logo} href="/">
				<Image src={logoImg.src} alt="logo" priority
					width={200}
					height={200} />
				NextLevel Food
			</Link>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href="/meals">Browser Meals</Link>
					</li>
					<li>
						<Link href="/community">Foods Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}