import React from "react"
import "./Location.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__address">{ location.address }</h3>
        <div className="location__squareFootage">{ location.squareFootage }square feet</div>
        <div className="location__handicapAccessible">Handicap accessible: { location.handicapAccessible }</div>
    </section> 
)