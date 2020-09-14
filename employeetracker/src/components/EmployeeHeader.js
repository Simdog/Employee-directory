import React from "react";

function EmployeeHeader(props) {
    return (
                <thead style={{backgroundColor: "rgb(135, 20, 19)"}}>
                    <tr>
                        <th>ID #</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>

    );
}

export default EmployeeHeader;