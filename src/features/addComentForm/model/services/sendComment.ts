import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<
Comment,
void,
ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (authData, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(addCommentFormActions.setText(''));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
