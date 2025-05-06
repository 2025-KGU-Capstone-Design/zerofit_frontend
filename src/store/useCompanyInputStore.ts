import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {CompanyInput} from '@/types/companyInput'

type CompanyInputStore = CompanyInput & {
    setIndustry: (industry: string) => void
    setOwnedFacilities: (ownedFacilities: string[]) => void
    setInvestmentBudget: (investmentBudget?: number) => void
    setCurrentEmission: (currentEmission: number) => void
    setTargetEmission: (targetEmission: number) => void
    setTargetRoiPeriod: (targetRoiPeriod?: number) => void
}

const useCompanyInputStore = create<CompanyInputStore>()(
    persist(
        (set) => ({
            // 초기값
            industry: '',
            ownedFacilities: [],
            investmentBudget: undefined,
            currentEmission: 0,
            targetEmission: 0,
            targetRoiPeriod: undefined,

            // 액션
            setIndustry: (industry) => set({industry}),
            setOwnedFacilities: (ownedFacilities) => set({ownedFacilities}),
            setInvestmentBudget: (investmentBudget) => set({investmentBudget}),
            setCurrentEmission: (currentEmission) => set({currentEmission}),
            setTargetEmission: (targetEmission) => set({targetEmission}),
            setTargetRoiPeriod: (targetRoiPeriod) => set({targetRoiPeriod}),

            // 상태 초기화
            resetState: () =>
                set({
                    industry: '',
                    ownedFacilities: [],
                    investmentBudget: undefined,
                    currentEmission: 0,
                    targetEmission: 0,
                    targetRoiPeriod: undefined,
                }),
        }),
        {
            name: 'company-input', // localStorage key
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useCompanyInputStore
