const isNull = (...value: any[]) => value.every((v) => v === null);

const isDefinied = (...value: any[]) =>
  value.every((v) => typeof v !== 'undefined');

const isNotEmpty = (...value: string[] | any[]) =>
  value.every((v: string | any[]) => v.length > 0);

const isMoreThenMinLength = (minLength: number, ...strings: string[]) =>
  strings.every((s) => s.length >= minLength);

const isMoreThenMinNumber = (minNumber: number, ...numbers: number[]) =>
  numbers.every((n) => n >= minNumber);

const isLessThenMaxNumber = (maxNumber: number, ...numbers: number[]) =>
  numbers.every((n) => n <= maxNumber);

const haveFormat = (regexFormat: RegExp, ...strings: string[]) =>
  strings.every((s) => regexFormat.test(s));

export {
  isNull,
  isDefinied,
  isNotEmpty,
  isMoreThenMinLength,
  isMoreThenMinNumber,
  isLessThenMaxNumber,
  haveFormat,
};
