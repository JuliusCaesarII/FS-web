// const Student = (props) => {
//     return (
//         <div className="border rounded-lg m-3">
//             <h1> {props.name} </h1>
//             <p> {props.id} </p>
//             <p> {props.school} </p>
//         </div>
//     )
// }


const Student = ({ name, id, school}) => {
    return (
        <div className="border rounded-lg m-3">
            <h1> {name} </h1>
            <p> {id} </p>
            <p> {school} </p>
        </div>
    )
}


export default Student