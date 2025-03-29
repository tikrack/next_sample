import Link from "next/link";

const Page = ({ params }) => (
    <>
        { params.aboutId }
        <br/>
        <Link href={"/"}>go back</Link>
    </>
)

export default Page