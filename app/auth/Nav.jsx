import Link from "next/link"
import Login from "./Login"
import Logged from "./Logged"
import {getServerSession} from 'next-auth/next'
import { authOptions } from "../../pages/api/auth/[...nextauth]"

const Nav = async () => {
    const session = await getServerSession(authOptions)
  return (
    <nav className="flex justify-between items-center py-8">
        <Link href={'/'}>
            <h1 className="font-bold text-lg">Send it</h1>
            {/* CLIENT IN HERE */}
        </Link>
        <ul className="flex items-center gap-6">
            {!session?.user && <Login />}
            {session?.user && <h1>{session.user.name} <Logged image={session.user?.image || ''}/> </h1>}
        </ul>
    </nav>
  )
}

export default Nav