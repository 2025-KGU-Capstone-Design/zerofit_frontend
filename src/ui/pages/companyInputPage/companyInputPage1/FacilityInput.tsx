import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { facilities } from "@/constants/facilities";

const FacilityInput = () => {
  return (
    <>
      <Typography variant="subtitle1" fontWeight="bold">
        보유설비 입력
      </Typography>
      <FormGroup
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {facilities.map((facility) => (
          <FormControlLabel
            key={facility}
            control={<Checkbox />}
            label={facility}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default FacilityInput;
