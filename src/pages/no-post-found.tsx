import { Link, useRouteError } from "react-router-dom";

export default function NoPostFound() {
    let error = useRouteError();
    console.error(error);
    return <>
        <h1>No Post Found</h1>
        <p>Please double check your link and maybe try again.</p>
        <Link to="/">Return Home</Link>
    </>
}