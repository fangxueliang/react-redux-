import axios from "../util/request";

export let getFakeData = async (params) => {
    let response = await axios({
        url: 'https://randomuser.me/api',
        method: 'GET',
        params: params
    })
    let responseData = JSON.parse(response.request.response)
    return responseData.results
}