
import React from "react";

function TableHeader(props) {
    return (
                <thead style={{backgroundColor: "rgb(80, 214, 192)"}}>
                    <tr>
                        <th>ID #</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

    );
}

export default TableHeader;