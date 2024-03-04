import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userVal = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userVal }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callthunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData());
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userVal);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callthunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
