import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(addMessageActionCreator()) },
    updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;