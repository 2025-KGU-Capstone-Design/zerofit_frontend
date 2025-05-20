import {Box} from '@mui/material'
import LandingPageHeader from '@/ui/pages/landingPage/LandingPageHeader'
import SignupForm from '@/ui/pages/signup/SignupForm'

const SignupPage = () => (
    <Box
        component='section'
        sx={{height: '100vh', display: 'flex', flexDirection: 'column'}}
    >
        <LandingPageHeader />
        <SignupForm />
    </Box>
)

export default SignupPage
