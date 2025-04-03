import http from "./Http"

export class SampleService {

    fetchLayout = async (): Promise<string> => {
        try{
            const res = await http.get('/')
            return res.data
        } catch (e) {
            console.error("error:", e)
            return e as string
        }
    }
}

const sampleService = new SampleService()

export const sampleLoader = async () => {
    return await sampleService.fetchLayout()
}
