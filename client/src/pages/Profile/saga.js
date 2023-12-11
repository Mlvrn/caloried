import { editProfileApi } from '@domain/api';
import toast from 'react-hot-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { setUser } from '@pages/Diary/actions';
import { EDIT_PROFILE } from './constants';

export function* doEditProfile({ data, token, callback }) {
  yield put(setLoading(true));
  try {
    const response = yield call(editProfileApi, data, token);
    yield put(setUser(response.user));
    yield call(callback);
    toast.success(response.message);
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.message);
    } else {
      yield put(showPopup());
    }
  } finally {
    yield put(setLoading(false));
  }
}

export default function* editProfileSaga() {
  yield takeLatest(EDIT_PROFILE, doEditProfile);
}
