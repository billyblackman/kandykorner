import React from "react"
import "./Employee.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <h4 className="employee__manager">{(employee.manager === true ? "Manager" : false)}</h4>
        <div className="employee__location">Assigned Location: {location.address}</div>
        <div className="employee__fullTime">{(employee.fullTime === true ? "Full-time" : "Part-time")}</div>
        <div className="employee__hourlyRate">Hourly Rate: ${employee.hourlyRate}</div>
    </section>
)

