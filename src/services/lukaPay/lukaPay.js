import { urls } from "../../constants";

//            "Authorization": `Bearer ${token}`,

const getToken = async ({ }) => {
    const request = await fetch(`${urls.getToken}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const response = await request.json();
    return {
        status: request.status,
        response
    }
}

const verifyPayment = ({ data }) => {
    const request = await fetch(`${urls.verifyPayment}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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

const issueReservation = async ({ data }) => {
    const request = await fetch(`${urls.issueReservation}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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

const lukaPayService = Object.freeze({
    getToken,
    verifyPayment,
    issueReservation
});

export default lukaPayService;