import { Container, Stack, Button } from "@mui/material";
import FormContainer from "../common/FormContainer";
import IndustryInput from "@/ui/pages/companyInputPage/companyInputPage1/IndustryInput";
import FacilityInput from "@/ui/pages/companyInputPage/companyInputPage1/FacilityInput";
import StepHeader from "../common/StepHeader";
import InfoPreviewCard from "../common/InfoPreviewCard";

const CompanyInputPage1 = () => {
  return (
    <Container sx={{ mt: 14 }}>
      <Stack spacing={4}>
        <StepHeader title="산업군 및 보유설비 선택" step={1} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <FormContainer>
            <IndustryInput />
            <FacilityInput />
            <Stack direction="row" justifyContent="flex-end">
              <Button variant="contained" color="primary" size="large">
                다음
              </Button>
            </Stack>
          </FormContainer>
          <InfoPreviewCard />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CompanyInputPage1;
