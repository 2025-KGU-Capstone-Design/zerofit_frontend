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
        }),
        {
            name: 'solution-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useSolutionStore
