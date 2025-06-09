export interface LlmParam {
    id: number
    type: string
    rank: number
    improvementType: string
    facility: string
    activity: string
    industry: string
    emissionReduction: number
    costSaving: number
    roiPeriod: number
    investmentCost: number
    bookmark: boolean
}

export type SolutionCommentResponse = {
    id: number
    type: string
    top1: string
    comparison: string
}
