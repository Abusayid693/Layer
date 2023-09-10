import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class Service {
  _axios: AxiosInstance;
  constructor() {
    this._axios = this.initialise();
  }
  initialise = () => {
    let headers = {
    //   csrf: 'token',
    };

    let service = axios.create({
      baseURL: 'http://10.0.2.2:8000/',
    //   xsrfCookieName: 'XSRF-TOKEN',
    //   xsrfHeaderName: 'X-XSRF-TOKEN',
      headers: headers,
    });

    service.interceptors.request.use(
      this.handleAuthorization,
      this.handleError,
    );

    service.interceptors.response.use(
      this.handleSuccess,
      // this.handleAuthorizationError,
      this.handleError,
    );

    return service;
  };

  handleAuthorization = (config: any) => {
    const token = 'dds';

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    }
    return config;
  };

  handleSuccess = (response: AxiosResponse) => {
    return Promise.resolve(response);
  };

  handleError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  get(path: string, callback?: () => {}, params?: Record<string, string>) {
    return this._axios({
      method: 'get',
      url: path,
      responseType: 'json',
      //   cancelToken: CANCEL_TOKEN_SOURCE.token
    });
  }

  delete(path: string, callback?: () => {}, params?: Record<string, string>) {
    return this._axios({
      method: 'delete',
      url: path,
      responseType: 'json',
      //   cancelToken: CANCEL_TOKEN_SOURCE.token
    });
  }

  put(path: string, payload: any, callback?: () => {}) {
    return this._axios({
      method: 'put',
      url: path,
      responseType: 'json',
      data: payload,
      //   cancelToken: CANCEL_TOKEN_SOURCE.token
    });
  }

  post(path: string, payload: any, callback?: () => {}) {
    return this._axios({
      method: 'post',
      url: path,
      responseType: 'json',
      data: payload,
      //   cancelToken: CANCEL_TOKEN_SOURCE.token
    });
  }
}

export default Service