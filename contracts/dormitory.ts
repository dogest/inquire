import api from '../configs/apis';
import { genTokenContract } from './helper';

/**
 * DormitoryInfo
 */

export interface ICOutputDormitoryInfo {
  campus: string; // 校区
  floor: string; // 公寓
  room: string; // 宿舍号
  rawFloor: string; // 可用于电量查询的 floor 格式
}

export const contractDormitoryInfo = genTokenContract<undefined, ICOutputDormitoryInfo>(api.dormitoryInfo);

/**
 * DormitoryHealth
 */

export type ICOutputDormitoryHealth = Array<{
  floor: string; // 公寓
  room: string; // 宿舍号
  week: string; // 周次
  date: string; // 时间
  score: number; // 分数
}>;

export const contractDormitoryHealth = genTokenContract<undefined, ICOutputDormitoryHealth>(api.dormitoryHealth);
