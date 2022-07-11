import {
  GET_USERS,
  USER_CREATE_QUESTION,
  USER_ANSWER_QUESTION,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case USER_CREATE_QUESTION:
      const { questionId, authendUserId } = action.payload;
      console.log(state);
      console.log(state[authendUserId]);
      return {
        ...state,
        [authendUserId]: {
          ...state[authendUserId],
          questions: state[authendUserId].questions.concat([questionId]),
        },
      };
    case USER_ANSWER_QUESTION:
      return {
        ...state,
        [action.payload.authendUser]: {
          ...state[action.payload.authendUser],
          answers: {
            ...state[action.payload.authendUser].answers,
            [action.payload.questionId]: action.payload.answer,
          },
        },
      };
    default:
      return state;
  }
}
