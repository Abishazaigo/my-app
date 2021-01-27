function Tablerow(props){
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.designation}</td>
            <td>{props.doj}</td>
        </tr>
    )
}
export default Tablerow;