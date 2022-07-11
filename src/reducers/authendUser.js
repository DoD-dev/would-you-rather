import { SET_AUTHEND_USER } from "../actions/authendUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHEND_USER:
      return action.authendUserId;
    default:
      return state;
  }
}