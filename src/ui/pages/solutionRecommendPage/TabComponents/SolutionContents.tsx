import {Box, Stack, Typography} from '@mui/material'
import MainSolution from './MainSolution'
import RadarChart from './RadarChart'

const SolutionContents = () => {
    return (
        <Stack sx={{mt: '43px'}}>
            <Stack direction='row' spacing='31px' sx={{height: '476px'}}>
                {/* 종합 최적 솔루션 */}
                <MainSolution />
                {/* 종합 최적 솔루션 비교 */}
                <Box
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '476px',
                        borderRadius: '16px',
                        border: '1px solid',
                        borderColor: '#E5E7EB',
                    }}
                >
                    <Box sx={{padding: '24px'}}>
                        <Typography sx={{fontSize: '18px'}}>
                            종합 최적 솔루션 비교
                        </Typography>
                        <RadarChart />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default SolutionContents
