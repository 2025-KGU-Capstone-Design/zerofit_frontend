import {useEffect, useState, useRef} from 'react'
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Stack,
    Link as MuiLink,
    CircularProgress,
    Box,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import BusinessIcon from '@mui/icons-material/Business'
import EmailIcon from '@mui/icons-material/Email'
import {Link as RouterLink} from 'react-router-dom'

import {userApi} from '@/services/userApi'
import type {UserData} from '@/types/auth'
import profileImg from '@/assets/icons/profileImg.png'

const UserInfoSection = () => {
    const [user, setUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const calledOnce = useRef(false)

    useEffect(() => {
        if (calledOnce.current) {
            // 이미 한 번 호출했으면 더 이상 실행하지 않음
            return
        }
        calledOnce.current = true
        const fetchProfile = async () => {
            try {
                const response = await userApi.fetchProfile()
                setUser(response.data)
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

    if (!user) {
        return null
    }

    return (
        <Stack>
            <Card>
                <CardContent>
                    <Stack
                        direction='row'
                        spacing={6}
                        alignItems='center'
                        sx={{ml: 2}}
                    >
                        <Avatar
                            src={profileImg}
                            sx={{
                                width: 150,
                                height: 150,
                                fontSize: 36,
                                bgcolor: 'primary.main',
                                color: 'white',
                                borderRadius: '16px',
                            }}
                        >
                            {!profileImg && user.userId.charAt(0).toUpperCase()}
                        </Avatar>

                        <Stack spacing={0.5}>
                            <Typography
                                variant='h6'
                                sx={{fontWeight: 'medium'}}
                            >
                                {user.userId}
                            </Typography>

                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                            >
                                <BusinessIcon fontSize='small' />
                                <Typography variant='body2'>
                                    {user.companyName}
                                </Typography>
                            </Stack>

                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                            >
                                <EmailIcon fontSize='small' />
                                <Typography variant='body2'>
                                    {user.email}
                                </Typography>
                            </Stack>
                            <Stack>
                                <MuiLink
                                    component={RouterLink}
                                    to='/mypage/edit'
                                    sx={{
                                        mt: 1,
                                        fontWeight: 'medium',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <EditIcon fontSize='small' sx={{mr: 1}} />
                                    회원 정보 수정
                                </MuiLink>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default UserInfoSection
