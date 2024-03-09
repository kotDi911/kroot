import { useRouteError } from "react-router-dom";

const ErrorPage = (err)=> {
    const error = useRouteError();
    console.error(err);
    console.error(error);

    return (
        <div id="error-page" className="flex col center">
            <h2 className="h2 black">Oops!</h2>
            <p className="h1 black">
                <i>{error.status}</i>
            </p>
            <p className="regular black">Sorry, an unexpected error has occurred.</p>
            <p className="regular black">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
export default ErrorPage