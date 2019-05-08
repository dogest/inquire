import * as moment from '../libs/moment/index';
import { getCurrentMoment } from './util';
import scheduleConfig from '../configs/schedule';
import { ICOutputSchedule } from '../contracts/schedule';

function debugFormatMoment(m: moment.Moment) {
  return m.format('YYYY-MM-DD HH:mm:ss.SSS ddd (E) Z');
}

/**
 * 获取指定课程时间的 moment 对象
 * @param {number} weekday 星期几（1-7）
 * @param {string} classTime（HH:mm）
 * @returns {moment.Moment}
 */
export function getClassMoment(weekday: number, classTime: string) {
  const classMoment = getCurrentMoment();
  classMoment.isoWeekday(weekday);
  const [h, m] = classTime.split(':');
  classMoment.hour(+h);
  classMoment.minute(+m);
  classMoment.second(0);
  classMoment.millisecond(0);
  return classMoment;
}

/**
 * 判断课程在指定周是否要上课
 * @param {ICOutputSchedule["schedule"][0]["durationOfWeekList"]} durationOfWeekList
 * @param {ICOutputSchedule["currentWeek"]} currentWeek
 * @returns {boolean}
 */
export function isClassAvailableInSomeWeek(durationOfWeekList: ICOutputSchedule['schedule'][0]['durationOfWeekList'], currentWeek: ICOutputSchedule['currentWeek']) {
  return !!~durationOfWeekList.indexOf(currentWeek);
}

/**
 * 查找下节将要上的课（计算的课程时间范围：现在到当前周的下一个周日）
 * @param {ICOutputSchedule["currentWeek"]} currentWeek
 * @param {ICOutputSchedule["schedule"]} schedule
 * @returns {{dayOfWeek: string; teacherName: string; beginMoment: moment.Moment; durationOfClassList: number[]; durationOfWeekList: number[]; durationOfWeek: string; classroom: string; className: string; currentWeek: number; durationOfClass: string; _dayOfWeek: number} | null}
 */
export function findNextPendingClass(currentWeek: ICOutputSchedule['currentWeek'], schedule: ICOutputSchedule['schedule']) {
  const scheduleWithBeginMoment = schedule.map(s => ({
    ...s,
    currentWeek,
    beginMoment: getClassMoment(s._dayOfWeek, scheduleConfig.classTime[s.durationOfClassList[0] - 1][0]),
  }));
  const scheduleWithBeginMomentNextWeek = scheduleWithBeginMoment.map(s => ({
    ...s,
    currentWeek: currentWeek + 1,
    beginMoment: moment(s.beginMoment).add(7, 'd'),
  }));
  const scheduleD2 = [...scheduleWithBeginMoment, ...scheduleWithBeginMomentNextWeek];
  for (const s of scheduleD2) {
    // 判断教学周
    if (!isClassAvailableInSomeWeek(s.durationOfWeekList, s.currentWeek)) {
      continue;
    }
    if (getCurrentMoment().isBefore(s.beginMoment)) {
      console.log('findNextPendingClass', debugFormatMoment(s.beginMoment));
      return s;
    }
  }
  return null;
}
