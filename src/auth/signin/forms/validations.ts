import { UserModelValidations } from "@/src/domain/user/validations";
import z from "zod";

const { emailValidation, passwordValidation } = UserModelValidations;

export const LoginFormSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});
