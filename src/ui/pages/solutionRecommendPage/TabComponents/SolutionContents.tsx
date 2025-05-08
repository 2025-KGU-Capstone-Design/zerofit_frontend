import {Box, Stack, Typography} from '@mui/material'
import MainSolution from './MainSolution'
import RadarChart from './RadarChart'
import Solution from '../common/Solution'

const SolutionContents = () => {
    return (
        <Box>
            <Stack sx={{my: '43px'}}>
                <Stack direction='row' spacing='31px' sx={{height: '476px'}}>
                    {/* 종합 최적 솔루션 */}
                    <MainSolution />
                    {/* 종합 최적 솔루션 비교 */}
                    <Box
                        sx={{
                            bgcolor: '#FFFFFF',
                            width: '476px',
                            borderRadius: '8px',
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
            <Box
                sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: '#E5E7EB',
                    padding: '24px',
                }}
            >
                <Box sx={{pb: '48px'}}>
                    <Typography sx={{fontSize: '18px'}}>추가 솔루션</Typography>
                </Box>
                <Stack
                    direction='row'
                    spacing='19px'
                    sx={{display: 'flex', justifyContent: 'center'}}
                >
                    <Solution />
                    <Solution />
                    <Solution />
                </Stack>
            </Box>
        </Box>
    )
}

export default SolutionContents
