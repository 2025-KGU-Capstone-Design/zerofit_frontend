import axios from 'axios'
import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Box, Button, Card, CardContent, InputAdornment, Link as MuiLink, Stack, Typography} from '@mui/material'
import CommonInput from '@/ui/CommonInput'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import {useSnackbar} from '@/ui/CommonSnackbar'
import type {LoginForm} from '@/types/auth'
import {useAuth} from '@/hooks/useAuth'
import Logo from '@/assets/icons/logo1.png'

interface LocationState {
    userId?: string
}

const LoginForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const {userId: prefillId = ''} = (location.state as LocationState) ?? {}

    const [form, setForm] = useState<LoginForm>({
        userId: prefillId,
        password: '',
    })
    const {openSnackbar} = useSnackbar()
    const {login, isLoggedIn} = useAuth()

    useEffect(() => {
        if (isLoggedIn) navigate('/')
    }, [isLoggedIn, navigate])

    const handleChange =
        (field: keyof LoginForm) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!form.userId.trim() || !form.password.trim()) {
            openSnackbar('아이디와 비밀번호를 모두 입력해주세요.', 'warning')
            return
        }

        try {
            await login(form)
            openSnackbar('로그인 성공!', 'success', 1500)
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                const msg =
                    typeof error.response.data === 'string'
                        ? error.response.data
                        : error.response.data?.message

                if (msg === 'User not found') {
                    openSnackbar('아이디가 존재하지 않습니다.', 'error')
                } else if (msg === 'Invalid credentials') {
                    openSnackbar('비밀번호가 일치하지 않습니다.', 'error')
                } else {
                    openSnackbar('로그인 중 오류가 발생했습니다.', 'error')
                }
            } else {
                openSnackbar('알 수 없는 오류가 발생했습니다.', 'error')
            }
        }
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card sx={{width: 500, p: 3}}>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3,
                        }}>
                        <Box
                            component="img"
                            src={Logo}
                            sx={{height: '2rem', mr: 0.3}}
                        />
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="black"
                        >
                            Zero
                        </Typography>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="secondary.main"
                        >
                            Fit
                        </Typography>
                    </Box>

                    <Stack spacing={2} sx={{mt: 2}}>
                        <CommonInput
                            label="아이디"
                            placeholder="아이디를 입력하세요"
                            value={form.userId}
                            onChange={handleChange('userId')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <CommonInput
                            label="비밀번호"
                            placeholder="비밀번호를 입력하세요"
                            type="password"
                            value={form.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{py: 1.5}}
                        >
                            로그인
                        </Button>

                        <Stack direction="row" justifyContent="space-between">
                            <MuiLink
                                component={Link}
                                to="/find-password"
                                variant="body2"
                            >
                                비밀번호 찾기
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/signup"
                                variant="body2"
                            >
                                회원가입
                            </MuiLink>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default LoginForm
