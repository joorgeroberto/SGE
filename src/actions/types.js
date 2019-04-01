//Arquivo para padronizar o nome das variáveis e evitar erros de digitação.
//OBS: Não usa export default pq são vários exports. Se fosse um só usaria o default.

//Auth types
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

//Register types
export const UPDATE_USER = 'user_update';
export const CREATE_USER = 'create_user';
export const CREATE_USER_SUCCESS = 'create_user_success';
export const CREATE_USER_FAIL = 'create_user_fail';

//Gallery types
export const IMAGE_NAME = 'image_name';

//AddPlace types
export const DATE_TIME = 'date_time';
export const PLACE_UPDATE = 'place_update';
export const CREATE_PLACE = 'create_place';
export const CREATE_PLACE_SUCCESS = 'create_place_success';
export const CREATE_PLACE_FAIL = 'create_place_fail';
export const CLEAN_SUCCESS_FAIL = 'clean_success_fail';
export const FETCH_PLACE_SUCCESS = 'fetch_place_success';

//AddResource types
export const RESOURCE_UPDATE = 'resource_update';
export const CREATE_RESOURCE_SUCCESS = 'create_resource_success';
export const CREATE_RESOURCE_FAIL = 'create_resource_fail';
export const CREATE_RESOURCE = 'create_resource';

//Event types
export const EVENT_PROPS_UPDATE = 'event_props_update';
export const EVENT_UPDATE = 'event_update';
export const SWITCH_RESOURCE_CHANGE = 'switch_resource_change';
export const FETCH_RESOURCE_SUCCESS = 'fetch_resource_success';
export const CREATE_EVENT = 'create_place';
export const CREATE_EVENT_SUCCESS = 'create_place_success';
export const CREATE_EVENT_FAIL = 'create_place_fail';
export const CLEAN_EVENT_SUCCESS_FAIL = 'clean_event_success_fail';

export const CURRENT_USER_LEVEL = 'current_user_level';