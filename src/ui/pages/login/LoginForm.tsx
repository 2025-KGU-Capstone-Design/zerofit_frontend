// src/ui/pages/login/LoginForm.tsx
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    Link as MuiLink,
} from '@mui/material'
import {Link} from 'react-router-dom'
import CommonInput from '@/ui/CommonInput'

const LoginForm = () => (
    <Box
        sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Card sx={{width: 450, p: 3}}>
            <CardContent>
                <Typography variant='h4' align='center' gutterBottom>
                    <Box
                        component='span'
                        sx={{
                            WebkitTextStroke: (theme) =>
                                `1px ${theme.palette.secondary.main}`,
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Zero
                    </Box>
                    <Box
                        component='span'
                        sx={{
                            fontWeight: 'bold',
                            color: (theme) => theme.palette.secondary.main,
                        }}
                    >
                        Fit
                    </Box>
                </Typography>

                <Stack spacing={2} sx={{mt: 2}}>
                    <CommonInput
                        label='아이디'
                        placeholder='아이디를 입력하세요'
                        value=''
                        onChange={() => {}}
                    />
                    <CommonInput
                        label='비밀번호'
                        placeholder='비밀번호를 입력하세요'
                        type='password'
                        value=''
                        onChange={() => {}}
                    />
                    <Button type='button' variant='contained' size='large'>
                        로그인
                    </Button>
                    <Stack direction='row' justifyContent='space-between'>
                        <MuiLink
                            component={Link}
                            to='/find-password'
                            underline='none'
                            variant='body2'
                        >
                            비밀번호 찾기
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to='/signup'
                            underline='none'
                            variant='body2'
                        >
                            회원가입
                        </MuiLink>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </Box>
)

export default LoginForm
