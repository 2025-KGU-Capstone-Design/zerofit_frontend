import {createBrowserRouter} from 'react-router-dom'
import Layout from '@/ui/layout/Layout.tsx'
import LandingPage from '@/ui/pages/landingPage/LandingPage.tsx'
import {sampleLoader} from '@/services/SampleService.ts'
import CompanyInputPage1 from '@/ui/pages/companyInputPage/companyInputPage1/CompanyInputPage1'
import CompanyInputPage2 from '@/ui/pages/companyInputPage/companyInputPage2/CompanyInputPage2'
import CompanyInputPage3 from '@/ui/pages/companyInputPage/companyInputPage3/CompanyInputPage3'
import SolutionRecommend from '@/ui/pages/solutionRecommendPage/SolutionRecommend'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                Component: LandingPage,
            },

            {
                path: '',
                Component: Layout,
                children: [
                    {
                        path: 'home',
                        loader: sampleLoader,
                        Component: LandingPage,
                    },
                    {
                        path: 'company-info/step1',
                        Component: CompanyInputPage1,
                    },
                    {
                        path: 'company-info/step2',
                        Component: CompanyInputPage2,
                    },
                    {
                        path: 'company-info/step3',
                        Component: CompanyInputPage3,
                    },
                    {
                        path: 'solution',
                        Component: SolutionRecommend,
                    },
                ],
            },
        ],
    },
])

export default router
