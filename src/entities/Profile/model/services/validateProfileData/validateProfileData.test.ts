import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'Viktor',
    first: 'Ser',
    city: 'Moscow',
    currency: Currency.EUR,
};

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toBe([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toBe([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('absence country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toBe([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('several errors', async () => {
        const result = validateProfileData({});

        expect(result).toBe([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
