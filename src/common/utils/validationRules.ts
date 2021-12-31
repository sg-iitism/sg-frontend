import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!(values.email).includes("iitism.ac.in")) {
      errors.email = "Please use college ID only and correct email";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
