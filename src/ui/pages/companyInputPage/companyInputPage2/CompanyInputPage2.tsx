import {useNavigate} from 'react-router-dom'
import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import InvestmentInput from '@/ui/pages/companyInputPage/companyInputPage2/InvestmentInput'
import CommonInput from '@/ui/CommonInput'

const CompanyInputPage2 = () => {
    const navigate = useNavigate()
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
                        <CommonInput
                            label='현재 배출량'
                            placeholder='현재배출량을 입력하세요'
                            unitLabel='단위: tCO2eq'
                            type='number'
                            disableNumberSpinner
                        />
                        <Stack direction='row' justifyContent='space-between'>
                            <Button
                                variant='contained'
                                size='large'
                                onClick={() => navigate('/company-info/step1')}
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    border: '1px solid',
                                    borderColor: 'grey.400',
                                }}
                            >
                                이전
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                                onClick={() => navigate('/company-info/step3')}
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
