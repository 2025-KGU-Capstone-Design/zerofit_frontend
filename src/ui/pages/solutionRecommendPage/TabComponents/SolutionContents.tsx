import {Box, Stack} from '@mui/material'
import MainSolution from './MainSolution'

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
                    hi
                </Box>
            </Stack>
        </Stack>
    )
}

export default SolutionContents
