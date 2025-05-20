import {useState, ChangeEvent, FormEvent} from 'react'
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
import type {UserData} from '@/types/user'

type LoginFormData = Pick<UserData, 'userId' | 'password'>

const LoginForm = () => {
    const [form, setForm] = useState<LoginFormData>({userId: '', password: ''})

    const handleChange =
        (field: keyof LoginFormData) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // 로그인 API 호출
        console.log('로그인 시도:', form)
    }

    const isValid = form.userId.trim() !== '' && form.password.trim() !== ''
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
                            sx={{py: 1}}
                            disabled={!isValid}
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
