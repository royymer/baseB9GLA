import { urls } from "../../constants";

const issueTickets = async ({ token, data }) => {
    const request = await fetch(`${urls.issueTickets}`, {
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

const eventTickets = async ({ id }) => {
    const request = await fetch(`${urls.eventTickets}/${id}`, {
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

const ticketInfo = async ({ token, id }) => {
    const request = await fetch(`${urls.ticketInfo}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });
    const response = await request.json();
    return {
        status: request.status,
        response
    }
}

const checkTicket = async ({ token, id }) => {
    const request = await fetch(`${urls.checkTicket}`, {
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

const issueSeasonTicket = async ({ token, data }) => {
    const request = await fetch(`${urls.issueSeasonTicket}`, {
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
    return{
        status: request.status,
        response
    }
}

const ticketsService = Object.freeze({
    issueTickets,
    eventTickets,
    ticketInfo,
    checkTicket,
    issueSeasonTicket
});

export default ticketsService