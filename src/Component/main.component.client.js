import React from "react";
import {findAllVehicles,
    findVehiclesByIdService,
    createVehicle,
    deleteVehicleById,
    updateVehicle
} from "../Services/vehicle.service";

import Vehicle from "./vehicle.component.client";

class MainComponentClient extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id_input_create : "",
            year_input_create : 0,
            make_input_create : "",
            model_input_create : "",
            id_input : "",
            vehicles : []
        }

        this.id_inputChangeHandler = this.id_inputChangeHandler.bind(this);
        this.id_input_create_input_ChangeHandler = this.id_input_create_input_ChangeHandler.bind(this);
        this.model_input_create_ChangeHandler = this.model_input_create_ChangeHandler.bind(this);
        this.make_input_create_ChangeHandler = this.make_input_create_ChangeHandler.bind(this);
        this.year_input_create_ChangeHandler = this.year_input_create_ChangeHandler.bind(this);


    }

    componentDidMount= async () => {
       await findAllVehicles().then((response) => {
           console.log("hi");
           this.setState({
               vehicles : response
           })
       });

        // findAllVehicles();
    }

    id_inputChangeHandler = (event) => {

        this.setState({
            id_input : event.target.value
        })

    }

    id_input_create_input_ChangeHandler = (event) => {

        this.setState({
            id_input_create : event.target.value
        })
    }


    year_input_create_ChangeHandler = (event) => {

        this.setState({
            year_input_create : event.target.value
        })

    }

    make_input_create_ChangeHandler = (event) => {

        this.setState({
            make_input_create : event.target.value
        })

    }

    model_input_create_ChangeHandler = (event) => {
        this.setState({
            model_input_create : event.target.value
        })

    }

    findAllVehicles = () => {
        findAllVehicles().then((response) => {
            console.log(response);
            this.setState({
                vehicles : response
            })
        })
    }

    findVehiclesById = (id) => {
        findVehiclesByIdService(id).then((response) => {
            this.setState({
                vehicles : [response]
                          })
        })
    }

    deleteVehicle = async (id) => {
       await deleteVehicleById(id).then((response)=> {
           console.log(response);
           this.findAllVehicles();
       });

    }

    updateVehicle = (vehicle) => {
        updateVehicle(vehicle).then((response) => {
            console.log(response);
            this.findAllVehicles();
        })
    }

    createVehicle = (vehicle) => {
        createVehicle(vehicle).then((response) => {
            console.log(response);
            this.findAllVehicles();
        })
    }


    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-4"}></div>
                    <div className={"col-4"}><h3>Welcome to vehicle management</h3></div>
                    <div className={"col-4"}></div>
                </div>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle Id"} onChange={this.id_inputChangeHandler} value={this.state.id_input}/>
                    </div>
                    <div className={"col-3"}>
                        <button className={"btn bg-primary"} onClick={()=>{
                            this.findVehiclesById(this.state.id_input)
                        }}>Get vehicle by Id</button>

                    </div>
                    <div className={"col-3"}>
                        <button className={"btn bg-primary"} onClick={this.findAllVehicles}>Get All vehicles</button>
                    </div>
                    <div className={"col-3"}>
                        <button className={"btn bg-primary"} onClick={()=> {
                            this.deleteVehicle(this.state.id_input)
                        }}>Delete vehicles</button>
                    </div>

                </div>
                <hr/>
                <h4>Create Vehicle</h4>
                <div className={"row"}>

                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle year"} onChange={this.year_input_create_ChangeHandler} value={this.state.year_input_create}/>
                    </div>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle make"} onChange={this.make_input_create_ChangeHandler} value={this.state.make_input_create}/>

                    </div>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle model"} onChange={this.model_input_create_ChangeHandler} value={this.state.model_input_create}/>
                    </div>
                    <div className={"col-3"}>
                        <button className={"btn bg-primary"} onClick={
                            ()=> {
                                this.createVehicle({
                                                       "id" : this.state.id_input_create,
                                                       "year" : this.state.year_input_create,
                                                       "make" : this.state.make_input_create,
                                                       "model" : this.state.model_input_create
                                                   });
                            }
                        }>create vehicles</button>
                    </div>

                </div>
                <hr/>
                <h4>Update vehicle</h4>

                <div className={"row"}>

                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle Id"} onChange={this.id_input_create_input_ChangeHandler} value={this.state.id_input_create}/>
                    </div>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle year"} onChange={this.year_input_create_ChangeHandler} value={this.state.year_input_create}/>

                    </div>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle make"} onChange={this.make_input_create_ChangeHandler} value={this.state.make_input_create}/>

                    </div>
                    <div className={"col-3"}>
                        <input className={"form-control"} placeholder={"Vehicle model"} onChange={this.model_input_create_ChangeHandler} value={this.state.model_input_create}/>

                    </div>

                    <div className={"col-3"}>
                        <br/>
                        <button className={"btn bg-primary"} onClick={
                            ()=> {
                                this.updateVehicle({
                                                       "id" : this.state.id_input_create,
                                                       "year" : this.state.year_input_create,
                                                       "make" : this.state.make_input_create,
                                                       "model" : this.state.model_input_create
                                                   });
                            }
                        }>update vehicles</button>

                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-4"}></div>
                    <div className={"col-4"}><h3>LIST OF VEHICLES</h3></div>
                    <div className={"col-4"}></div>
                </div>



                {
                    this.state.vehicles.map((vehicle,index)=> {
                        return (
                            <Vehicle vehicle={vehicle} key = {index}/>
                        )
                    })
                }

            </div>

        )
    }

}

export default MainComponentClient;