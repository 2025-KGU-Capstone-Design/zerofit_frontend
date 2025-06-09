import {useState} from 'react'
import {LlmParam, SolutionCommentResponse} from '@/types/solutionComment'
import {solutionCommentApi} from '@/services/solutionCommentApi'

export function useSolutionComment(token: string) {
    const [comment, setComment] = useState<SolutionCommentResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const requestComment = async (requestId: number, llmParams: LlmParam[]) => {
        setLoading(true)
        setError(null)
        try {
            const res = await solutionCommentApi.requestSolutionComment(
                requestId,
                llmParams,
                token
            )
            setComment(res.data)
            return res.data
        } catch (err: any) {
            setError(err.message || '알 수 없는 에러')
            return null
        } finally {
            setLoading(false)
        }
    }

    return {comment, loading, error, requestComment}
}
