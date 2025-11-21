import lec4 from "./Lec4.jsx";

function Student(props){
    const student = props.student;

    const getFinalGrafe = () =>{
        return (Number(student.exam) + Number(student.exercise)) / 2;
    }

    const  getColorByGreen = () =>{
        const grade = getFinalGrafe()
            if(grade > 90){
                return "green"
            }
            else if (grade < "40"){
                return "red"
            }
            else {
                return "grey"
            }
    }

    return(
        <div style={{
            border: "1px solid blue",
            padding: "10px",
            display: "flex",
            gap: 20,
            marginBottom: "10px"
        }}>

            <div>Name:{name}</div>
            <div>Exam:{lec4.exam}</div>
            <div>Exe:{lec4.exe}</div>
            <div>Final Grade:{getFinalGrafe()}</div>


        </div>
    )
}
export default Student