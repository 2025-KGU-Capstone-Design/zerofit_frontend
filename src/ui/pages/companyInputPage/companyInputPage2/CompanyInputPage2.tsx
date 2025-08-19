import {useNavigate} from 'react-router-dom'
import {Container, Stack, Button} from '@mui/material'
import FormContainer from '@/ui/pages/companyInputPage/common/FormContainer'
import StepHeader from '@/ui/pages/companyInputPage/common/StepHeader'
import InfoPreviewCard from '@/ui/pages/companyInputPage/common/InfoPreviewCard'
import BaseSliderInput from '@/ui/pages/companyInputPage/common/BaseSliderInput'
import CommonInput from '@/ui/CommonInput'
import {useSnackbar} from '@/ui/CommonSnackbar'
import useCompanyInputStore from '@/store/useCompanyInputStore'
import FadeContent from '@/ui/bits/FadeContent.tsx'

const CompanyInputPage2 = () => {
    const navigate = useNavigate()
    const {openSnackbar, closeSnackbar} = useSnackbar()

    const currentEmission = useCompanyInputStore(
        (state) => state.currentEmission,
    )
    const setCurrentEmission = useCompanyInputStore(
        (state) => state.setCurrentEmission,
    )
    const availableInvestment = useCompanyInputStore(
        (state) => state.availableInvestment,
    )
    const setAvailableInvestment = useCompanyInputStore(
        (state) => state.setAvailableInvestment,
    )

    const handleNext = () => {
        if (currentEmission === undefined || currentEmission === null) {
            openSnackbar(' 현재 배출량을 입력해주세요.', 'error')
            return
        }
        closeSnackbar()
        navigate('/company-info/step3')
    }
    return (
        <FadeContent>
            <Container sx={{mt: 10}}>
                <Stack spacing={4}>
                    <StepHeader title="투자가능금액 및 현재배출량 선택" step={2} />
                    <Stack
                        direction={{xs: 'column', md: 'row'}}
                        justifyContent="space-between"
                    >
                        <FormContainer>
                            <BaseSliderInput
                                label="투자가능금액 입력"
                                unit="백만 원"
                                min={0}
                                max={100}
                                value={availableInvestment}
                                onChange={setAvailableInvestment}
                            />
                            <CommonInput
                                label="현재배출량 입력"
                                placeholder="현재배출량을 입력하세요."
                                unitLabel="단위: tCO2eq"
                                type="number"
                                disableNumberSpinner
                                value={currentEmission}
                                onChange={(e) => {
                                    const v = e.target.value
                                    if (v === '') {
                                        setCurrentEmission(undefined)
                                    } else {
                                        setCurrentEmission(Number(v))
                                    }
                                }}
                            />
                            <Stack direction="row" justifyContent="space-between">
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/company-info/step1')}
                                    disableElevation
                                    sx={{
                                        bgcolor: 'white',
                                        color: 'black',
                                        border: '1px solid',
                                        borderColor: 'grey.400',
                                        '&:hover': {
                                            boxShadow: 4,
                                        },
                                    }}
                                >
                                    이전
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={handleNext}
                                    disableElevation
                                    sx={{
                                        '&:hover': {
                                            boxShadow: 4,
                                        },
                                    }}
                                >
                                    다음
                                </Button>
                            </Stack>
                        </FormContainer>
                        <InfoPreviewCard step={2} />
                    </Stack>
                </Stack>
            </Container>
        </FadeContent>
    )
}

export default CompanyInputPage2
