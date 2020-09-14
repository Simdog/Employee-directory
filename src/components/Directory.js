import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeSearch from "./EmployeeSearch";
import employees from "./employees.json";

class Directory extends Component {

    state = {
        employees,
        search: "",
        searchResults: employees
    };

    handleInputChange = event => {

        const value = event.target.value;

        const searchResults = this.state.employees.filter(employee => value === employee.firstName || value === employee.lastName)

        this.setState({ search: value, searchResults: searchResults });
    };

    render() {

        return (
            <div className="container">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center m-5">
                                Employee Directory
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <EmployeeSearch handleInputChange={this.handleInputChange} search={this.state.search} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <EmployeeTable employees={this.state.searchResults} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Directory;