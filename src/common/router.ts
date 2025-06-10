import {createBrowserRouter} from 'react-router-dom'
import Layout from '@/ui/layout/Layout.tsx'
import LandingPage from '@/ui/pages/landingPage/LandingPage.tsx'
import LoginPage from '@/ui/pages/login/LoginPage'
import SignupPage from '@/ui/pages/signup/SignupPage'
import ViewSearchHistoryPage from '@/ui/pages/myPage/viewSearchHistory/ViewSearchHistoryPage'
import EditProfilePage from '@/ui/pages/myPage/editProfile/EditProfilePage'
import CompanyInputPage1 from '@/ui/pages/companyInputPage/companyInputPage1/CompanyInputPage1'
import CompanyInputPage2 from '@/ui/pages/companyInputPage/companyInputPage2/CompanyInputPage2'
import CompanyInputPage3 from '@/ui/pages/companyInputPage/companyInputPage3/CompanyInputPage3'
import SolutionRecommend from '@/ui/pages/solutionRecommendPage/SolutionRecommend'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {index: true, Component: LandingPage},

            {
                path: 'login',
                Component: LoginPage,
            },
            {
                path: 'signup',
                Component: SignupPage,
            },

            {
                path: '',
                Component: Layout,
                children: [
                    {
                        path: 'mypage/search-history',
                        Component: ViewSearchHistoryPage,
                    },
                    {path: 'mypage/edit', Component: EditProfilePage},
                    {path: 'company-info/step1', Component: CompanyInputPage1},
                    {path: 'company-info/step2', Component: CompanyInputPage2},
                    {path: 'company-info/step3', Component: CompanyInputPage3},
                    {path: 'solution', Component: SolutionRecommend},
                    {path: 'bookmark'},
                ],
            },
        ],
    },
])

export default router
