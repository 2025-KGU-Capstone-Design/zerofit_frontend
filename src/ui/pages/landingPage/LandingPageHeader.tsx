import {AppBar, Box, Link as MUILink, Toolbar, Typography} from '@mui/material'
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import Logo from '@/assets/icons/logo1.png'
import useCompanyInputStore from '@/store/useCompanyInputStore'
import {useAuth} from '@/hooks/useAuth'
import {useSnackbar} from '@/ui/CommonSnackbar'

const LandingPageHeader = () => {
    const resetState = useCompanyInputStore((state) => state.resetState)
    const {isLoggedIn, logout} = useAuth()
    const navigate = useNavigate()
    const {openSnackbar} = useSnackbar()

    const handleLogout = () => {
        openSnackbar('로그아웃되었습니다.', 'info')
        logout()
        navigate('/')
    }

    const handleConsultingClick = () => {
        if (!isLoggedIn) {
            openSnackbar('로그인 후 이용할 수 있습니다.', 'info')
        } else {
            resetState()
        }
    }

    return (
        <AppBar position="static" color="primary" elevation={0}>
            < Toolbar>
                {/* 좌측 로고 */}
                <Typography
                    variant="h5"
                    component={RouterLink}
                    to="/"
                    sx={{
                        color: 'inherit',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    <Box display="flex" alignItems="center">
                        <Box
                            component="img"
                            src={Logo}
                            sx={{width: 29, height: 29, mr: 0.3}}
                        />
                        <Box component="span">Zero</Box>
                        <Box component="span" color="secondary.main">
                            Fit
                        </Box>
                    </Box>
                </Typography>


                <Box sx={{flexGrow: 1}} />

                <MUILink
                    component={RouterLink}
                    to={isLoggedIn ? '/company-info/step1' : '/login'}
                    onClick={handleConsultingClick}
                    underline="none"
                    sx={{
                        ml: 6,
                        color: 'grey.300',
                        '&:hover': {color: 'white'},
                    }}
                >
                    컨설팅
                </MUILink>
                {/*<Stack direction='row' spacing={4} sx={{mr: 2}}>*/
                }
                {/*    {isLoggedIn ? (*/
                }
                {/*        <>*/
                }
                {/*            <MUILink*/
                }
                {/*                component={RouterLink}*/
                }
                {/*                to='/mypage/search-history'*/
                }
                {/*                underline='none'*/
                }
                {/*                sx={{*/
                }
                {/*                    color: 'grey.300',*/
                }
                {/*                    '&:hover': {color: 'white'},*/
                }
                {/*                }}*/
                }
                {/*            >*/
                }
                {/*                마이페이지*/
                }
                {/*            </MUILink>*/
                }
                {/*            <MUILink*/
                }
                {/*                component='button'*/
                }
                {/*                onClick={handleLogout}*/
                }
                {/*                underline='none'*/
                }
                {/*                sx={{*/
                }
                {/*                    color: 'grey.300',*/
                }
                {/*                    '&:hover': {color: 'white'},*/
                }
                {/*                    background: 'none',*/
                }
                {/*                    border: 'none',*/
                }
                {/*                    padding: 0,*/
                }
                {/*                    font: 'inherit',*/
                }
                {/*                    cursor: 'pointer',*/
                }
                {/*                }}*/
                }
                {/*            >*/
                }
                {/*                로그아웃*/
                }
                {/*            </MUILink>*/
                }
                {/*        </>*/
                }
                {/*    ) : (*/
                }
                {/*        <>*/
                }
                {/*            <MUILink*/
                }
                {/*                component={RouterLink}*/
                }
                {/*                to='/login'*/
                }
                {/*                underline='none'*/
                }
                {/*                sx={{*/
                }
                {/*                    color: 'grey.300',*/
                }
                {/*                    '&:hover': {color: 'white'},*/
                }
                {/*                }}*/
                }
                {/*            >*/
                }
                {/*                로그인*/
                }
                {/*            </MUILink>*/
                }
                {/*            <MUILink*/
                }
                {/*                component={RouterLink}*/
                }
                {/*                to='/signup'*/
                }
                {/*                underline='none'*/
                }
                {/*                sx={{*/
                }
                {/*                    color: 'grey.300',*/
                }
                {/*                    '&:hover': {color: 'white'},*/
                }
                {/*                }}*/
                }
                {/*            >*/
                }
                {/*                회원가입*/
                }
                {/*            </MUILink>*/
                }
                {/*        </>*/
                }
                {/*    )}*/
                }
                {/*</Stack>*/
                }
            </Toolbar>
        </AppBar>
    )
}

export default LandingPageHeader
