import http from './Http'
import {LlmParam, SolutionCommentResponse} from '@/types/solutionComment'

export const solutionCommentApi = {
    requestSolutionComment: (
        requestId: number,
        llmParams: LlmParam[],
        token: string
    ) =>
        http.post<SolutionCommentResponse>(
            `/api/solution/comment/${requestId}`,
            {llmParams},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ),
}
