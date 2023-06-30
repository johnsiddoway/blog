import { Link } from "react-router-dom";

export default function NoPostFound() {
    return <>
        <h1>No Post Found</h1>
        <p>Please double check your link and maybe try again.</p>
        <Link to="/">Return Home</Link>
    </>
}