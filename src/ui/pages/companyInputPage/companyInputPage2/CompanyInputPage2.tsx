import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import InvestmentInput from '@/ui/pages/companyInputPage/companyInputPage2/InvestmentInput'

const CompanyInputPage2 = () => {
    return (
        <Container sx={{mt: 14}}>
            <Stack spacing={4}>
                <StepHeader title='투자가능금액 및 현재배출량 선택' step={2} />
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    justifyContent='space-between'
                >
                    <FormContainer>
                        <InvestmentInput />
                        <Stack direction='row' justifyContent='flex-end'>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                            >
                                다음
                            </Button>
                        </Stack>
                    </FormContainer>
                    <InfoPreviewCard />
                </Stack>
            </Stack>
        </Container>
    )
}

export default CompanyInputPage2
