import {combineReducers} from 'redux';
import user from './user/reducer';
import product from './product/reducer';
import color from './color/reducer';

const rootReducer = combineReducers({
  user,
  product,
  color,
});

export default rootReducer;