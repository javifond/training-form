import {
    MIN_TEMPERATURE,
    MAX_TEMPERATURE,
    MIN_FEVER_TEMPERATURE,
} from './questionOne.constants';

export const inRange = (temp) => {
    return (temp - MIN_TEMPERATURE) * (temp - MAX_TEMPERATURE) <= 0;
};

export const hasFever = (temp) => temp >= MIN_FEVER_TEMPERATURE;
