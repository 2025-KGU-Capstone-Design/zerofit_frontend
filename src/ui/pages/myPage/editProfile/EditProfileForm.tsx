import {useState, ChangeEvent, FormEvent} from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
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

const mockUser: UserData = {
    userId: 'onsilonsil',
    password: '',
    email: 'onsilonsil@gmail.com',
    phoneNumber: '01012345678',
    companyName: '최강맨시티',
}

type EditProfileFormData = Omit<UserData, 'password'> & {
    currentPassword: string
    newPassword: string
    newPasswordConfirm: string
}

const EditProfileForm = () => {
    const [form, setForm] = useState<EditProfileFormData>({
        userId: mockUser.userId,
        email: mockUser.email,
        phoneNumber: mockUser.phoneNumber,
        companyName: mockUser.companyName,
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    })

    const handleChange =
        (field: keyof EditProfileFormData) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({...prev, [field]: e.target.value}))
        }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10,11}$/

    const isEmailInvalid = form.email !== '' && !emailRegex.test(form.email)
    const isPhoneInvalid =
        form.phoneNumber !== '' && !phoneRegex.test(form.phoneNumber)
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
                            value={form.phoneNumber}
                            error={isPhoneInvalid}
                            helperText={
                                isPhoneInvalid
                                    ? '전화번호는 숫자만 10~11자리여야 합니다.'
                                    : undefined
                            }
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
