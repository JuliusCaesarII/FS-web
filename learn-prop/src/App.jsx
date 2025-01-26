import Student from "./components/Students.jsx"

const Box = ({ name, description, originated }) => {
    return (
        <div className="border rounded-lg m-3">
            <h1> {name} </h1>
            <p> {description} </p>
            <p> {originated} </p>
        </div>
    )
}

const App = () => {

    const students = [

        {
            name: "John Doe",
            id: "123456",
            school: "ABC School"
        },

        {
            name: "Juan Carlos",
            id: "000011",
            school: "Heist 101"
        },

        {
            name: "George Washinton",
            id: "808080",
            school: "Washinton High"
        }
    ]

    const boxes = [

        {
            name: "long box",
            description: "Longgggg",
            originated: "Boks"
        },

        {
            name: "iron box",
            description: "Hard as an iron",
            originated: "Iron mine"
        },

        {
            name: "big box",
            description: "Box But Bigger",
            originated: "China"
        }
    ]

    return (
        <div>
            <h1 className="text-lime-200"> Learn prop </h1>
            {students.map((student) => {
                return <Student key={student.id} name={student.name} id={student.id} school={student.school} />
            })}

            {boxes.map((box) => {
                return <Box key={box.name} name={box.name} description={box.description} originated={box.originated} /> 
            })}
        </div>
    )
}

export default App;