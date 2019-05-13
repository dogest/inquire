import api from '../configs/apis';
import { genTokenAndUserIdContract, genTokenContract } from './helper';

/**
 * CardBalance
 */

export interface ICOutputCardBalance {
  userid: string; // 用户名（学号）
  name: string;	// 用户姓名
  balance: string; // 校园卡余额
}

export const contractCardBalance = genTokenContract<undefined, ICOutputCardBalance>(api.cardBalance);

/**
 * CardConsume
 */

export type ICOutputCardConsume = Array<{
  time: string; // 消费时间(YYYY-mm-dd HH:MM)
  reason: string; // 消费原因
  amount: string; // 消费金额
  balance: string; // 消费后余额
  position: string; // 消费位置
  termName: string; // 消费终端
}>;

export const contractCardConsume = genTokenAndUserIdContract<undefined, ICOutputCardConsume>(api.cardConsume);

/**
 * CardSummary
 */

export interface ICInputCardSummary {
  start_date: string; // 开始时间（YYYYmmdd）
  end_date: string; // 结束时间
}

export type ICOutputCardSummary = Array<{
  id: string; // 未知含义
  reason: string; // 交易原因
  amount: string; // 交易金额
  ext1: string; // 未知用途，用于表示一个数字
  ext2: string; // 同上
  ext3: string; // 同上
}>;

export const contractCardSummary = genTokenAndUserIdContract<ICInputCardSummary, ICOutputCardSummary>(api.cardSummary);

