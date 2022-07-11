import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewPollCard = (props) => {
  const users = useSelector((state) => state.users);
  const author = users[props.question.author];

  return (
    <div className="center question-card">
      <div style={{ borderBottom: "solid #ccc 2px" }}>{author.name} asks:</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "block" }}>
          <img className="avatar" src={author.avatarURL} alt="User Avatar" />
        </div>
        <div className="vl"></div>
        <div style={{ width: "80%" }}>
          <h3>Would You Rather ...</h3>
          <div>
            <p>{props.question.optionOne.text}</p>
            <p>Or</p>
            <p>{props.question.optionTwo.text}</p>
          </div>
          <div className="submit-button">
            <Link to={`/question/${props.question.id}`}>
              <button>View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPollCard;
