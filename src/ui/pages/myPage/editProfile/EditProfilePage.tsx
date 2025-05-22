import {Stack} from '@mui/material'
import EditProfileForm from '@/ui/pages/myPage/editProfile/EditProfileForm'

function EditProfilePage() {
    return (
        <>
            <Stack
                component='main'
                sx={{
                    display: 'flex',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <Stack flexGrow={1} ml={3}>
                    <EditProfileForm />
                </Stack>
            </Stack>
        </>
    )
}

export default EditProfilePage
