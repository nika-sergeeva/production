import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from '../../selectors/getLoginState/getLoginState';

describe('loginByUsername', () => {
    test('returns a user', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'mimi',
                },
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({ id: '1', username: 'mimi' });
    });
});
