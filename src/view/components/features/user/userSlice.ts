import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../../../../store/store';
import {mockUser} from './mockUser';

type User = typeof mockUser;

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get<User>(
    'https://jsonplaceholder.typicode.com/users/1'
  );
  return response.data;
});

const initialState: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
  loadingStatus: 'pending',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loadingStatus = 'pending';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state = action.payload;
      state.loadingStatus = 'fulfilled';
    });
  },
});

export const selectUser = (state: RootState) => state.user;
export const selectUserFetchStatus = (state: RootState) =>
  state.user.loadingStatus;

export default userSlice.reducer;
