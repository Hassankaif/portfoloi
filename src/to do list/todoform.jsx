import { createRef } from "react";
// import ".. /Card.css"

const Todoform=({Cardgenerator})=>{

    const workRef= createRef(null)
    const descRef=createRef(null)
    const dateRef=createRef(null)

    const handleTodoform=(e)=>{
        e.preventDefault();
        const work=workRef.current.value
        const desc=descRef.current.value
        const date=dateRef.current.value
        console.log(work,date,desc)
        Cardgenerator(work,date,desc);

    }

    return <>
    <div>
        <form onSubmit={handleTodoform}>
        <div>
            <br />
            <label> WORK  </label>
            <input type="text" name="WORK" id="WORK" required ref={workRef} />
            <br />
        </div>
        <div>
            <br />
            <label> DESCRIPTION  </label>
            <input type="text" name="desc" id="desc" required ref={descRef} />
            <br />
        </div>
        <div>
            <br />
            <label> DATE  </label>
            <input type="date" name="date" id="date" required ref={dateRef} />
            <br />
        </div>
        <br /><br />
        <button type="submit" className="button"> SUBMIT </button>
        </form>
    </div>
    </>
}
export default Todoform;