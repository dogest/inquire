import api from '../configs/apis';
import pages from '../configs/pages';
import { EnumReport } from '../enums/index';
import storage from './storage';

const reqTimeout = 30000;
let lastLogin: number | null = null;

export interface IWXRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string; // '/' 开头的 api.base 之后的 URL
  data?: IAnyObject;
  header?: IAnyObject;
  loadingText?: string; // 加载中的文案，值为有效字符串时显示
  autoError?: 'none' | 'toast' | 'dialog'; // 错误时的自动提示，可选 toast 或 dialog 模式。默认为 dialog
}

export type IRequestOptions = Pick<IWXRequestOptions, 'header' | 'loadingText' | 'autoError'>;

/**
 * Base request
 * @param {IWXRequestOptions} options
 * @returns {Promise<IAnyObject>}
 */
async function wxRequest(options: IWXRequestOptions): Promise<IApiResponse<IApiResponseDataType>> {
  const header = {
    ...(options.header || {}),
    'Content-Type': 'application/json',
    'X-Referer': 'Inquire',
  };
  const data = options.data || {};
  options.loadingText && wx.showLoading({
    title: options.loadingText,
  });
  const autoError = options.autoError || 'dialog';
  let userId = '';
  try {
    userId = data.userid || await storage.getUserId() || '';
  } catch (e) {
    console.error(e);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: api.base + options.url + '?userid=' + encodeURIComponent(userId),
      method: options.method,
      data,
      header,
      success: (res) => {
        if (res.statusCode >= 500) {
          console.error('req fail with code', res.statusCode, res.data);
          wx.reportMonitor(EnumReport.resp5xx, 1);
          autoError === 'toast' && wx.showToast({
            title: '服务器错误，请稍后再试',
            icon: 'none',
            duration: 2000,
          });
          autoError === 'dialog' && wx.showModal({
            title: '服务器错误',
            content: '请稍后再试',
            showCancel: false,
          });
          reject(res);
        } else {
          console.log('req success with code', res.statusCode, res.data);
          res.statusCode === 403 && wx.reportMonitor(EnumReport.resp403, 1);
          const d = res.data as IApiResponse<IApiResponseDataType>;
          if (d.error) {
            autoError === 'toast' && wx.showToast({
              title: d.message,
              icon: 'none',
              duration: 2000,
            });
            autoError === 'dialog' && wx.showModal({
              title: '',
              content: d.message,
              showCancel: false,
            });
          }
          if (res.statusCode === 401 &&
            !options.url.startsWith(api.userToken) &&
            (!lastLogin || (lastLogin && Date.now() - lastLogin > reqTimeout * 2))) {
            console.log('get last login', lastLogin);
            lastLogin = Date.now();
            console.log('set last login', lastLogin);
            try {
              const currentPage = getCurrentPages();
              const currentRoute = currentPage[currentPage.length - 1].route || '';
              if (!~pages.login.indexOf(currentRoute)) {
                console.log('redirect to re-login', currentRoute);
                wx.redirectTo({ url: pages.login });
              }
            } catch (e) {
              console.error(e);
            }
          }
          resolve(d);
        }
      },
      fail: (err) => {
        console.error('req fail', err);
        autoError === 'toast' && wx.showToast({
          title: '未知错误，请稍后再试',
          icon: 'none',
          duration: 2000,
        });
        autoError === 'dialog' && wx.showModal({
          title: '未知错误',
          content: '请稍后再试',
          showCancel: false,
        });
        reject(err);
      },
      complete: () => {
        options.loadingText && wx.hideLoading({});
      },
    });
  });
}

function get(url: string, options?: IRequestOptions) {
  return wxRequest({
    ...options,
    method: 'GET',
    url,
  });
}

function post(url: string, data?: IAnyObject, options?: IRequestOptions) {
  return wxRequest({
    ...options,
    method: 'POST',
    url,
    data,
  });
}

function put(url: string, data?: IAnyObject, options?: IRequestOptions) {
  return wxRequest({
    ...options,
    method: 'PUT',
    url,
    data,
  });
}

function del(url: string, data?: IAnyObject, options?: IRequestOptions) {
  return wxRequest({
    ...options,
    method: 'DELETE',
    url,
    data,
  });
}

const request = {
  wxRequest,
  get,
  post,
  put,
  del,
};

export default request;
