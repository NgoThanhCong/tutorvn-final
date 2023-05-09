import API from './baseApiWithOutToken'

const CallAPI2 = {
    apiLogin: async (values) => await API.post('/api/auth/signin', values),
}

export default CallAPI2