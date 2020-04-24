import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

export default props => {
    // const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const name = useRef()
    const location = useRef()
    // const manager = useRef()
    // const fullTime = useRef()
    // const hourlyRate = useRef()

    const constructNewEmployee = () => {

        const newEmployeeObject = {
            name: name.current.value,
            locationId: parseInt(location.current.value),
            // manager: (manager.current.value === "yes" ? true : false),
            // fullTime: (fullTime.current.value === "yes" ? true : false),
            // hourlyRate: hourlyRate.current.value
        }
        console.log(newEmployeeObject)
        addEmployee(newEmployeeObject)
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Name of Employee: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        // create the animal function goes here
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Record Employee
            </button>
        </form>
    )
}
