import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  language: 'vi',
  numNotify: 0,
  appStatus: 0,
  isLoading: false,
  firebaseToken: '',
  isFirstUse: true,
};

const store = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
      return state;
    },
    setNumNotify(state, action) {
      state.numNotify = action.payload;
      return state;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
      return state;
    },
    setFirebaseToken(state, action) {
      state.firebaseToken = action.payload;
      return state;
    },
    setIsFirstUse(state, action) {
      state.isFirstUse = action.payload;
      return state;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
      return state;
    },
    setAppStatus(state, action) {
      state.appStatus = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      });
  },
});

const getUserInfo: any = createAsyncThunk('getListGroup', async () => {
  // return await AuthApi.getUserInfo({});
});

export const {
  setUserInfo,
  setLanguage,
  setNumNotify,
  setAppStatus,
  setIsLoading,
  setIsFirstUse,
  setFirebaseToken,
} = store.actions;

export {getUserInfo};

export const stores = {
  reducer: store.reducer,
  ...store.actions,
};
