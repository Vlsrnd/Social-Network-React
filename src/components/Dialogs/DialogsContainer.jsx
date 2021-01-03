import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}


const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;