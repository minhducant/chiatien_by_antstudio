import {combineReducers} from '@reduxjs/toolkit';

import {stores as Config} from './Config/store';
import {stores as Authentication} from './Authentication/store';

const rootReducer = combineReducers({
  Config: Config.reducer,
  Authentication: Authentication.reducer,
});

export default rootReducer;
