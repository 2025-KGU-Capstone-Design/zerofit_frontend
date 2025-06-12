// handleShowSolution.ts
import useSolutionStore from '@/store/useSolutionStore'
import {SolutionGroup} from '@/types/solution'
import {groupSolutionsByType} from '@/ui/pages/solutionRecommendPage/utils/groupSolutionsByType'
import {SolutionType} from '@/constants/solutionCategories'
import {getSolutionHistory} from '@/services/getSolutionHistory'
export const handleShowSolution = async (
    requestId: number,
    navigate: (path: string) => void
) => {
    try {
        const {comment, solution} = await getSolutionHistory(requestId)

        // 빈 객체 등 유효하지 않은 솔루션 제거
        const validSolutions = solution.filter(
            (item) =>
                item &&
                typeof item.id === 'number' &&
                typeof item.type === 'string'
        )

        const solutionGroup: SolutionGroup =
            groupSolutionsByType(validSolutions)

        useSolutionStore.getState().setCurrent({
            requestId,
            solutions: solutionGroup,
        })

        comment.forEach((cmt) => {
            useSolutionStore
                .getState()
                .setComment(requestId, cmt.type as SolutionType, cmt)
        })

        navigate('/solution')
    } catch (err) {
        alert('솔루션 데이터를 불러오는 데 실패했습니다.')
    }
}
