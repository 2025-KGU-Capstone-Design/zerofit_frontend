import { Stack, Typography } from "@mui/material";

interface StepHeaderProps {
  title: string;
  step: number;
}

function StepHeader({ title, step }: StepHeaderProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1">
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          Step {step}
        </Typography>{" "}
        / 3
      </Typography>
    </Stack>
  );
}

export default StepHeader;
