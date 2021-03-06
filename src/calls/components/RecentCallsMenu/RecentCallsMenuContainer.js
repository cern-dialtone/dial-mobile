import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recentCallsActions } from 'dial-core';

import { withNavigation } from 'react-navigation';
import RecentCallsMenu from './RecentCallsMenu';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearRecentCalls: recentCallsActions.clearRecentCalls
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(RecentCallsMenu));
