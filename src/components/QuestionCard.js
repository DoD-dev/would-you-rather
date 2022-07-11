import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import NotFound from "../pages/NotFound";

const QuestionCard = () => {
  const questionId = useParams().questionId;
  const question = useSelector((state) => state.questions)[questionId];
  const users = useSelector((state) => state.users);
  const author = users[question?.author];
  const authendUser = useSelector((state) => state.users[state.authendUser]);
  const optionOneVotes = question?.optionOne.votes.length;
  const optionTwoVotes = question?.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = `${Math.round(
    (optionOneVotes / totalVotes) * 100
  )}%`;
  const optionTwoPercentage = `${Math.round(
    (optionTwoVotes / totalVotes) * 100
  )}%`;
  const [isAnswered, setIsAnswered] = useState(
    !(
      authendUser.answers[questionId] === null ||
      authendUser.answers[questionId] === undefined
    )
  );

  const dispatch = useDispatch();
  const answerQuestionHandle = (e) => {
    e.preventDefault();
    let answer = document.querySelector(
      'input[name="would-you-rather"]:checked'
    ).value;
    dispatch(handleAnswerQuestion(authendUser.id, questionId, answer)).then(
      () => setIsAnswered(true)
    );
  };

  return (question ?
    <div className="center question-card">
      <div style={{ borderBottom: "solid #ccc 2px" }}>User1 asks:</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "block", width: "20%" }}>
          <img className="avatar" src={author.avatarURL} alt="User Avatar" />
        </div>
        <div className="vl"></div>
        <div style={{ width: "80%" }}>
          {!isAnswered ? (
            <>
              <h3>Would You Rather ...</h3>
              <div className="option">
                <input
                  type="radio"
                  id="first-option"
                  value="optionOne"
                  name="would-you-rather"
                  defaultChecked
                />
                <label htmlFor="first-option">{question.optionOne.text}</label>{" "}
              </div>
              <div className="option">
                <input
                  type="radio"
                  id="second-option"
                  value="optionTwo"
                  name="would-you-rather"
                />
                <label htmlFor="second-option">{question.optionTwo.text}</label>
              </div>
              <div className="submit-button">
                <button
                  type="submit"
                  value="Submit"
                  onClick={answerQuestionHandle}
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <h3>Result:</h3>
              {authendUser.answers[questionId] === "optionOne" ? (
                <>
                  <div className="result">
                    <b>✓ </b>
                    <b>Would you rather {question.optionOne.text}</b>
                  </div>
                </>
              ) : (
                <div className="result">
                  <span> Would you rather {question.optionOne.text}</span>
                </div>
              )}

              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: optionOnePercentage }}
                ></div>{" "}
              </div>
              <div>{optionOnePercentage}</div>
              <div>
                {optionOneVotes} out of {totalVotes} votes
              </div>

              <hr />

              {authendUser.answers[questionId] === "optionTwo" ? (
                <>
                  <div className="result">
                    <b>✓ </b>
                    <b>Would you rather {question.optionTwo.text}</b>
                  </div>
                </>
              ) : (
                <div className="result">
                  <span> Would you rather {question.optionTwo.text}</span>
                </div>
              )}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: optionTwoPercentage,
                  }}
                ></div>{" "}
              </div>
              <div>{optionTwoPercentage}</div>
              <div>
                {optionTwoVotes} out of {totalVotes} votes
              </div>
            </>
          )}
        </div>
      </div>
    </div> : <NotFound/>
  );
};

export default QuestionCard;
