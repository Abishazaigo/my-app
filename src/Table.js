import './Table.css';
import Tablerow from './Tablerow';
function Table(){
    const employee = [
        {
            name: "Abisha", 
            designation: "Trainee developer", 
            date_of_joining: "14.12.2021"
        },
        {
            name: "Praba", 
            designation: "Trainee developer", 
            date_of_joining: "14.12.2021"
        },
        { 
            name: "Reeshma", 
            designation: "Trainee developer", 
            date_of_joining: "14.12.2021"
        }
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Date of joining</th>
                </tr>
            </thead>
            <tbody>
        
                {
                    employee.map(
                        (emp,key) => (
                            <Tablerow key={key} name={emp.name} designation={emp.designation} doj={emp.date_of_joining} />
                        )
                    )
                }
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}
export default Table;