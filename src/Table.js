import './Table.css';
import Tablerow from './Tablerow';
function Table(props){
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
                   props.employee 
                    .map(
                        (emp,key) => (
                            <Tablerow key={key} name={emp.name} designation={emp.designation} doj={emp.doj} />
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