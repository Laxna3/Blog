import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
export default function Navbar(){
    return(
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-3">
            <Link href="/" className="font-bold text-3xl">Laxna's <span className="text-blue-500">Blog</span></Link>
            <ModeToggle/>
       </nav>
    );
}