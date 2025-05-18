import {useCallback} from 'react'
import {Typography, FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import {facilities} from '@/constants/facilities'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const MAX_SELECTION = 5

const FacilityInput = () => {
    const targetFacilities = useCompanyInputStore(
        (state) => state.targetFacilities
    )
    const setTargetFacilities = useCompanyInputStore(
        (state) => state.setTargetFacilities
    )

    const handleCheckboxChange = useCallback(
        (facility: string) => {
            const isSelected = targetFacilities.includes(facility)

            if (!isSelected && targetFacilities.length >= MAX_SELECTION) {
                return
            }

            setTargetFacilities(
                isSelected
                    ? targetFacilities.filter((f) => f !== facility)
                    : [...targetFacilities, facility]
            )
        },
        [targetFacilities, setTargetFacilities]
    )

    return (
        <>
            <Typography variant='subtitle1' fontWeight='bold'>
                대상설비 입력 (최대 {MAX_SELECTION}개)
            </Typography>
            <FormGroup
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                {facilities.map((facility) => {
                    const isChecked = targetFacilities.includes(facility)
                    const isDisabled =
                        !isChecked && targetFacilities.length >= MAX_SELECTION

                    return (
                        <FormControlLabel
                            key={facility}
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    disabled={isDisabled}
                                    onChange={() =>
                                        handleCheckboxChange(facility)
                                    }
                                />
                            }
                            label={facility}
                        />
                    )
                })}
            </FormGroup>
        </>
    )
}

export default FacilityInput
