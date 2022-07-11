const ScoreCard = (props) => {
  return (
    <div className="center question-card">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "block" }}>
          {props.top < 3 ? <div>Top {props.top + 1}</div> : null}
          <img
            className="avatar"
            src={props.user.avatarURL}
            alt="User Avatar"
          />
        </div>
        <div className="vl"></div>
        <div>
          <h3>{props.user.name}</h3>
          <div style={{ padding: "0 45px 0 45px" }}>
            <p>
              Answered questions : <span> {props.user.answers} </span>
            </p>
          </div>
          <div>
            <p>
              Created questions : <span> {props.user.questions} </span>
            </p>
          </div>
        </div>
        <div className="vl"></div>
        <div style={{ padding: "0 45px 0 45px" }}>
          <div>
            <h5>Score</h5>
          </div>
          <div>{props.user.answers + props.user.questions}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
