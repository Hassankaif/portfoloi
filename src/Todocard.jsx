import "../src/components/Card.css";

const Todocard=({ work, desc, date }) =>{

    return <>
        <div className='contain' >
            <div className="card">
                <h1> Work: {work} </h1>
                <p> Description: {desc} </p>
                <h4> Date : {date} </h4>
            </div>
            <br />
        </div>
    </>
}
export default Todocard;

