const base = "https://b9-ticketing-api.herokuapp.com/api/v1";

const urls = {
    //user
    addUser: `${base}/users/register`,
    validateAccount: `${base}/users/validateaccount`,
    login: `${base}/users/login`,
    resetPasswordrequest: `${base}/users/resetpassword`,
    resetPassword: `${base}/users/updatepassword`,
    resendEmail: `${base}/users/resendemail`,
    userList: `${base}/users/getusers`,
    status: `${base}/users/status`,
    addSubUser: `${base}/users/register-sub-user`,
    //events
    addEvents: `${base}/events/`,
    getEvents: `${base}/events`,
    addPlanGroupToEvent: `${base}/events/plangroup`,
    getEvent: `${base}/event`,
    getSeatMap: `${base}/event/seat-map/`,
    addSeatMapToEvent: `${base}/event/seat-map`,
    //plans
    addPlans: `${base}/plans`,
    addpPlanGroup: `${base}/plans/group`,
    getPlans: `${base}/plans`,
    getPlansGroup: `${base}/plans/group`,
    //reservations
    addReservation: `${base}/reservations`,
    addReservationSeasonTicket: `${base}/reservations/season-tickets`,
    getReservation: `${base}/reservations`,
    issueTickets: `${base}/tickets/issue`,
    eventTickets: `${base}/tickets`,
    ticketInfo: `${base}/ticket`,
    checkTicket: `${base}/ticket/check`,
    issueSeasonTicket: `${base}/ticket/season`,
    //seat Map
    addSeatMap: `${base}/seat-map`,
    getSeatMap: `${base}/seat-map`,
    getSeatMaps: `${base}/seat-maps`,
    //Season tickets
    addSeasonTickets: `${base}/season-tickets`,
    getSeatMapSeasonTicket: `${base}/season-tickets/seat-map`,
    //Luka pay
    getToken: `${base}/lukapay/token`,
    verifyPayment: `${base}/lukapay/verifypayment`,
    getSeatMap1: `${base}/season-tickets/seat-map`,
    getSeasonTickets: `${base}/season-tickets/GLA`,
    issueReservation: `${base}/lukapay/issuereservation`,
}

export default urls;