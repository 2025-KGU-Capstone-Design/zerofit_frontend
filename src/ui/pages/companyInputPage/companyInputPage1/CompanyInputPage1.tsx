import {useNavigate} from 'react-router-dom'
import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import IndustryInput from '@/ui/pages/companyInputPage/companyInputPage1/IndustryInput'
import FacilityInput from '@/ui/pages/companyInputPage/companyInputPage1/FacilityInput'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import {useSnackbar} from '@/ui/CommonSnackbar'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const CompanyInputPage1 = () => {
    const navigate = useNavigate()
    const {openSnackbar, closeSnackbar} = useSnackbar()

    const industry = useCompanyInputStore((state) => state.industry)
    const targetFacilities = useCompanyInputStore(
        (state) => state.targetFacilities
    )

    const handleNext = () => {
        if (!industry) {
            openSnackbar(' 산업군을 선택해주세요.', 'error')
            return
        }
        if (targetFacilities.length === 0) {
            openSnackbar(' 하나 이상의 설비를 선택해주세요.', 'error')
            return
        }
        closeSnackbar()
        navigate('/company-info/step2')
    }
    return (
        <Container sx={{mt: 14}}>
            <Stack spacing={4}>
                <StepHeader title='산업군 및 대상설비 선택' step={1} />
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    justifyContent='space-between'
                >
                    <FormContainer>
                        <IndustryInput />
                        <FacilityInput />
                        <Stack direction='row' justifyContent='flex-end'>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                                onClick={handleNext}
                            >
                                다음
                            </Button>
                        </Stack>
                    </FormContainer>
                    <InfoPreviewCard step={1} />
                </Stack>
            </Stack>
        </Container>
    )
}

export default CompanyInputPage1
