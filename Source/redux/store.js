import {configureStore} from '@reduxjs/toolkit';
import modalslice from './slice/modalslice';
import userslice from './slice/userslice';
import locationslice from './slice/locationslice';
import calendarslice from './slice/calendarslice';

const store = configureStore({
  reducer: {
    modal: modalslice,
    user: userslice,
    location: locationslice,
    calendar:calendarslice
  },
});

export default store;
