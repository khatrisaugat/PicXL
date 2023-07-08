import Http from "./http";
const http = new Http()

const apiPost = (apiName, obj, config = {}) => {
    return http.axios.post(`/${apiName}`, obj, config).then((res) => res.data)
}

const apiPostWithRedirect = (apiName, obj, config = {}) => {
    return http.axios.post(`/${apiName}`, obj, config).then((res) => {
        window.location.href = res.headers.location

        return res.data
    })
}

const apiDownLoadFile = (apiName, obj, config = {}) => {
    return http.axios.post(`/${apiName}`, obj, config).then((res) => {
        const contentDisposition = res.headers['content-disposition']
        const fileName = contentDisposition.split(';')[1].trim()
        return {
            data: res.data,
            fileName: fileName.replace(/^filename=/, '').replace(/"/g, ''),
        }
    })
}

const apiGet = (
    apiName,
    params  = null,
    id = null
) => {
    const subApiName = id == null ? '' : `/${id}`
    return http.axios
        .get(`/${apiName}${subApiName}`, { params })
        .then((res) => res) // return the whole response object since we need access pager data that is inside headers
}

const apiDelete = (apiName, id  = null) => {
    const subApiName = id == null ? '' : `/${id}`
    return http.axios.delete(`/${apiName}${subApiName}`).then((res) => res.data)
}

const apiPut = (apiName, obj) => {
    return http.axios.put(`/${apiName}`, obj, {}).then((res) => res.data)
}

export const apiPostFunc = {
    userLogin: async (obj) => apiPost('users/login', obj),
}