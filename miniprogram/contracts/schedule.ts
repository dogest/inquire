import api from '../configs/apis';
import { genTokenContract } from './helper';

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
  }>;
  extra: Array<{ // 其他课程
    className: string;
    teacherName: string;
    durationOfWeek: string;
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

export const contractSchedule = genTokenContract<undefined, ICOutputSchedule>(api.schedule);
