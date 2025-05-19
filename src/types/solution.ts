export type SolutionItem = {
    rank: number
    improvementType: string // 개선 구분
    facility: string // 대상 설비
    activity: string // 개선 활동명
    emissionReduction: number // 연간 감축량 (tCO2eq)
    costSaving: number // 연간 절감액 (백 만원)
    roiPeriod: number // ROI 기간 (년)
    investmentCost: number //투자 비용
}

export type SolutionGroup = {
    total_optimization: SolutionItem[]
    emission_reduction: SolutionItem[]
    cost_saving: SolutionItem[]
    roi: SolutionItem[]
}
