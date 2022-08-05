import {combinedReducers} from 'redux';
import authUser from './authUser';
import users from './users';
import tweets from './tweets';

export default combinedReducers({
    authUser,
    users,
    tweets
})