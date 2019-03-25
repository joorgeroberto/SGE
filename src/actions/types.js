//Arquivo para padronizar o nome das variáveis e evitar erros de digitação.
//OBS: Não usa export default pq são vários exports. Se fosse um só usaria o default.

//Auth Actions and Reducers
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

//Register Actions and Reducers
export const UPDATE_USER = 'user_update';
export const CREATE_USER = 'create_user';
export const CREATE_USER_SUCCESS = 'create_user_success';
export const CREATE_USER_FAIL = 'create_user_fail';

export const EMPLOYEE_UPDATE = 'employee_update';
export const EMPLOYEE_CREATE = 'employee_create';
export const EMPLOYEES_FETCH_SUCCESS = 'employees_fetch_success';
export const EMPLOYEE_SAVE_SUCCESS = 'employee_save_success';
