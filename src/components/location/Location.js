import React from "react"
import "./Location.css"

export default ({ location }) => (
    <section className="location">
        <address className="location__address">{ location.address }</address>
        <div className="location__squareFootage">{ location.squareFootage }square feet</div>
        <div className="location__handicapAccessible">Handicap accessible: { location.handicapAccessible }</div>
    </section> 
)