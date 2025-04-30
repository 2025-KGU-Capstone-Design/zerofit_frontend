import {useNavigate} from 'react-router-dom'
import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import InvestmentInput from '@/ui/pages/companyInputPage/companyInputPage2/InvestmentInput'
import CommonInput from '@/ui/CommonInput'

const CompanyInputPage3 = () => {
    const navigate = useNavigate()
    return (
        <Container sx={{mt: 14}}>
            <Stack spacing={4}>
                <StepHeader title='목표배출량 및 목표ROI기간 선택' step={3} />
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    justifyContent='space-between'
                >
                    <FormContainer>
                        <CommonInput
                            label='목표배출량 입력'
                            placeholder='목표배출량을 입력하세요'
                            unitLabel='단위: tCO2eq'
                            type='number'
                            disableNumberSpinner
                        />
                        <InvestmentInput />
                        <Stack direction='row' justifyContent='space-between'>
                            <Button
                                variant='contained'
                                size='large'
                                onClick={() => navigate('/company-info/step2')}
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
                                분석
                            </Button>
                        </Stack>
                    </FormContainer>
                    <InfoPreviewCard />
                </Stack>
            </Stack>
        </Container>
    )
}

export default CompanyInputPage3
