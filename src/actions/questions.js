import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../ultis/api";
import { userAnswerQuestion, userCreateQuestion } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function createNewQuestion(question) {
  return {
    type: CREATE_NEW_QUESTION,
    question,
  };
}

export function answerQuestion(authedUser, questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    payload: { authedUser, questionId, answer },
  };
}

export function handleCreateQuestion(question, authendUserId) {
  return async (dispatch) => {
    dispatch(showLoading());
    let formattedQuestion = await saveQuestion(question);
    dispatch(createNewQuestion(formattedQuestion));
    dispatch(userCreateQuestion(formattedQuestion.id, authendUserId));
    dispatch(hideLoading());
    return formattedQuestion;
  };
}

export function handleAnswerQuestion(authedUser, questionId, answer) {
  return async (dispatch) => {
    dispatch(showLoading());
    await saveQuestionAnswer({
      authedUser,
      questionId,
      answer,
    });
    dispatch(answerQuestion(authedUser, questionId, answer));
    dispatch(userAnswerQuestion(authedUser, questionId, answer));
    dispatch(hideLoading());
    return questionId;
  };
}
