import { z } from "zod";
import i18n from "@/src/config/lang/i18n";
import { LanguageTranslationsKey } from "@/src/config/lang/translations/translations_keys";
import { UserConsts } from "@/src/domain/user/consts";

const emailValidation = z
  .string()
  .nonempty(i18n.t(LanguageTranslationsKey.shared.validations.required))
  .email(
    i18n.t(
      LanguageTranslationsKey.domain.user.validations.email.errors.wrongFormat
    )
  );

const passwordValidation = z
  .string()
  .nonempty(i18n.t(LanguageTranslationsKey.shared.validations.required))
  .min(UserConsts.PASSWORD_MIN_LENGTH, {
    message: i18n.t(
      LanguageTranslationsKey.domain.user.validations.password.errors.minLength
    ),
  });

const matchPasswordValidation = (password: string) =>
  z.string().refine(
    (data) => {
      return data === password;
    },
    {
      message: i18n.t(
        LanguageTranslationsKey.domain.user.validations.password.errors.notMatch
      ),
    }
  );

export const UserModelValidations = {
  emailValidation,
  passwordValidation,
  matchPasswordValidation,
};
