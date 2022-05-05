import { useRef, useState } from "react";
import TodaHeading from "./TodaHeading";
export default function App() {

    let [todoData, setTodoData] = useState("");
    let [todoAllData, setTodoAllData] = useState([]);
    let referencOfSave = useRef();
    let referencOfClear = useRef();


    const submitDataByPressEnter = (object) => {
        object.preventDefault();
        if (todoData !== "") {

            var charectorCount=[20];
            for(let i=0;i<20;i++)
            {
                charectorCount[i]=todoData[i];
            }
            setTodoAllData([...todoAllData, charectorCount]); 
        }
        
        referencOfSave.current.style.display="none"
        referencOfClear.current.style.display="block";
        setTodoData("");

    }

    const deleteSpeceficData = (id) => {
        setTodoAllData(todoAllData.filter((data, index) => {

            if (index !== id) { return data }
        }))
    }

    return (
        <>
            <div className="todoapp">
                <div id="upper">
                    <h1 id="h1">TODO APP</h1>
                    <form onSubmit={submitDataByPressEnter}>


                        <input id="input" placeholder="Enter Entity Name" value={todoData} type="text" onChange={(collect) => {
                            setTodoData(collect.target.value)
                            referencOfClear.current.style.display="none";
                            referencOfSave.current.style.display="block";

                        }} />
                        <button ref={referencOfClear} onDoubleClick={() => { setTodoAllData([]);referencOfClear.current.style.display="none"; }} className="button" id="clear">CLEAR</button>
                        <button ref={referencOfSave} onClick={submitDataByPressEnter} className="button" id="save" >   SAVE</button>
                    </form>
                </div>
                {todoAllData.map((data, index) => {
                    return (
                        <TodaHeading text={data} key={index} id={index} method={deleteSpeceficData} />
                    )

                })}


            </div>

        </>
    )
}
