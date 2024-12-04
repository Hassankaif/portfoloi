// app.jsx
// use effect with empty dependency list. renders only one time.
const [user,setuser]= useState("")

useEffect(()=>{
    const fetchdata=async()=>{
        const res= await fetch("https://randomuser.me/api/")
        const data= await res.json()
        console.log(data)
        const data1 =JSON.stringify(data)
        setuser(data1)
    }
    fetchdata()

},[])

//app.jsx
// use effect with no dependency list. renders every time.

//app.jsx
// use effect with  dependency list. renders based on conditions (or variables) in dependency list.

