import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col space-y-5 items-center">
            <h1 className="text-6xl text-center font-bold mt-5">Oops!!</h1>
                <Link to="/" className="text-center btn btn-accent">Home</Link>
        </div>
    );
};

export default ErrorPage;