import api from '../configs/apis';
import { genTokenAndUserIdContract } from './helper';

/**
 * Score
 */

export interface ICOutputScore {
  grade: number; // 绩点（仅供参考）
  scores: Array<{ // 成绩详情
    class: string;
    college: string;
    courseCategory: string;
    courseCode: string;
    courseId: string;
    courseName: string;
    courseNature: string;
    courseType: string;
    grade: string;
    major: string;
    name: string;
    point: string;
    schoolYear: string;
    score: string;
    semester: string;
    sex: string;
    state: string;
    teacher: string;
    teacherCollege: string;
    userid: string;
    year: string;
  }>;
  message: string; // 提示信息（告诉你绩点仅供参考）
}

export const contractScore = genTokenAndUserIdContract<undefined, ICOutputScore>(api.score);
