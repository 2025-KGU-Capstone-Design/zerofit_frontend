import {Stack, Typography, Container, Divider} from '@mui/material'
import UserInfoSection from '@/ui/pages/myPage/viewSearchHistory/UserInfoSection'
import SearchHistorySection from '@/ui/pages/myPage/viewSearchHistory/SearchHistorySection'

const ViewSearchHistoryPage = () => (
    <Container sx={{mt: 14}}>
        <Stack spacing={4}>
            <Stack
                direction={{xs: 'column', md: 'row'}}
                justifyContent='space-between'
            >
                <Stack
                    flex={2}
                    spacing={10}
                    sx={{
                        p: 3,
                        backgroundColor: '#FFFFFF',
                        maxWidth: '1100px',
                        mb: 10,
                    }}
                >
                    <Stack spacing={4}>
                        <Typography variant='h5' fontWeight='bold'>
                            마이페이지
                        </Typography>
                        <Divider sx={{my: 2}} />
                        <Typography variant='h6' fontWeight='bold'>
                            사용자 정보
                        </Typography>
                        <UserInfoSection />
                    </Stack>
                    <SearchHistorySection />
                </Stack>
            </Stack>
        </Stack>
    </Container>
)

export default ViewSearchHistoryPage
