import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getUserInfo} from '@stores/Config/store';

export const AsyncApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUserInfo());
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [dispatch]);
  return null;
};
