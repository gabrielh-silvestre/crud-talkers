import {
  isBetweenMaxAndMinNumber,
  isDefinied,
  isMoreThenMinLength,
  isMoreThenMinNumber,
} from './genericValidations';

interface ITalker {
  name: string;
  age: number;
  talk: ITalk;
}

interface ITalk {
  watchedAt?: string;
  rate?: number;
}

const TALKER_ERRORS = {
  name: {
    isDefinied: 'O campo "name" é obrigatório',
    isMoreThenMinLength: 'O campo "name" deve ter pelo menos 3 caracteres',
  },
  age: {
    isDefinied: 'O campo "age" é obrigatório',
    isMoreThenMinNumber: 'A pessoa palestrante deve ser maior de idade',
  },
  talk: {
    isDefinied:
      'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    betweenMinAndMax: 'O campo "rate" deve ser um inteiro de 1 à 5',
    dateFormat: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  },
};

const isTalkerNameValid = (name: string) => {
  const MIN_TALKER_NAME_LENGTH = 3;
  const nameErrors = TALKER_ERRORS.name;

  switch (false) {
    case isDefinied(name):
      throw new Error(nameErrors.isDefinied);
    case isMoreThenMinLength(MIN_TALKER_NAME_LENGTH, name):
      throw new Error(nameErrors.isMoreThenMinLength);
    default:
      return null;
  }
};

const isTalkerAgeValid = (age: number) => {
  const MIN_TALKER_AGE = 18;
  const ageErrors = TALKER_ERRORS.age;

  switch (false) {
    case isDefinied(age):
      throw new Error(ageErrors.isDefinied);
    case isMoreThenMinNumber(MIN_TALKER_AGE, age):
      throw new Error(ageErrors.isMoreThenMinNumber);
    default:
      return null;
  }
};

const isTalkerTalkValid = (talk: ITalk) => {
  const MIN_TALK_RATE = 1;
  const MAX_TALK_RATE = 5;
  const WATCHED_AT_REGEX = new RegExp(
    /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/
  );

  const talkErrors = TALKER_ERRORS.talk;

  switch (false) {
    case isDefinied(talk):
      throw new Error(talkErrors.isDefinied);
    case isDefinied(talk.watchedAt):
      throw new Error(talkErrors.isDefinied);
    case isDefinied(talk.rate):
      throw new Error(talkErrors.isDefinied);
    case isBetweenMaxAndMinNumber(
      MAX_TALK_RATE,
      MIN_TALK_RATE,
      talk.rate as number
    ):
      throw new Error(talkErrors.betweenMinAndMax);
    case WATCHED_AT_REGEX.test(talk.watchedAt as string):
      throw new Error(talkErrors.dateFormat);
    default:
      null;
  }
};

const isTalkerValid = (talker: ITalker) => {
  isTalkerNameValid(talker.name);
  isTalkerAgeValid(talker.age);
  isTalkerTalkValid(talker.talk);
};

export { isTalkerValid };
