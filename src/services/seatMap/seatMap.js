import { urls } from "../../constants"

const addSeatMap = async ({ token, id }) => {
    const request = await fetch(`${urls.addSeatMap}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            ...data
        })
    });
    const response = await request.json();
    return {
        status: request.status,
        response
    }
}

const getSeatMap = async ({ id }) => {
    const request = await fetch(`${urls.getSeatMap}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const response = await request.json();
    return{
        status: request.status,
        response
    }
}

const getSeatMaps = async ({ id }) => {
    const request = await fetch(`${urls.getSeatMaps}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const response = await request.json();
    return{
        status: request.status,
        response
    }
}

const seatMapService = Object.freeze({
    addSeatMap,
    getSeatMap,
    getSeatMaps
});

export default seatMapService;