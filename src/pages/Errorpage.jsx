import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <>
        <h2 className="text-2xl font-bold">Not found</h2>
        <Link to="/" className="btn">Go to home</Link>      
        </>
    );
};

export default Errorpage;