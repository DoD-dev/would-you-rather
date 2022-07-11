export const SET_AUTHEND_USER = 'SET_AUTHEND_USER';

export function setAuthendUser (authendUserId) {
  return {
    type: SET_AUTHEND_USER,
    authendUserId
  }
}