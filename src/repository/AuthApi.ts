import {ApiUrl} from '@configs/ApiUrl';
import {client} from '@configs/AxiosConfig';
import {AppApiTypeRequest} from '@repository/TypeRequest';

export class AuthApi {
  static async LoginFacebook(params: AppApiTypeRequest.LoginFacebook) {
    const response = await client.post(ApiUrl.Auth.login_facebook, params);
    return response;
  }
  static async LoginGoogle(params: AppApiTypeRequest.LoginGoogle) {
    const response = await client.post(ApiUrl.Auth.login_google, params);
    return response;
  }
}
