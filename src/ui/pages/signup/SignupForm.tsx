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
import http from '@/services/Http'

type SignupFormData = UserData & {passwordConfirm: string}

const SignupForm = () => {
    const [form, setForm] = useState<SignupFormData>({
        userId: '',
        password: '',
        passwordConfirm: '',
        email: '',
        phone: '',
        companyName: '',
    })

    const [isUserIdAvailable, setIsUserIdAvailable] = useState<boolean | null>(
        null
    )

    const handleChange =
        (field: keyof SignupFormData) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    // 유효성 검사
    const idRegex = /^[A-Za-z0-9]{4,12}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10,11}$/

    // 검증 상태
    const isUserIdInvalid = form.userId !== '' && !idRegex.test(form.userId)
    const isPasswordMismatch =
        form.passwordConfirm !== '' && form.passwordConfirm !== form.password
    const isEmailInvalid = form.email !== '' && !emailRegex.test(form.email)
    const isPhoneInvalid = form.phone !== '' && !phoneRegex.test(form.phone)

    // 빈값 체크
    const isEmpty = Object.values(form).some((v) => v.trim() === '')

    // 전체 폼 유효 여부
    const isFormValid =
        !isEmpty &&
        !isPasswordMismatch &&
        !isEmailInvalid &&
        !isPhoneInvalid &&
        isUserIdAvailable === true

    const handleCheckUserId = async () => {
        if (!idRegex.test(form.userId)) {
            setIsUserIdAvailable(null)
            return
        }
        const {data} = await http.get<{Available: boolean}>(
            `api/user/availability/${form.userId}`
        )
        setIsUserIdAvailable(data.Available)
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {passwordConfirm, ...signupData} = form
        // 회원가입 API 호출
        try {
            const {data} = await http.post<{userId: string}>(
                '/api/user',
                signupData
            )
            console.log('회원가입 성공, userId:', data.userId)
        } catch (err) {
            console.error('회원가입 에러:', err)
        }
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
            placeholder: '아이디를 입력하세요',
            icon: <PersonIcon color='action' />,
            error: isUserIdInvalid,
            helperText: isUserIdInvalid
                ? '4~12자 영문/숫자만 가능'
                : isUserIdAvailable === true
                  ? '✅ 사용 가능한 아이디입니다.'
                  : isUserIdAvailable === false
                    ? '❌ 이미 사용 중인 아이디입니다.'
                    : undefined,
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
            name: 'phone',
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
                            }) => {
                                const isUserId = name === 'userId'
                                return (
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
                                            ...(isUserId && {
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <Button
                                                            variant='outlined'
                                                            size='large'
                                                            onClick={
                                                                handleCheckUserId
                                                            }
                                                            disabled={
                                                                form.userId ===
                                                                    '' ||
                                                                isUserIdInvalid
                                                            }
                                                        >
                                                            중복확인
                                                        </Button>
                                                    </InputAdornment>
                                                ),
                                            }),
                                        }}
                                    />
                                )
                            }
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
