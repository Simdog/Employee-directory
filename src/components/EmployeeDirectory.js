import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeSearch from "./EmployeeSearch";
import employees from "./employees.json";

class EmployeeDirectory extends Component {

    state = {
        employees,
        search: "",
        searchResults: employees
    };

    handleInputChange = event => {
        event.preventDefault()

        const value = event.target.value;

        const searchResults = this.state.employees.filter(employee => value === employee.firstName || value === employee.lastName || value === employee.gender)

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
                        <EmployeeCard employees={this.state.searchResults} />
                    </div>
                </div>

            </div>
        );
    }
}

export default EmployeeDirectory;