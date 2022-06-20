import { urls } from "../../constants";

const addPlans = async ({ token, data }) => {
    const request = await fetch(`${urls.addPlans}`, {
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

const addPlanGroup = async ({ token, data }) => {
    const request = await fetch(`${urls.addpPlanGroup}`, {
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

const getPlans = async ({ token }) => {
    const request = await fetch(`${urls.getPlans}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const response = await request.json();
    return {
        status: request.status,
        response
    }
}

const getPlansGroup = async ({ token }) => {
    const request = await fetch(`${urls.getPlansGroup}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });
    const response = await request.json();
    return{
        status: request.status,
        response
    }
}

const plansService = Object.freeze({
    addPlans,
    addPlanGroup,
    getPlans,
    getPlansGroup
})

export default plansService