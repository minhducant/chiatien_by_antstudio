import {store} from '@stores/index';
import {setAppStatus, setAccessToken, setRefreshToken} from '@stores/action';

export const onLogout = async () => {
  store.dispatch(setAccessToken(''));
  store.dispatch(setRefreshToken(''));
  store.dispatch(setAppStatus(2));
};
