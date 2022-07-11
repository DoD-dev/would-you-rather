import React, { useState } from "react";
import { useSelector } from "react-redux";
import ViewPollCard from "../components/ViewPollCard";

const HomePage = () => {
  const questions = useSelector((state) => Object.values(state.questions));
  const authendUser = useSelector((state) => state.users[state.authendUser]);
  const [questionType, setQuestionType] = useState("Unanswered");

  let answeredQuestions = authendUser.answers;
  answeredQuestions = Object.entries(answeredQuestions).map(([key, value]) => ({
    id: key,
    option: value,
  }));

  answeredQuestions = answeredQuestions.map((answer) =>
    questions.find((question) => question.id === answer.id)
  );

  let unansweredQuestion = questions.filter(
    (question) =>
      answeredQuestions.filter((answer) => answer.id === question.id).length ===
      0
  );

  const [displayQuestions, setdisplayQuestion] = useState(unansweredQuestion);

  const handleGetQuestions = async (e, type) => {
    e.preventDefault();
    setQuestionType(type);
    if (type === "Unanswered") {
      setdisplayQuestion(unansweredQuestion);
    } else {
      setdisplayQuestion(answeredQuestions);
    }
  };

  return (
    <div className="center question-list">
      <div style={{ display: "flex" }}>
        <button
          className={questionType === "Unanswered" ? "tab selected-tab" : "tab"}
          onClick={(e) => handleGetQuestions(e, "Unanswered")}
        >
          Unanswered Questions
        </button>
        <div className="vl"></div>
        <button
          className={questionType !== "Unanswered" ? "tab selected-tab" : "tab"}
          onClick={(e) => handleGetQuestions(e, "Answered")}
        >
          Answered Questions
        </button>
      </div>
      <hr />
      <ul>
        {displayQuestions?.map((question) => (
          <li key={question.id}>
            <ViewPollCard question={question} questionType={questionType} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
