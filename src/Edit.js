import {useState} from 'react';
import Tablerow from './Tablerow';
function Edit(){
    const [name, setName] = useState(" ");
    const [designation, setDesignation] = useState(" ");
    const [doj, setDoj] = useState(" ");
    const employees = [];
    return(
        <div> 
        <form>
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
                <button>SUBMIT</button>
            </div>

        </form> 
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Date of joining</th>
            </tr>
        </thead>
        <tbody>                  
            <tr><td>{name}</td><td>{designation}</td><td>{doj}</td></tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
    </div>    
    )
}
export default Edit;