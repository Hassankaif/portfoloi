import Usercontext from "./usercontext";
import { useState } from "react";

const Userinfo=({children})=>{

    const [user1, setuser1]= useState({name: 'kaif', age:'20'})

    const changeuser=()=>{
        // const user2=;
        setuser1({name: "hasan", age:'30'})
    }
    
    return (<>
        <Usercontext.Provider value={{user1,changeuser}}>
            {children}
        </Usercontext.Provider>
    </>)

}
export default Userinfo