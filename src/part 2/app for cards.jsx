const [carddata, setcarddata]= useState([{ title:'apple', num:'10'}]);

const cardgenerator=()=>{
  const newobject = {
    // id:`${carddata.length+1}`,
    title: `card ${carddata.length+1}` ,
    num : `${carddata.length+1}`
  }
  setcarddata([...carddata, newobject]);
}
const carddata =[
  {id:1, title:'apple', num:'10'},
  {id:2, title:'apple' ,num:'20'},
  {id:3, title:'apple' ,num:'30'},
  {id:4, title:'apple', num:'40'},
  {id:5, title:'apple' ,num:'50'}
]
console.log(carddata)

const Cardgen=()=>{
  carddata.push({title:'mango', num:'90'})
  console.log(carddata, "successful")
}

return <>
  <div className='container'>
      {carddata.map((card,indx)=>{
        return (
              <Card key={indx} title={card.title} num={card.num} />
            )
      })}
  </div>
  <div>
    <button className='button' onClick={cardgenerator}> generate card </button>
  </div>
  </>
