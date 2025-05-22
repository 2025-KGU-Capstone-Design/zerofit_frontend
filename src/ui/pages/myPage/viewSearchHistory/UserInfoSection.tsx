import {
    Box,
    Card,
    CardContent,
    Avatar,
    Typography,
    Button,
    Stack,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import BusinessIcon from '@mui/icons-material/Business'
import EmailIcon from '@mui/icons-material/Email'

const mockUser = {
    userId: 'onsilonsil',
    companyName: '최강맨시티',
    email: 'onsilonsil@gmail.com',
}

const UserInfoSection = () => {
    const user = mockUser

    return (
        <Stack sx={{mt: 2}} spacing={2}>
            <Card>
                <CardContent>
                    <Stack direction='row' spacing={3} alignItems='center'>
                        <Avatar sx={{width: 64, height: 64, fontSize: 24}}>
                            {user.userId.charAt(0).toUpperCase()}
                        </Avatar>

                        <Stack spacing={0.5}>
                            <Typography variant='h6'>{user.userId}</Typography>

                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                            >
                                <BusinessIcon fontSize='small' color='action' />
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {user.companyName}
                                </Typography>
                            </Stack>

                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                            >
                                <EmailIcon fontSize='small' color='action' />
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {user.email}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Box sx={{flexGrow: 1, textAlign: 'right'}}>
                            <Button
                                variant='outlined'
                                startIcon={<EditIcon />}
                                component='a'
                                href='/mypage/edit'
                            >
                                회원 정보 수정
                            </Button>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default UserInfoSection
