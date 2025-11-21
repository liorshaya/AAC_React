import {useState} from "react";


function XAndO (){
    const[board,setBoard] = useState([
        [{value: "",color:"black"},{value: "",color:"black"},{value: "",color:"black"}],
        [{value: "",color:"black"},{value: "",color:"black"},{value: "",color:"black"}],
        [{value: "",color:"black"},{value: "",color:"black"},{value: "",color:"black"}]
    ]);

    const createBoard=()=>{
        const newBoard=[]
        for (let i = 0; i < 3; i++) {
            const row=[]
            for (let j = 0; j < 3; j++) {
                row.push({value: "", color: "black"})
            }
            newBoard.push(row)
        }
        setBoard(newBoard);
    }

    return(
        <div>
            {
                board.map((row,r)=>{
                    row.map((col,c)=>{
                        <div key={c+"-"+r} style={{color: col.color}}>
                            {
                                col.value
                            }
                        </div>
                    })
                })
            }
        </div>
    )
}
export default XAndO;