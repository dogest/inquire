import api from '../configs/apis';
import { genNormalContract, genTokenContract } from './helper';

/**
 * UserToken
 */

export interface ICInputUserToken {
  username: string; // 用户名（学号）
  password: string; // 密码
}

export interface ICOutputUserToken {
  token: string;
}

export const contractUserToken = genNormalContract<ICInputUserToken, ICOutputUserToken>(api.userToken);

/**
 * UserTokenExist
 */

export interface ICInputUserTokenExist {
  token: string;
}

export const contractUserTokenExist = genNormalContract<ICInputUserTokenExist, undefined>(api.userTokenExist);

/**
 * UserInfo
 */

export interface ICOutputUserInfo {
  name: string;	// 用户的姓名
  userid: string; // 用户的学号
  department: string; // 用户的部门/学院
}

export const contractUserInfo = genTokenContract<undefined, ICOutputUserInfo>(api.userInfo);
