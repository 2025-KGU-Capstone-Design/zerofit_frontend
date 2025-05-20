// src/ui/pages/login/LoginPage.tsx
import {Box} from '@mui/material'
import LandingPageHeader from '@/ui/pages/landingPage/LandingPageHeader'
import LoginForm from '@/ui/pages/login/LoginForm'

const LoginPage = () => (
    <Box
        component='section'
        sx={{height: '100vh', display: 'flex', flexDirection: 'column'}}
    >
        <LandingPageHeader />
        <LoginForm />
    </Box>
)

export default LoginPage
