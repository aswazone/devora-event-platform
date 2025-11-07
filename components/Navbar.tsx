import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href={'/'} className={'logo'}>
                    <Image alt={'logo'} src={'/icons/logo.png'} width={80} height={80} />
                </Link>
                <ul>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Events</Link>
                    <Link href={'/'}>Create Events</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
