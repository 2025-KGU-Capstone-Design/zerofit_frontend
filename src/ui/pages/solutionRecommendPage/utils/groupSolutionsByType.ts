//배열로 섞여있는 솔루션들을 카테고리 별로 정리해주는 함수

import {SolutionGroup, SolutionItem} from '@/types/solution'

//groupSolutionsByType(items: SolutionItem[]):SolutionGroup
// SolutionItem 배열을 받아서 SolutionGroup이 형태로 반환한다는 의미미
export function groupSolutionsByType(items: SolutionItem[]): SolutionGroup {
    return items.reduce<SolutionGroup>(
        (acc, item) => {
            const type = item.type as keyof SolutionGroup
            acc[type].push(item)
            return acc
        },
        {
            total_optimization: [],
            emission_reduction: [],
            cost_saving: [],
            roi: [],
        }
    )
}
