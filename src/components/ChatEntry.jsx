import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartClicked = () => {
    props.toggleLikes(props.id);
  };
  const heart = props.liked ? '❤️': '🤍';
  const localOrRemote = props.sender == props.local ?
    `chat-entry local ${props.localColor}` : `chat-entry remote ${props.remoteColor}`;
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}> </TimeStamp></p>
        <button className="like" onClick={heartClicked}>{heart}</button>
      </section>
    </div>
  );
};
ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body:PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  local: PropTypes.string,
  toggleLikes:PropTypes.func,
  localColor: PropTypes.string,
  remoteColor:PropTypes.string,
};

export default ChatEntry;
