import {Box, Tabs, Typography} from '@mui/material'
import Container from '@mui/material/Container'
import SolutionTab from './SoutionTab'
import BasicTabs from './BasicTabs'
import SolutionContents from './SolutionContents'

const SolutionRecommend = () => {
    return (
        <Container sx={{mt: 14}}>
            <Box>
                <Typography sx={{fontWeight: 700, fontSize: 24}}>
                    탄소 감축 솔루션 분석
                </Typography>
                <Typography
                    sx={{mt: '17px', color: '#4B5563', fontSize: '18px'}}
                >
                    기업에 맞는 최적화된 탄소 감축 솔루션을 AI가 분석하여
                    추천해드립니다. 기업이 중점을 두는 목표에 따라 최적의 감축
                    솔루션을 확인할 수 있습니다.
                </Typography>
            </Box>
            <SolutionTab />
        </Container>
    )
}

export default SolutionRecommend
