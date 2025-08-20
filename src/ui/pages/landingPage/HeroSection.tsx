import {Box, Stack, Typography} from '@mui/material'
import Logo from '@/assets/icons/logo1.png'
import DarkVeil from '@/ui/bits/DarkVeil.tsx'
import TextType from '@/ui/bits/TextType.tsx'
import SpotlightCard from '@/ui/bits/SpotlightCard.tsx'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '@/hooks/useAuth'
import {useSnackbar} from '@/ui/CommonSnackbar'
import useCompanyInputStore from '@/store/useCompanyInputStore'
import ShinyText from '@/ui/bits/ShinyText.tsx'
import FadeContent from '@/ui/bits/FadeContent.tsx'

const HeroSection = () => {

    const navigate = useNavigate()
    const {isLoggedIn} = useAuth()
    const {openSnackbar} = useSnackbar()
    const resetState = useCompanyInputStore((state) => state.resetState)

    const handleStartClick = () => {
        if (isLoggedIn) {
            resetState()
            navigate('/company-info/step1')
        } else {
            openSnackbar('로그인 후 이용할 수 있습니다.', 'info')
            navigate('/login')
        }
    }

    return <>
        <div style={{width: '100%', height: '100vh', position: 'relative'}}>
            <DarkVeil />
            <FadeContent>
                <Stack alignItems="center"
                       textAlign="center"
                       px={3}
                       py={10}
                       sx={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           zIndex: 1,
                       }}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                        <Box
                            component="img"
                            src={Logo}
                            sx={{height: '5rem', mr: 0.3}}
                        />
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            color="white"
                            sx={{
                                fontSize: '5rem',
                            }}
                        >
                            Zero
                            {/*<ShinyText text="Zero" />*/}
                        </Typography>
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            color="secondary.main"
                            sx={{
                                fontSize: '5rem',
                            }}
                        >
                            Fit
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        fontWeight={600}
                        color="white"
                        sx={{
                            fontSize: '3rem',
                            mb: 1,
                        }}
                    >
                        <TextType
                            text={['당신의 기업에 딱 맞는 Net-Zero 솔루션', '탄소 중립을 향한 여정,', 'Zero-Fit과 함께 시작하세요!']}
                            textColors={['#e0e0e0', '#e0e0e0', '#e0e0e0']}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </Typography>

                    <Typography
                        variant="body1"
                        color="grey.300"
                        sx={{
                            fontSize: '1rem',
                            mt: 1,
                            mb: 2,
                            maxWidth: '40rem',
                        }}
                    >
                        ZeroFit은 기업의 산업군, 설비, 예산을 반영해 최적의 온실가스 감축
                        솔루션을 추천하고, 감축 효과를 분석해 탄소 중립(Net-Zero) 목표
                        달성을 지원합니다.
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight={600}
                        sx={{
                            fontSize: '2.25rem',
                            mt: 1,
                        }}
                    >
                        <Box component="span" color="secondary.main">
                            Net-
                        </Box>
                        <Box component="span" color="white">
                            Zero
                        </Box>
                        <Box component="span" color="secondary.main">
                            , Let&apos;s{' '}
                        </Box>
                        <Box component="span" color="white">
                            Zero
                        </Box>
                        <Box component="span" color="secondary.main">
                            !
                        </Box>
                    </Typography>


                    <Box
                        sx={{
                            mt: '3rem',
                            width: '18rem',
                            cursor: 'pointer',
                        }}
                        onClick={handleStartClick}
                    >
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(4, 217, 217, 0.3)">
                            <Typography variant="body1" fontWeight={600} sx={{
                                fontSize: '1.7rem',
                            }}>
                                {/*시작하기*/}
                                <ShinyText text={'시작하기'} />
                            </Typography>
                        </SpotlightCard>
                    </Box>
                </Stack>
            </FadeContent>
        </div>
    </>
}

export default HeroSection
