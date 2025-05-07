import {Box, Typography} from '@mui/material'
import SolutionTab from './SoutionTab'

const SolutionRecommend = () => {
    return (
        <Box sx={{mt: 14, width: 1376, mx: 'auto'}}>
            <Box>
                <Typography
                    sx={{fontWeight: 700, fontSize: 24, textAlign: 'center'}}
                >
                    AI 탄소 감축 솔루션 분석
                </Typography>
                <Typography
                    sx={{
                        mt: '17px',
                        color: '#4B5563',
                        fontSize: 18,
                        textAlign: 'center',
                    }}
                >
                    기업에 맞는 최적화된 탄소 감축 솔루션을 AI가 분석하여
                    추천해드립니다. <br />
                    기업이 중점을 두는 목표에 따라 최적의 감축 솔루션을 확인할
                    수 있습니다.
                </Typography>
            </Box>
            <SolutionTab />
        </Box>
    )
}

export default SolutionRecommend
