import Usercontext from "./usercontext";
import { useContext } from "react";

const Usercard=()=>{
    const pointer= useContext(Usercontext)
    return <>
        <div>
            <h2> user card</h2>
            <h3> NAME: {pointer.user1.name}</h3>
            <h4>AGE {pointer.user1.age}</h4>
            <button onClick={pointer.changeuser}> change user </button>
        </div>
    </>
}

export default Usercard;