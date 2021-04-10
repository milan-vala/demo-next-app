import Link from "next/link";

export default function Nav() {

    return (
        <div>
            <div>
                Home
            </div>
            <div>
                <Link href="/user/add">Add user</Link>
            </div>
            <div>
                <div>
                    <Link href="/user">Users</Link>
                </div>
            </div>
        </div>
    )
}