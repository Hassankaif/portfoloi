import { Link } from "react-router";

const Navigation=()=>{
    return <>
        <Link to="/form"> FORMS </Link>
        <Link to="/"> HOME </Link>
        <Link to="/todo"> TO DO  </Link>
    </>
}

export default Navigation;