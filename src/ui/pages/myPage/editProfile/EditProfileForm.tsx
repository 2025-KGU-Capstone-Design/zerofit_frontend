import {useEffect, useState, useRef, ChangeEvent, FormEvent} from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Button,
    Stack,
    InputAdornment,
} from '@mui/material'
import CommonInput from '@/ui/CommonInput'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import BusinessIcon from '@mui/icons-material/Business'
import type {UserData} from '@/types/auth'
import {userApi} from '@/services/userApi'

type EditProfileFormData = Omit<UserData, 'password'> & {
    currentPassword: string
    newPassword: string
    newPasswordConfirm: string
}

const EditProfileForm = () => {
    const [form, setForm] = useState<EditProfileFormData>({
        userId: '',
        email: '',
        phone: '',
        companyName: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const calledOnce = useRef(false)

    useEffect(() => {
        if (calledOnce.current) return
        calledOnce.current = true

        const fetchProfile = async () => {
            try {
                const response = await userApi.fetchProfile()
                const userData: UserData = response.data

                // 가져온 userData를 form에 채워 넣기
                setForm({
                    userId: userData.userId,
                    email: userData.email,
                    phone: userData.phone,
                    companyName: userData.companyName,
                    currentPassword: '',
                    newPassword: '',
                    newPasswordConfirm: '',
                })
            } catch (err) {
                console.error(err)
                setError('프로필 정보를 불러오는 데 실패했습니다.')
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [])

    if (loading) {
        return (
            <Box display='flex' justifyContent='center' mt={4}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography color='error' align='center' mt={4}>
                {error}
            </Typography>
        )
    }

    const handleChange =
        (field: keyof EditProfileFormData) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10,11}$/

    const isEmailInvalid = form.email !== '' && !emailRegex.test(form.email)
    const isPhoneInvalid = form.phone !== '' && !phoneRegex.test(form.phone)
    const isPasswordMismatch =
        form.newPasswordConfirm !== '' &&
        form.newPasswordConfirm !== form.newPassword

    const isFormValid =
        !isEmailInvalid &&
        !isPhoneInvalid &&
        (!form.newPassword || (!isPasswordMismatch && form.newPassword))

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {newPasswordConfirm, ...payload} = form

        console.log('수정 폼 제출:', payload)
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{display: 'flex', justifyContent: 'center', py: 4}}
        >
            <Card sx={{width: 800, p: 3, my: 4}}>
                <CardContent>
                    <Typography
                        variant='h4'
                        align='center'
                        gutterBottom
                        sx={{fontWeight: 'bold'}}
                    >
                        회원 정보 수정
                    </Typography>

                    <Stack spacing={2} sx={{mt: 2}}>
                        <CommonInput
                            label='아이디'
                            value={form.userId}
                            onChange={() => {}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PersonIcon color='action' />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <CommonInput
                            label='현재 비밀번호'
                            type='password'
                            value={form.currentPassword}
                            onChange={handleChange('currentPassword')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon color='action' />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CommonInput
                            label='새 비밀번호' //현재 비밀번호와 다른지 검증하는 로직 필요할 듯?
                            type='password'
                            value={form.newPassword}
                            onChange={handleChange('newPassword')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon color='action' />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CommonInput
                            label='새 비밀번호 확인'
                            type='password'
                            value={form.newPasswordConfirm}
                            error={isPasswordMismatch}
                            helperText={
                                isPasswordMismatch
                                    ? '비밀번호가 일치하지 않습니다.'
                                    : undefined
                            }
                            onChange={handleChange('newPasswordConfirm')}
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
                            error={isEmailInvalid}
                            helperText={
                                isEmailInvalid
                                    ? '올바른 이메일을 입력해주세요.'
                                    : undefined
                            }
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
                            value={form.phone}
                            error={isPhoneInvalid}
                            helperText={
                                isPhoneInvalid
                                    ? '전화번호는 숫자만 10~11자리여야 합니다.'
                                    : undefined
                            }
                            onChange={handleChange('phone')}
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
                            disabled={!isFormValid}
                        >
                            저장
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default EditProfileForm
