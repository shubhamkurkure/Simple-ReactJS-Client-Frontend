import API_URL from "../common/constants";

export const  findAllVehicles = async () => {
    const response  = await fetch(API_URL + `/vehicles`);
    return await response.json();
}

export const findVehiclesByIdService = async (id) => {
    const response = await fetch(API_URL + `/vehicles/${id}`);
    return await response.json();
}

export const deleteVehicleById = async (id) => {
    await fetch(API_URL + `/vehicles/${id}`, {
        method : "DELETE"
    }).then((response)=> {
        console.log("dda: ");
        console.log(response);
        return response;
    })
}

export const updateVehicle = async (vehicle) => {
    const response  = await fetch(API_URL + `/vehicles`,{
        method: "PUT",
        body: JSON.stringify(vehicle),
        headers : {
            'content-type' : 'application/json'
        }
    });

    return await response.json();
}

export const createVehicle = async ( vehicle) => {

    const response  = await fetch(API_URL + "/vehicles",{
        method: "POST",
        body: JSON.stringify(vehicle),
        headers : {
            'content-type' : 'application/json'
        }
    });

    return await response.json();
}