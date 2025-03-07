import {useNavigate, useRouteError} from "react-router-dom";
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(()=>{
        !error && navigate("/");
    })

    return (
        error &&
            <div id="error-page" className="flex col center">
                <Helmet>
                    <title>Error</title>
                </Helmet>
                <h2 className="h2 black">Oops!</h2>
                <p className="h1 black">
                    <i>{error.status}</i>
                </p>
                {
                    !error.statusText ?
                        <p className="regular black">Sorry, an unexpected error has occurred.</p>
                        :
                        <p className="regular black">
                            <i>{error.statusText || error.message}</i>
                        </p>
                }
            </div>
    );
}
export default ErrorPage