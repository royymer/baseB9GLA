import { urls } from "../../constants";

const addUser = async ({ data }) => {
    const request = await fetch(`${urls.addUser}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const validateAccount = async ({ data }) => {
    const request = await fetch(`${urls.validateAccount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const login = async (data) => {
    const request = await fetch(`${urls.login}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const resetPasswordrequest = async ({ data }) => {
    const request = await fetch(`${urls.resetPasswordrequest}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const resetPasword = async ({ data }) => {
    const request = await fetch(`${urls.resetPassword}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const resendmail = async ({ data }) => {
    const request = await fetch(`${urls.resendEmail}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

const usersList = async ({ token, page, limit, query }) => {
    const request = await fetch(`${urls.userList}?page=${page}&limit=${limit}&query=${query}`, {
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

const userStatus = async ({ token, data }) => {
    const request = await fetch(`${urls.status}`, {
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

const addSubUser = async ({ token, data }) => {
    const request = await fetch(`${urls.status}`, {
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

const userService = Object.freeze({
    addUser,
    validateAccount,
    login,
    resetPasswordrequest,
    resetPasword,
    resendmail,
    usersList,
    userStatus,
    addSubUser
})

export default userService;