import {create} from 'zustand'
import {SolutionGroup} from '@/types/solution'
import {persist, createJSONStorage} from 'zustand/middleware'

type SolutionStore = {
    solutions: SolutionGroup //저장할 상태 데이터
    setAllSolutions: (data: SolutionGroup) => void //전체 솔루션 데이터 한 번에 업데이트
    resetSolutions: () => void //솔루션 데이터를 빈 상태로 초기화
}

const initialSolutions: SolutionGroup = {
    total_optimization: [],
    emission_reduction: [],
    cost_saving: [],
    roi: [],
}

const useSolutionStore = create<SolutionStore>()(
    persist(
        (set) => ({
            solutions: initialSolutions,
            setAllSolutions: (data) => set({solutions: data}),
            resetSolutions: () => set({solutions: initialSolutions}),
        }),
        {
            name: 'solution-storage', // localStorage key 이름
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useSolutionStore
