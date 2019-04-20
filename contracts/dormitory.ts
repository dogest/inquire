import api from '../configs/apis';
import { genNormalContract, genTokenContract } from './helper';

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

/**
 * DormitoryEnergy
 */

export interface ICInputDormitoryEnergy {
  floor: string; // 公寓号（可用列表见公寓列表）
  room: string; // 房间号
}

export interface ICOutputDormitoryEnergy {
  room: string; // 请求的房间
  date: string; // 上次更新时间(YYYY-mm-dd HH:MM:SS)
  energy: string; // 剩余电量（结果不能保证为数字类型）
  lower: string; // 预计可用下限
  upper: string; // 预计可用上限
  status: string; // 当前使用状态（如：正常用电）
}

export const contractDormitoryEnergy = genNormalContract<ICInputDormitoryEnergy, ICOutputDormitoryEnergy>(api.dormitoryEnergy);
