
import React from "react";
import Table from "react-bootstrap/Table";
import EmployeeHeader from "./EmployeeHeader"

function EmployeeTable(props) {

    console.log(props);
    return (
        <div className="col-12">
            <Table className="m-5" hover bordered>
                <EmployeeHeader />
                {props.employees.map(employee => (
                    <tbody>
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    </tbody>

                ))}
            </Table>
        </div>
    );
}

export default EmployeeTable;