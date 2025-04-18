import {Stack, Typography, Box} from '@mui/material'

const HeroSection = () => (
    <Stack alignItems='center' textAlign='center' px={3} py={10}>
        <Typography
            variant='h1'
            fontWeight='bold'
            color='secondary.main'
            sx={{
                fontSize: '5rem',
            }}
        >
            Zero-Fit
        </Typography>

        <Typography
            variant='h2'
            fontWeight={600}
            color='white'
            sx={{
                fontSize: '3rem',
                mb: 4,
            }}
        >
            당신의 기업에 딱 맞는 Net-Zero 솔루션
        </Typography>

        <Typography
            variant='body1'
            color='grey.300'
            sx={{
                fontSize: '1rem',
                mt: 1,
                mb: 2,
                maxWidth: '40rem',
            }}
        >
            Zero-Fit은 기업의 산업군, 설비, 예산을 반영해 최적의 온실가스 감축
            솔루션을 추천하고, 감축 효과를 분석해 탄소 중립(Net-Zero) 목표
            달성을 지원합니다.
        </Typography>

        <Typography
            variant='body1'
            fontWeight='bold'
            color='grey.300'
            sx={{
                fontSize: '1.125rem',
                mt: 2,
                mb: 3,
                maxWidth: '40rem',
            }}
        >
            탄소 중립을 향한 여정, Zero-Fit과 함께 시작하세요!
        </Typography>

        <Typography
            variant='h4'
            fontWeight={600}
            sx={{
                fontSize: '2.25rem',
                mt: 3,
            }}
        >
            <Box component='span' color='secondary.main'>
                Net-
            </Box>
            <Box component='span' color='white'>
                Zero
            </Box>
            <Box component='span' color='secondary.main'>
                , Let&apos;s{' '}
            </Box>
            <Box component='span' color='white'>
                Zero
            </Box>
            <Box component='span' color='secondary.main'>
                !
            </Box>
        </Typography>
    </Stack>
)

export default HeroSection
