import { urls } from "../../constants";

const addEvents = async ({ token, data }) => {
    const request = await fetch(`${urls.addEvents}`, {
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

const getEvents = async ({ page, limit }) => {
    const request = await fetch(`${urls.getEvents}/GLA?page=${page}&limit=${limit}`, {
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

const addPlanGroupToEvent = async ({ token, data }) => {
    const request = await fetch(`${urls.addPlanGroupToEvent}`, {
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

const getEvent = async ({ id }) => {
    const request = await fetch(`${urls.getEvent}/${id}`, {
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

const getSeatMap = async ( id, ticket ) => {
    const request = await fetch(`${urls.getSeatMap}/${id}?tickets=${ticket}`, {
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

const addSeatMapToEvent = async ({ token, data }) => {
    const request = await fetch(`${urls.addSeatMapToEvent}`, {
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

const eventService = Object.freeze({
    addEvents,
    getEvents,
    addPlanGroupToEvent,
    getEvent,
    getSeatMap,
    addSeatMapToEvent
})

export default eventService;