import {
  CREATE_NEW_QUESTION,
  ANSWER_QUESTION,
  GET_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case CREATE_NEW_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ANSWER_QUESTION:
      const { authendUser, questionId, answer } = action.payload;
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([authendUser]),
          },
        },
      };
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
