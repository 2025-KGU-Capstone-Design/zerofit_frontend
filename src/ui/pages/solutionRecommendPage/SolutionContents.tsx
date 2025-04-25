import {Typography, Box, Stack} from '@mui/material'
import React from 'react'
import MainSolution from './TabComponents/MainSolution'

const SolutionContents = () => {
    return (
        <Stack sx={{mt: '43px'}}>
            <Stack direction='row' spacing='31px' sx={{height: '476px'}}>
                <MainSolution />
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
