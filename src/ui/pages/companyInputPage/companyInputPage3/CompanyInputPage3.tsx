import {useNavigate} from 'react-router-dom'
import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import BaseSliderInput from '@/ui/pages/companyInputPage/common/BaseSliderInput'
import CommonInput from '@/ui/CommonInput'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const CompanyInputPage3 = () => {
    const navigate = useNavigate()
    const resetState = useCompanyInputStore((state) => state.resetState)

    const targetEmission = useCompanyInputStore((state) => state.targetEmission)
    const setTargetEmission = useCompanyInputStore(
        (state) => state.setTargetEmission
    )
    const targetRoiPeriod = useCompanyInputStore(
        (state) => state.targetRoiPeriod
    )
    const setTargetRoiPeriod = useCompanyInputStore(
        (state) => state.setTargetRoiPeriod
    )
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
                            placeholder='목표배출량을 입력하세요.'
                            unitLabel='단위: tCO2eq'
                            type='number'
                            disableNumberSpinner
                            value={targetEmission}
                            onChange={(e) => {
                                const v = e.target.value
                                if (v === '') {
                                    setTargetEmission(undefined)
                                } else {
                                    setTargetEmission(Number(v))
                                }
                            }}
                        />
                        <BaseSliderInput
                            label='목표ROI기간 입력'
                            unit='년'
                            min={0}
                            max={5}
                            step={0.1}
                            value={targetRoiPeriod}
                            onChange={(value) => setTargetRoiPeriod(value)}
                            valueLabelFormat={(value) => value.toFixed(1)}
                        />
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
                                onClick={() => {
                                    resetState()
                                    navigate('/solution')
                                }}
                            >
                                분석
                            </Button>
                        </Stack>
                    </FormContainer>
                    <InfoPreviewCard step={3} />
                </Stack>
            </Stack>
        </Container>
    )
}

export default CompanyInputPage3
