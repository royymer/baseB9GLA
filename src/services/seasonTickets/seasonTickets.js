import { urls } from "../../constants";

const addSeasonTickets = async ({ token, data }) => {
    const request = await fetch(`${urls.addSeasonTickets}`, {
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

const getSeatMap = async ({ id, tickets }) => {
    const request = await fetch(`${urls.getSeatMap1}/${id}?tickets=${tickets}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const response = await request.json();
    return {
        status: request.status,
        response
    }
}

const getSeasonTickets = async ({ page, limit }) => {
    const request = await fetch(`${urls.getSeasonTickets}?page=${page}&limit=${limit}`, {
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

const seasonTicketsService = Object.freeze({
    addSeasonTickets,
    getSeatMap,
    getSeasonTickets
});

export default seasonTicketsService;