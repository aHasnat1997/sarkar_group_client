import React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext
} from "react-hook-form";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Select,
  InputLabel,
  SelectProps
} from "@mui/material";
import { DatePicker, DatePickerProps, TimePicker, TimePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Visibility, VisibilityOff } from '@mui/icons-material';

/**
 * Context value for a form field.
 * @template TFieldValues - The type of field values in the form.
 * @template TName - The type of the field name.
 */
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

/**
 * Context for a form field.
 */
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

/**
 * Component for a form field.
 * @template TFieldValues - The type of field values in the form.
 * @template TName - The type of the field name.
 * @param {ControllerProps<TFieldValues, TName>} props - Props for the form field component.
 * @returns {JSX.Element} The form field component.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  render,
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        render={render}
        {...props}
      />
    </FormFieldContext.Provider>
  );
};

/**
 * Hook to get form field information.
 * @returns {FormFieldContextValue} The form field context value.
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

/**
 * Context value for a form item.
 */
type FormItemContextValue = {
  id: string;
};

/**
 * Context for a form item.
 */
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

/**
 * Component for a form item.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the form item component.
 * @returns {JSX.Element} The form item component.
 */
const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <Box ref={ref} className={className} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

/**
 * Component for a form label.
 * @param {React.ComponentPropsWithoutRef<typeof Typography>} props - Props for the form label component.
 * @returns {JSX.Element} The form label component.
 */
const FormLabel = React.forwardRef<
  React.ElementRef<typeof Typography>,
  React.ComponentPropsWithoutRef<typeof Typography>
>(({ className, ...props }, ref) => {
  const { error } = useFormField();

  return (
    <Typography
      ref={ref}
      className={className}
      color={error ? "error" : "textPrimary"}
      {...props}
    >
      {props.children}
    </Typography>
  );
});
FormLabel.displayName = "FormLabel";

/**
 * Component for a form control.
 * @param {React.ComponentPropsWithoutRef<typeof TextField>} props - Props for the form control component.
 * @returns {JSX.Element} The form control component.
 */
const FormInput = React.forwardRef<
  React.ElementRef<typeof TextField>,
  React.ComponentPropsWithoutRef<typeof TextField>
>(({ ...props }, ref) => {
  const { error, name } = useFormField();

  return (
    <TextField
      ref={ref}
      id={name}
      error={!!error}
      {...props}
    />
  );
});
FormInput.displayName = "FormInput";

/**
 * Component for a form control password.
 * @param {React.ComponentPropsWithoutRef<typeof TextField>} props - Props for the form control component.
 * @returns {JSX.Element} The form control component.
 */
const FormInputPassword = React.forwardRef<
  React.ElementRef<typeof OutlinedInput>,
  Omit<React.ComponentPropsWithoutRef<typeof OutlinedInput>, 'margin'>
>(({ label, ...props }, ref) => {
  const { error, name } = useFormField();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name} className="bg-white"><span className="px-1">{label}</span></InputLabel>
      <OutlinedInput
        id={name}
        type={showPassword ? "text" : "password"}
        ref={ref}
        error={!!error}
        margin="none"
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={() => setShowPassword((show) => !show)}
              edge="end"
              sx={{
                border: 'none'
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
});
FormInputPassword.displayName = "FormInputPassword";


/**
 * Component for a form message.
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props for the form message component.
 * @returns {JSX.Element | null} The form message component or null if no message is present.
 */
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error } = useFormField();
  const message = error?.message ? String(error.message) : children;

  if (!message) {
    return null;
  }

  return (
    <Typography
      ref={ref}
      color="error"
      className={className}
      {...props}
    >
      {message}
    </Typography>
  );
});
FormMessage.displayName = "FormMessage";

/**
 * Component for a controlled MUI Select input.
 * @param {React.ComponentPropsWithoutRef<typeof Select>} props - Props for the Select component.
 * @returns {JSX.Element} The Select component.
 */
const FormSelect = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const { name, error } = useFormField();

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id={`${name}-label`}>{props.label}</InputLabel>
      <Select ref={ref} labelId={`${name}-label`} id={name} {...props}>
        {props.children}
      </Select>
    </FormControl>
  );
});
FormSelect.displayName = "FormSelect";

/**
 * Component for a controlled MUI Date Picker.
 * @param {React.ComponentPropsWithoutRef<typeof DatePicker>} props - Props for the DatePicker component.
 * @returns {JSX.Element} The Date Picker component.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormDatePicker = React.forwardRef<HTMLDivElement, DatePickerProps<any>>(
  (props, ref) => {
    const { name, error } = useFormField();

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          ref={ref}
          {...props}
          slotProps={{
            textField: { id: name, error: !!error, helperText: error?.message },
          }}
        />
      </LocalizationProvider>
    );
  }
);
FormDatePicker.displayName = "FormDatePicker";

/**
 * Component for a controlled MUI Time Picker.
 * @param {React.ComponentPropsWithoutRef<typeof TimePicker>} props - Props for the TimePicker component.
 * @returns {JSX.Element} The Time Picker component.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormTimePicker = React.forwardRef<HTMLDivElement, TimePickerProps<any>>(
  (props, ref) => {
    const { name, error } = useFormField();

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          ref={ref}
          {...props}
          slotProps={{
            textField: { id: name, error: !!error, helperText: error?.message },
          }}
        />
      </LocalizationProvider>
    );
  }
);
FormTimePicker.displayName = "FormTimePicker";

export {
  useFormField,
  FormProvider as Form,
  FormField,
  FormItem,
  FormLabel,
  FormInputPassword,
  FormInput,
  FormMessage,
  FormSelect,
  FormDatePicker,
  FormTimePicker
};

