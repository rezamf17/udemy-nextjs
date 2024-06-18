import Link from "next/link"
import logoImg from "@/assets/logo.png"

export default function MainHeader(){
    return (
        <header>
            <h1>NextLevel Food</h1>
            <Link href="/">
                <img src={logoImg.src} alt="logo" />
            </Link>
            <nav>
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