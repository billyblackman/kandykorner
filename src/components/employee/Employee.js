import React from "react"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{location.address}</div>
        <div className="employee__manager">{employee.manager}</div>
        <div className="employee__fullTime">{employee.fullTime}</div>
        <div className="employee__hourlyRate">{employee.hourlyRate}</div>
    </section>
)