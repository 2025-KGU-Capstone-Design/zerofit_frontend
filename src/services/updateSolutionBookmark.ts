import http from './Http'

export const updateSolutionBookmark = (solId: number, bookmark: boolean) => {
    return http.put(`/api/solution/${solId}`, {bookmark})
}
