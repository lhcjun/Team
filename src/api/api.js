export const apiCall = link => {
    return fetch(link).then(resp => resp.json())
}