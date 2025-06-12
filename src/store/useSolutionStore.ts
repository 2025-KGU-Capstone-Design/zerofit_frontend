import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {SolutionGroup} from '@/types/solution'
import {SolutionType} from '@/constants/solutionCategories'
import {SolutionCommentResponse} from '@/types/solutionComment'

type SolutionHistoryItem = {
    requestId: number
    solutions: SolutionGroup
}

type CommentsCacheType = {
    [requestId: string]: {
        [category in SolutionType]?: SolutionCommentResponse
    }
}
type SolutionStore = {
    current: SolutionHistoryItem | null
    setCurrent: (item: SolutionHistoryItem) => void
    resetCurrent: () => void
    commentsCache: CommentsCacheType
    setComment: (
        requestId: number,
        category: SolutionType,
        comment: SolutionCommentResponse
    ) => void
    resetCommentsCache: () => void
    updateBookmark: (solId: number, bookmark: boolean) => void // 추가!
}

const useSolutionStore = create<SolutionStore>()(
    persist(
        (set) => ({
            current: null,
            setCurrent: (item) => set({current: item}),
            resetCurrent: () => set({current: null}),
            commentsCache: {},
            setComment: (requestId, category, comment) =>
                set((state) => {
                    const key = requestId.toString()
                    return {
                        commentsCache: {
                            ...state.commentsCache,
                            [key]: {
                                ...(state.commentsCache[key] || {}),
                                [category]: comment,
                            },
                        },
                    }
                }),
            resetCommentsCache: () => set({commentsCache: {}}),

            updateBookmark: (solId, bookmark) =>
                set((state) => {
                    if (!state.current) return {}
                    // 모든 카테고리의 솔루션 배열을 순회하며 bookmark 값만 바꿈
                    const newSolutions: SolutionGroup = {} as SolutionGroup
                    for (const key in state.current.solutions) {
                        newSolutions[key as SolutionType] =
                            state.current.solutions[key as SolutionType].map(
                                (sol) =>
                                    sol.id === solId ? {...sol, bookmark} : sol
                            )
                    }
                    return {
                        current: {
                            ...state.current,
                            solutions: newSolutions,
                        },
                    }
                }),
        }),
        {
            name: 'solution-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useSolutionStore
