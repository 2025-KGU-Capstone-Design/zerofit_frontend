import {
    AppBar,
    Toolbar,
    Typography,
    Stack,
    Box,
    Link as MUILink,
} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import Logo from '@/assets/icons/logo1.png'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const LandingPageHeader = () => {
    const resetState = useCompanyInputStore((state) => state.resetState)

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                {/* 좌측 로고 */}
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
                    <Box display='flex' alignItems='center'>
                        <Box
                            component='img'
                            src={Logo}
                            sx={{width: 29, height: 29, mr: 0.3}}
                        />
                        <Box component='span'>Zero</Box>
                        <Box component='span' color='secondary.main'>
                            Fit
                        </Box>
                    </Box>
                </Typography>

                <MUILink
                    component={RouterLink}
                    to='/company-info/step1'
                    onClick={resetState}
                    underline='none'
                    sx={{
                        ml: 6,
                        color: 'grey.300',
                        '&:hover': {color: 'white'},
                    }}
                >
                    컨설팅
                </MUILink>

                <Box sx={{flexGrow: 1}} />

                <Stack direction='row' spacing={4} sx={{mr: 2}}>
                    <MUILink
                        component={RouterLink}
                        to='/login'
                        underline='none'
                        sx={{
                            color: 'grey.300',
                            '&:hover': {color: 'white'},
                        }}
                    >
                        로그인
                    </MUILink>
                    <MUILink
                        component={RouterLink}
                        to='/signup'
                        underline='none'
                        sx={{
                            color: 'grey.300',
                            '&:hover': {color: 'white'},
                        }}
                    >
                        회원가입
                    </MUILink>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default LandingPageHeader
