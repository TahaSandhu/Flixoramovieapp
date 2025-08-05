import { Controller } from "react-hook-form";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { TextInput as TextInputProps } from "./types";
import ValidationError from "../validationError";

const TextInput = ({
  name,
  control,
  label,
  disabled,
  type = "text",
  InputProps,
  multiline,
  rows,
  error,
  placeholder,
  sx,
}: TextInputProps) => {
  return (
    <Box>
      {label && (
        <InputLabel>
          <Typography variant="subtitle2" textTransform="capitalize">
            {label}
          </Typography>
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextField
            fullWidth
            type={type}
            disabled={disabled}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            InputProps={InputProps}
            rows={rows}
            multiline={multiline}
            placeholder={placeholder}
            error={Boolean(error)}
            sx={sx}
          />
        )}
      />
      {error && <ValidationError message={error} />}
    </Box>
  );
};

export default TextInput;
