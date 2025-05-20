import React, {useState, ChangeEvent, FormEvent} from 'react'
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
import type {UserData} from '@/types/auth'

type SignupFormData = UserData & {passwordConfirm: string}

const SignupForm = () => {
    const [form, setForm] = useState<SignupFormData>({
        userId: '',
        password: '',
        passwordConfirm: '',
        email: '',
        phoneNumber: '',
        companyName: '',
    })

    const handleChange =
        (field: keyof SignupFormData) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    const isPasswordMismatch =
        form.passwordConfirm !== '' && form.passwordConfirm !== form.password

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // 회원가입 API 호출
        console.log('회원가입 시도:', form)
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
                py: 8,
            }}
        >
            <Card sx={{width: 500, p: 3, my: 4}}>
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
                            type='password'
                            placeholder='비밀번호를 입력하세요'
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

                        <CommonInput
                            label='비밀번호 확인'
                            type='password'
                            placeholder='비밀번호를 다시 입력하세요'
                            value={form.passwordConfirm}
                            onChange={handleChange('passwordConfirm')}
                            error={isPasswordMismatch}
                            helperText={
                                isPasswordMismatch
                                    ? '비밀번호가 일치하지 않습니다.'
                                    : ''
                            }
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
                            value={form.email}
                            onChange={handleChange('email')}
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
                            value={form.phoneNumber}
                            onChange={handleChange('phoneNumber')}
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
                            value={form.companyName}
                            onChange={handleChange('companyName')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <BusinessIcon color='action' />
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
}

export default SignupForm
