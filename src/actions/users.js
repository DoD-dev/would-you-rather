export const GET_USERS = "GET_USERS";
export const USER_CREATE_QUESTION = "USER_CREATE_QUESTION";
export const USER_ANSWER_QUESTION = "USER_ANSWER_QUESTION";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function userCreateQuestion(questionId, authendUserId) {
  return {
    type: USER_CREATE_QUESTION,
    payload: { questionId: questionId, authendUserId: authendUserId },
  };
}

export function userAnswerQuestion(authendUser, questionId, answer) {
  return {
    type: USER_ANSWER_QUESTION,
    payload: { authendUser, questionId, answer },
  };
}
