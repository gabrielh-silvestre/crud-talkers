import {
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
