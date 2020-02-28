import React from "react";

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col-3"}><h6>VEHICLE ID: {this.props.vehicle.id}</h6></div>
                <div className={"col-3"}><h6>VEHICLE YEAR: {this.props.vehicle.year}</h6></div>
                <div className={"col-3"}><h6>VEHICLE MAKE: {this.props.vehicle.make}</h6></div>
                <div className={"col-3"}><h6>VEHICLE MODEL: {this.props.vehicle.model}</h6></div>
            </div>

        )
    }
}

export default Vehicle;