import {
    AppBar,
    Toolbar,
    Typography,
    Stack,
    Box,
    Link as MUILink,
} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const LandingPageHeader = () => {
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography
                    variant='h5'
                    component={RouterLink}
                    to='/'
                    sx={{
                        color: 'inherit',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    <Box component='span'>Zero</Box>
                    <Box component='span' color='secondary.main'>
                        Fit
                    </Box>
                </Typography>

                <Stack
                    sx={{
                        ml: 6,
                    }}
                >
                    <MUILink
                        component={RouterLink}
                        to='/company-info/step1'
                        underline='none'
                        sx={{
                            color: 'grey.300', // theme?
                            '&:hover': {color: 'white'},
                        }}
                    >
                        컨설팅
                    </MUILink>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default LandingPageHeader
