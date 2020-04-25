import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import Employee from "./Employee"

export default () => {

    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h2>Employees</h2>
            <div className="employees">
                {
                    employees.map(employee => {

                        const matchingLocation = locations.find(location => location.id === employee.locationId)
                     
                        return <Employee key={employee.id} 
                                         employee={employee}
                                         location={matchingLocation} 
                                         
                                         />

                    })
                }
            </div>
        </>
    )

}