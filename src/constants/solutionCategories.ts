export const solutionCategories = [
    {key: 'total_optimization', label: '종합 최적 솔루션'},
    {key: 'emission_reduction', label: '감축량 최적 솔루션'},
    {key: 'cost_saving', label: '절감액 최적 솔루션'},
    {key: 'roi', label: 'ROI 최적 솔루션'},
] as const

export type SolutionType = (typeof solutionCategories)[number]['key']
