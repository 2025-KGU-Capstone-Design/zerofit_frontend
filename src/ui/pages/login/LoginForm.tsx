import {useState, ChangeEvent, FormEvent} from 'react'
import {useLocation} from 'react-router-dom'
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
import {useSnackbar} from '@/ui/CommonSnackbar'
import type {LoginForm} from '@/types/auth'
import {authApi} from '@/services/auth'

interface LocationState {
    userId?: string
}

const LoginForm = () => {
    const location = useLocation()
    const {userId: prefillId = ''} = (location.state as LocationState) ?? {}

    const [form, setForm] = useState<LoginForm>({
        userId: prefillId,
        password: '',
    })
    const {openSnackbar} = useSnackbar()

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
            const {data} = await authApi.login(form)
            openSnackbar('로그인 성공!', 'success')
            console.log('로그인 성공:', data)
        } catch (err) {
            openSnackbar('아이디 또는 비밀번호를 다시 입력해주세요.', 'warning')
            console.log('로그인 실패:', err)
        }
    }

    return (
        <Box
            component='form'
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
                            value={form.userId}
                            onChange={handleChange('userId')}
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
                            placeholder='비밀번호를 입력하세요'
                            type='password'
                            value={form.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon color='action' />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{py: 1.5}}
                        >
                            로그인
                        </Button>

                        <Stack direction='row' justifyContent='space-between'>
                            <MuiLink
                                component={Link}
                                to='/find-password'
                                variant='body2'
                            >
                                비밀번호 찾기
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to='/signup'
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
}

export default LoginForm
