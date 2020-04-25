import React, { useContext, useRef } from "react"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const name = useRef()
    const location = useRef()
    const manager = useRef()
    const fullTime = useRef()
    const hourlyRate = useRef()

    const constructNewEmployee = () => {

        const newEmployeeObject = {
            name: name.current.value,
            locationId: parseInt(location.current.value),
            manager: (manager.current.value === "1" ? true : false),
            fullTime: (fullTime.current.value === "0" ? true : false),
            hourlyRate: parseInt(hourlyRate.current.value)
        }
        
        addEmployee(newEmployeeObject).then(props.toggle)

        
    }

    return (
        <form className="employeeForm">

            
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
            

            
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        required
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.address}
                            </option>
                        ))}
                    </select>
                </div>
            

            
                <div className="form-group">
                    <label htmlFor="manager">Is this employee a manager? </label>
                    <select
                        defaultValue=""
                        name="manager"
                        ref={manager}
                        id="manager"
                        className="form-control"
                    >
                        <option value="0">No</option>
                        <option value="1">Yes</option>
    
                    </select>                 
                </div>
            

            
                <div className="form-group">
                    <label htmlFor="fullTime">Is this a full-time employee? </label>
                    <select
                        defaultValue=""
                        name="fullTime"
                        ref={fullTime}
                        id="fullTime"
                        className="form-control"
                    >
                        <option value="0">No</option>
                        <option value="1">Yes</option>
    
                    </select>                 
                </div>
            

            
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly rate: </label>
                    <input
                        type="number"
                        name="hourlyRate"
                        ref={hourlyRate}
                        required
                        id="hourlyRate"
                        className="form-control"
                    >
                        
    
                    </input>                 
                </div>
            

            <button type="submit"
                onClick={
                    evt => {

                        // Prevent browser from submitting the form

                        evt.preventDefault() 
                        
                        // create employee function goes here
                        
                        if (name !== "" && location !== 0 && hourlyRate !== null) {
                            constructNewEmployee()
                        } else window.alert("Please complete all fields")
                    }
                }
                className="btn btn-primary">
                Record Employee
            </button>
        </form>
    )
}
