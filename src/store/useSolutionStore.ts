import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {SolutionGroup} from '@/types/solution'

type SolutionHistoryItem = {
    requestId: number
    solutions: SolutionGroup
}

type SolutionStore = {
    current: SolutionHistoryItem | null
    setCurrent: (item: SolutionHistoryItem) => void
    resetCurrent: () => void
}

const useSolutionStore = create<SolutionStore>()(
    persist(
        (set) => ({
            current: null,
            setCurrent: (item) => set({current: item}),
            resetCurrent: () => set({current: null}),
        }),
        {
            name: 'solution-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useSolutionStore
