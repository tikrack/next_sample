"use client"

import Link from "next/link";
import {useRouter} from "next/navigation";

const Page = ({ params }) => {
    const router = useRouter();

    return (<>
        <Link href={"/"}>go back</Link>
        <br/>
        <button onClick={() => router.push("/")}>---redirect---</button>
    </>)
}

export default Page