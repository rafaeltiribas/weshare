import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"
import CustomError from "../util/CustomError";

const ErrorPage = () => {
  
  const error = useRouteError();

  return (
    <>
    <NavBar /> 
    <div className="container mt-3 error">
        {isRouteErrorResponse(error) ? "Error 422." :
        error instanceof CustomError && error.errorCode === 422 ? error.msgs?.join('\n') : 
        error instanceof Error ? error.message : "Error [?]."}
    </div>
    </>
  )
}
export default ErrorPage