import React from 'react'
import {Stack} from '@mui/material'

const FormContainer = ({children}: {children: React.ReactNode}) => (
    <Stack
        flex={2}
        spacing={3}
        justifyContent='space-between'
        sx={{
            p: 3,
            backgroundColor: '#FFFFFF',
            maxWidth: '800px',
            minHeight: '450px',
            border: '1px solid #E5E7EB',
            borderRadius: '5px',
            mb: 20
        }}
    >
        {children}
    </Stack>
)

export default FormContainer
