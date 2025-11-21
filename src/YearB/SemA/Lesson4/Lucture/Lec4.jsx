import Student from "./Student.jsx";
import React from "react";

class Lec4 extends React.Component{
    state = {
        allStudents: [{
            name:"Or",
            exam: 90,
            exe: 100
        }],
        studentName : "",
        studentExam : 0,
        studentExe : 0,
        searchValue: ""
    }

    render() {
        const filtered = this.state.allStudents.filter(item => {
            if(item.name.toLocaleLowerCase().includes(this.state.searchValue)){
                return true
            }
            return false
        })
        return(

            <>
                <div>Counter: {this.state.allStudents.length == 0 ? <div>No Students in the list</div>:this.state.allStudents.length }</div>
                <input value={this.state.studentName} onChange={(event)=> {this.setState({studentName : event.target.value})}} placeholder={"Enter student name: "}/>
                <input type={"number"} value={this.state.studentExam} onChange={(event)=> {this.setState({studentExam : event.target.value})}} placeholder={"Enter student exam: "}/>
                <button disabled={this.state.studentName.length === 0} onClick={() => {
                    const  newStudent = {
                        name: this.state.studentName,
                        exam: this.state.studentExam
                    }
                    const updated = this.state.allStudents;
                    updated.push(newStudent)
                    this.setState({
                        allStudents: updated,
                        studentName : "",
                        studentExam : 0,
                        studentExe : 0
                    })
                }}>Add</button>
                {
                    this.state.allStudents.length>0&&
                    <button  onClick={()=> {
                        this.setState({allStudents: []})
                    }}>Clear</button>
                }
                <div>
                    <input value={this.state.searchValue} onChange={(event)=> event.target.value}/>
                </div>

                {
                    this.state.allStudents.map(item => {
                        return(
                            <div>
                                <Student student={item}/>
                            </div>
                        )
                    })

                }

            </>
        )
    }


}
export default Lec4