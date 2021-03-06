import { combineReducers } from 'redux';
import {
  authReducer,
  meReducer,
  callsReducer,
  callForwardingReducer,
  recentCallsReducer,
  doNotDisturbReducer,
  profileReducer,
  contactsReducer
} from 'dial-core';

import settingsReducer from './src/settings/reducers/app-state';
import pushDevicesReducer from './src/push_notifications/reducers/push_notifications';

export default combineReducers({
  auth: authReducer,
  user: meReducer,
  callForwarding: callForwardingReducer,
  call: callsReducer.callReducer,
  connection: callsReducer.connectionReducer,
  recent: recentCallsReducer,
  search: callsReducer.searchReducer,
  dialpad: callsReducer.dialpadReducer,
  numbers: callsReducer.numbersReducer,
  status: doNotDisturbReducer,
  profile: profileReducer,
  contacts: contactsReducer,
  settings: settingsReducer,
  pushDevices: pushDevicesReducer
});
