import {
  haveFormat,
  isDefinied,
  isMoreThenMinLength,
  isNotEmpty,
} from './genericValidations';

const MIN_PASSWORD_LENGTH = 6;
const PASSWORD_ERRORS = {
  undefined: 'O campo "password" é obrigatório',
  empty: 'O campo "password" é obrigatório',
  minLength: `O "password" deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres`,
};

const isPasswordUndefined = (password: string) => {
  if (!isDefinied(password)) throw new Error(PASSWORD_ERRORS.undefined);
};

const isPasswordNotEmpty = (password: string) => {
  if (!isNotEmpty(password)) throw new Error(PASSWORD_ERRORS.empty);
};

const passwordHaveMinLength = (password: string) => {
  if (!isMoreThenMinLength(MIN_PASSWORD_LENGTH, password)) {
    throw new Error(PASSWORD_ERRORS.minLength);
  }
};

const isPasswordValid = [
  isPasswordUndefined,
  isPasswordNotEmpty,
  passwordHaveMinLength,
];

const EMAIL_FORMAT = new RegExp(
  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  'gm'
);
const EMAIL_ERRORS = {
  undefined: 'O campo "email" é obrigatório',
  empty: 'O campo "email" é obrigatório',
  emailFormat: 'O "email" deve ter o formato "email@email.com"',
};

const isEmailUndefined = (email: string) => {
  if (!isDefinied(email)) throw new Error(EMAIL_ERRORS.undefined);
};

const isEmailNotEmpty = (email: string) => {
  if (!isNotEmpty(email)) throw new Error(EMAIL_ERRORS.empty);
};

const emailHaveMinLength = (email: string) => {
  if (!haveFormat(EMAIL_FORMAT, email)) {
    throw new Error(EMAIL_ERRORS.emailFormat);
  }
};

const isEmailValid = [isEmailUndefined, isEmailNotEmpty];

const validRegister = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  isPasswordValid.forEach((f) => f(password));
  isEmailValid.forEach((f) => f(email));
};

export { validRegister };
