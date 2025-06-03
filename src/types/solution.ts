export type SolutionItem = {
    id: number
    type: 'total_optimization' | 'emission_reduction' | 'cost_saving' | 'roi'
    rank: number
    score: number | null
    industry: string
    improvementType: string
    facility: string
    activity: string
    emissionReduction: number
    costSaving: number
    roiPeriod: number
    investmentCost: number
    bookmark: boolean
}

export type SolutionGroup = {
    total_optimization: SolutionItem[]
    emission_reduction: SolutionItem[]
    cost_saving: SolutionItem[]
    roi: SolutionItem[]
}
