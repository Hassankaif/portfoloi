// App.jsx

  
const [userinfo, setuserinfo]= useState("kaif")

const parentfunc=(childdata)=>{
  setuserinfo(childdata)
}

return <>
<h2>data received from child is ....</h2>
{userinfo}
<br /><br />
<Child parentfunction={parentfunc} />
</>
