import {useState} from 'react';
import Tablerow from './Tablerow';
function Edit(props){
    const [name, setName] = useState(" ");
    const [designation, setDesignation] = useState(" ");
    const [doj, setDoj] = useState(" ");
    function show(){
    const employ = {
        name:name,
        designation:designation,
        doj:doj
    };
    props.setEmployee((previousState) =>{
        return [...previousState,employ];
    }

    );
}

    return(
  <div> 
            <div>
                <label>Name:</label>
            </div>
            <div>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>designation:</label>
            </div>
            <div>
                <input type="text" id="design" onChange={(e) => setDesignation(e.target.value)}/>
            </div>
            <div>
                <label>Date of joining:</label>
            </div>
            <div>
                <input type="date" id="doj" onChange={(e) => setDoj(e.target.value)}/>
            </div>
            <div>
                <button onClick={(e) => show()}>SUBMIT</button>
            </div>
 
    </div>    
    )
}
export default Edit;