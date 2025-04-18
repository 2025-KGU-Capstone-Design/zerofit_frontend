import {Stack} from '@mui/material'
import LandingPageHeader from '@/ui/pages/landingPage/LandingPageHeader.tsx'
import HeroSection from '@/ui/pages/landingPage/HeroSection.tsx'
import {useLoaderData} from 'react-router-dom'

const LandingPage = () => {
    const data = useLoaderData() as {data: string}
    console.log('sample data: ', data)

    return (
        <Stack
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                color: 'white',
            }}
        >
            <LandingPageHeader />
            <HeroSection />
        </Stack>
    )
}

export default LandingPage
