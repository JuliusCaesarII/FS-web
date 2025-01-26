
const Button = () => {
  return(
    <button onClick={handleClick}> CLICK ME HERE </button>
  )
}

const handleClick = () => {
  console.log("Free Robux")
}

const person = {
  name: "Teng",
  age: 25
}

const person2 = {
  name: "John",
  age: 30
}

const bool = false;

const persons = [
  person,
  person2,
]

const homeworkList = [
  "Math hw1",
  "Math hw2",
  "Math hw3",
  "Math hw4",
  "Math hw5",
  "ELA" 
]

const App = () => {
  return (
    <div className="container" id="container" 
      style={{backgroundColor : "brown"}}>
      <h1> Greetings {bool ? person.name : person2.name} </h1>
      {persons.map((person,index) => (
        <p key={index}>Name: {person.name}, Age: {person.age} </p>
      ))}
      <p> Hello World</p>
      <Button />
      <a> a link </a>
      {homeworkList.map((hw, index) => (
        <p key={index}>HW: {hw}</p>
      ))}
    </div>
  )
}


export default App;