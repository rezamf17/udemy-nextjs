import Link from "next/link"
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"

export default function MainHeader(){
    return (
        <header className={classes.header}>
            <h1>NextLevel Food</h1>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="logo" />
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