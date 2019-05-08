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
    durationOfClassList: number[];
    durationOfWeek: string;
    durationOfWeekList: number[];
    classroom: string;
    className: string;
    dayOfWeek: string;
    teacherName: string;
    _dayOfWeek: number;
  }>;
  extra: Array<{ // 其他课程
    className: string;
    teacherName: string;
    durationOfWeek: string;
    durationOfWeekList: number[];
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
    r.data.schedule.forEach(c => {
      c._dayOfWeek = +c.dayOfWeek;
      c.classroom.startsWith('教') && (c.classroom = c.classroom.substring(1));
    });
  }
  return r;
};

export const contractSchedule = genTokenContract<undefined, ICOutputSchedule>(api.schedule, [postprocessSchedule]);
