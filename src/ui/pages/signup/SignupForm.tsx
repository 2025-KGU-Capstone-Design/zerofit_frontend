import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    Link as MuiLink,
    InputAdornment,
} from '@mui/material'
import {Link} from 'react-router-dom'
import CommonInput from '@/ui/CommonInput'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import BusinessIcon from '@mui/icons-material/Business'

const SignupForm = () => (
    <Box
        component='section'
        sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 6,
        }}
    >
        <Card sx={{width: 500, p: 3}}>
            <CardContent>
                <Typography
                    variant='h4'
                    align='center'
                    gutterBottom
                    sx={{fontWeight: 'bold'}}
                >
                    회원가입
                </Typography>

                <Stack spacing={2} sx={{mt: 2}}>
                    <CommonInput
                        label='아이디'
                        placeholder='아이디를 입력하세요'
                        value='' // 더미 값
                        onChange={() => {}} // 더미 핸들러
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CommonInput
                        label='비밀번호'
                        type='password'
                        placeholder='비밀번호를 입력하세요'
                        value=''
                        onChange={() => {}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LockIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CommonInput
                        label='비밀번호 확인'
                        type='password'
                        placeholder='비밀번호를 다시 입력하세요'
                        value=''
                        onChange={() => {}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LockIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CommonInput
                        label='이메일'
                        placeholder='이메일을 입력하세요'
                        value=''
                        onChange={() => {}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <EmailIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CommonInput
                        label='연락처'
                        placeholder='전화번호를 입력하세요'
                        value=''
                        onChange={() => {}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PhoneIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CommonInput
                        label='업체명'
                        placeholder='업체명을 입력하세요'
                        value=''
                        onChange={() => {}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <BusinessIcon color='action' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        type='button'
                        variant='contained'
                        size='large'
                        sx={{py: 1.5}}
                    >
                        회원가입
                    </Button>

                    <Typography variant='body2' align='center' sx={{mt: 1}}>
                        이미 계정이 있으신가요?{' '}
                        <MuiLink component={Link} to='/login'>
                            로그인
                        </MuiLink>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    </Box>
)

export default SignupForm
