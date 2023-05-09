import API from './baseAPI'

const CallAPI = {
    apiInsertCourse: async()=> await API.post('/api/auth/signin'),
    apiTutors: async()=> await API.get('/api/v1/tutor/getAll')
    // apiPing: async () => await API.post('/api/user/ping', {}),
    // apiPingBet: async () => await API.post('/api/user/pingBet', {}),
    // apiPingUpdate: async (userID) => await API.post(`/api/user/pingBetUpdate?update=false&userID=${userID}`, {}),
    // apiLogout: async (values) => await API.post('/api/user/logout', values),
    // apiDoBet: async (values) => await API.post('/api/v1/bet/dobet', values),
    // apiGetUserInfor: async (username) => await API.post(`/api/user/findByUsername?username=${username}`, {}),
    // apiGetNotifications: async (fromDate, toDate) => await API.post(`/api/v1/notification/getMsg?startDateString=${fromDate}&endDateString=${toDate}`),
    // apiChangePassword: async (oldPassword, newPassword) => await API.post(`/api/user/changePassWord?oldPassword=${oldPassword}&newPassword=${newPassword}`),
    // apiBetHistoryToDay: async (userId, date) => await API.post(`/api/v1/bet/result?userID=${userId}&dateString=${date}`, {}),
    // apiBetHistory: async (userID, fromDate, toDate) => await API.post(`api/v1/bet/result_bydate?userID=${userID}&dateFromString=${fromDate}&dateToString=${toDate}`),
    // apiGetBetHistory: async (userID, fromDate, toDate) => await API.post(`/api/v1/bet/result_history_by_userID?dateFromString=${fromDate}&dateToString=${toDate}&userID=${userID}`),
}

export default CallAPI