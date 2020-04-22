import React from "react"

export default ({ location }) => (
    <section className="location">
        <address className="location__address">{ location.name }</address>
        <div className="location__squareFootage">{ location.squareFootage }square feet</div>
        <div className="location__handicapAccessible">Handicap accessible: { location.handicapAccessible }</div>
    </section> 
)