import {solutionApi} from '@/services/solutionApi'
import useSolutionStore from '@/store/useSolutionStore'
import {CompanyInput} from '@/types/companyInput'
import {groupSolutionsByType} from '@/ui/pages/solutionRecommendPage/utils/groupSolutionsByType'
import {useCookies} from 'react-cookie'

export function useRequestSolution() {
    const [cookies] = useCookies(['access_token'])
    const setAllSolutions = useSolutionStore((state) => state.setAllSolutions)

    const requestSolution = async (requestData: CompanyInput) => {
        const token = cookies.access_token
        const response = await solutionApi.requestSolution(requestData, token)
        console.log(response.data)
        const solutionsArray = response.data.solution ?? []
        const grouped = groupSolutionsByType(solutionsArray)
        setAllSolutions(grouped)

        return response
    }

    return {requestSolution}
}
