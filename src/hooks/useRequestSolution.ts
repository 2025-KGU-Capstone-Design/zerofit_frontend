import {solutionApi} from '@/services/solutionApi'
import useSolutionStore from '@/store/useSolutionStore'
import {CompanyInput} from '@/types/companyInput'
import {groupSolutionsByType} from '@/ui/pages/solutionRecommendPage/utils/groupSolutionsByType'
import {useCookies} from 'react-cookie'

export function useRequestSolution() {
    const [cookies] = useCookies(['access_token'])
    const setCurrent = useSolutionStore((state) => state.setCurrent)

    const requestSolution = async (requestData: CompanyInput) => {
        const token = cookies.access_token
        const response = await solutionApi.requestSolution(requestData, token)
        const {requestId, solution} = response.data
        console.log(response.data)

        const grouped = groupSolutionsByType(
            Array.isArray(solution) ? solution : []
        )
        setCurrent({requestId, solutions: grouped})

        return response
    }

    return {requestSolution}
}
