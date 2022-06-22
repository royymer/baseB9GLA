import { urls } from "../../constants"

const addReservation = async ({ data }) => {
    const token = localStorage.getItem("token")
    const request = await fetch(`${urls.addReservation}`, {
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

const addReservationSeasonTicket = async ({ token, data }) => {
    const request = await fetch(`${urls.addReservationSeasonTicket}`, {
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

const getReservation = async ({ id }) => {
    const request = await fetch(`${urls.getReservation}/${id}`, {
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

const reservationsService = Object.freeze({
    addReservation,
    addReservationSeasonTicket,
    getReservation
});

export default reservationsService