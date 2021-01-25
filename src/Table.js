import './Table.css';
function Table(){
    return (
        <table class="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Date of joining</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abisha</td>
                    <td>Trainee developer</td>
                    <td>14.12.2021</td>
                </tr>
                <tr>
                    <td>Praba</td>
                    <td>Trainee developer</td>
                    <td>14.12.2021</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;