import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {CompanyInput} from '@/types/companyInput'

type CompanyInputStore = CompanyInput & {
    setIndustry: (industry: string) => void
    setTargetFacilities: (targetFacilities: string[]) => void
    setAvailableInvestment: (availableInvestment: number) => void
    setCurrentEmission: (currentEmission?: number) => void
    setTargetEmission: (targetEmission?: number) => void
    setTargetRoiPeriod: (targetRoiPeriod: number) => void
    resetState: () => void
}

const useCompanyInputStore = create<CompanyInputStore>()(
    persist(
        (set) => ({
            // 초기값
            industry: '',
            targetFacilities: [],
            availableInvestment: 50,
            currentEmission: undefined,
            targetEmission: undefined,
            targetRoiPeriod: 2.5,

            // 액션
            setIndustry: (industry) => set({industry}),
            setTargetFacilities: (targetFacilities) => set({targetFacilities}),
            setAvailableInvestment: (availableInvestment) =>
                set({availableInvestment}),
            setCurrentEmission: (currentEmission) => set({currentEmission}),
            setTargetEmission: (targetEmission) => set({targetEmission}),
            setTargetRoiPeriod: (targetRoiPeriod) => set({targetRoiPeriod}),

            // 상태 초기화
            resetState: () =>
                set({
                    industry: '',
                    targetFacilities: [],
                    availableInvestment: 50,
                    currentEmission: undefined,
                    targetEmission: undefined,
                    targetRoiPeriod: 2.5,
                }),
        }),
        {
            name: 'company-input', // localStorage key
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useCompanyInputStore
