import api from '../configs/apis';
import { genTokenContract, IPostprocessFunction } from './helper';

/**
 * Schedule
 */

export interface ICOutputSchedule {
  userid: string; // 用户名（学号）
  name: string; // 用户姓名
  schedule: Array<{ // 课程信息
    durationOfClass: string;
    durationOfWeek: string;
    classroom: string;
    className: string;
    dayOfWeek: string;
    teacherName: string;
    _durationOfClass: number[];
    _durationOfWeek: number[];
    _dayOfWeek: number;
  }>;
  extra: Array<{ // 其他课程
    className: string;
    teacherName: string;
    durationOfWeek: string;
    _durationOfWeek: number[];
  }>;
  note: Array<{ // 备注
    content: string;
  }>;
  separator: Array<{ // 课程名中符号的含义
    key: string;
    value: string;
  }>;
  year: string; // 当前学年
  semester: string; // 当前学期
  currentWeek: number; // 当前教学周
}

const postprocessSchedule: IPostprocessFunction<ICOutputSchedule> = (ret) => {
  const r = ret;
  if (!r.error) {
    [r.data.schedule, r.data.extra].forEach(s => s.forEach(c => {
      const duration = c.durationOfWeek.split('-').map(x => +x);
      while (duration.length < 2) {
        duration.push(duration[0]);
      }
      c._durationOfWeek = duration;
    }));
    r.data.schedule.forEach(c => {
      c._dayOfWeek = +c.dayOfWeek;
      const duration = c.durationOfClass.split('-').map(x => +x);
      while (duration.length < 2) {
        duration.push(duration[0]);
      }
      c._durationOfClass = duration;
    });
  }
  return r;
};

export const contractSchedule = genTokenContract<undefined, ICOutputSchedule>(api.schedule, [postprocessSchedule]);
