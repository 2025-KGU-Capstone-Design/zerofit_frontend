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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10,11}$/

    const isEmpty = Object.values(form).some((v) => v.trim() === '')
    const isPasswordMismatch =
        form.passwordConfirm !== '' && form.passwordConfirm !== form.password
    const isEmailInvalid = form.email !== '' && !emailRegex.test(form.email)
    const isPhoneInvalid =
        form.phoneNumber !== '' && !phoneRegex.test(form.phoneNumber)

    const isFormValid =
        !isEmpty && !isPasswordMismatch && !isEmailInvalid && !isPhoneInvalid

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // 회원가입 API 호출
        console.log('회원가입 시도:', form)
    }

    const fields: {
        name: keyof SignupFormData
        label: string
        placeholder: string
        type?: React.HTMLInputTypeAttribute
        icon: React.ReactNode
        error?: boolean
        helperText?: string
    }[] = [
        {
            name: 'userId',
            label: '아이디',
            placeholder: '아이디를 입력하세요', // 아이디 중복 여부 검사 필요
            icon: <PersonIcon color='action' />,
        },
        {
            name: 'password',
            label: '비밀번호',
            placeholder: '비밀번호를 입력하세요',
            type: 'password',
            icon: <LockIcon color='action' />,
        },
        {
            name: 'passwordConfirm',
            label: '비밀번호 확인',
            placeholder: '비밀번호를 다시 입력하세요',
            type: 'password',
            icon: <LockIcon color='action' />,
            error: isPasswordMismatch,
            helperText: isPasswordMismatch
                ? '비밀번호가 일치하지 않습니다.'
                : undefined,
        },
        {
            name: 'email',
            label: '이메일',
            placeholder: '이메일을 입력하세요',
            icon: <EmailIcon color='action' />,
            error: isEmailInvalid,
            helperText: isEmailInvalid
                ? '올바른 이메일 주소를 입력해주세요.'
                : undefined,
        },
        {
            name: 'phoneNumber',
            label: '연락처',
            placeholder: '전화번호를 입력하세요',
            icon: <PhoneIcon color='action' />,
            error: isPhoneInvalid,
            helperText: isPhoneInvalid
                ? '전화번호는 숫자만 10~11자리여야 합니다.'
                : undefined,
        },
        {
            name: 'companyName',
            label: '업체명',
            placeholder: '업체명을 입력하세요',
            icon: <BusinessIcon color='action' />,
        },
    ]

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 6,
            }}
        >
            <Card sx={{width: 500, p: 3, my: 4}}>
                <CardContent>
                    <Typography
                        variant='h4'
                        align='center'
                        gutterBottom
                        sx={{fontWeight: 'bold', color: 'primary.main'}}
                    >
                        회원가입
                    </Typography>

                    <Stack spacing={2} sx={{mt: 2}}>
                        {fields.map(
                            ({
                                name,
                                label,
                                placeholder,
                                type,
                                icon,
                                error,
                                helperText,
                            }) => (
                                <CommonInput
                                    key={name}
                                    label={label}
                                    placeholder={placeholder}
                                    type={type}
                                    value={form[name]}
                                    onChange={handleChange(name)}
                                    error={error}
                                    helperText={helperText}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                {icon}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )
                        )}

                        <Button
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{py: 1.5}}
                            disabled={!isFormValid}
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
