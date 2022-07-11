import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCreateQuestion } from "../actions/questions";

const NewQuestion = () => {
  const authendUser = useSelector((state) => state.authendUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNewQuestionHandle = async (e) => {
    e.preventDefault();
    const optionOne = document.getElementById("optionOne").value;
    const optionTwo = document.getElementById("optionTwo").value;
    let question = await dispatch(
      handleCreateQuestion(
        {
          author: authendUser,
          optionOneText: optionOne,
          optionTwoText: optionTwo,
        },
        authendUser
      )
    );
    navigate(`/question/${question.id}`);
  };
  return (
    <div className="center question-card">
      <h1 style={{ borderBottom: "solid #ccc 2px" }}>Create New Question</h1>
      <div>
        <div>Complete the question</div>
        <div>
          <h3>Would You Rather ...</h3>
          <div>
            <input
              id="optionOne"
              type="text"
              placeholder="Enter Option One Text Here"
              style={{ width: "80%" }}
            />
          </div>
          <div> ---------------Or--------------</div>
          <div>
            <input
              id="optionTwo"
              type="text"
              placeholder="Enter Option Two Text Here"
              style={{ width: "80%" }}
            />
          </div>
          <div className="submit-button" style={{ width: "100%" }}>
            <button
              type="submit"
              style={{ width: "80%" }}
              onClick={createNewQuestionHandle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
