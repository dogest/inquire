import * as moment from '../libs/moment/index';

export function formatTime(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

const formatNumber = (n: number) => {
  const str = n.toString();
  return str[1] ? str : '0' + str;
};

export function getCurrentMoment() {
  return moment().utcOffset(8);
}

export function getRandomLoadingText() {
  const loadingTexts = ['请稍候', '等待服务器', '一等', '努力请求中', '拼命请求中', '抽空请求中'];
  return loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
}
