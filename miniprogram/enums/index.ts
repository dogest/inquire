export enum EnumApiStatus {
  fetching = 'fetching',
  success = 'success',
  fail = 'fail',
}

export enum EnumStorageKey {
  token =  'token',
  tokenExpires = 'tokenExpires',
  userId = 'userId',
  password = 'password',
  userInfo = 'userInfo',
}

export enum EnumReport {
  resp5xx = '0',
  resp403 = '1',
  cardBalanceFail = '2',
  dormitoryEnergyFail = '3',
  dormitoryHealthFail = '4',
  scoreFail = '5',
  libraryBorrowFail = '6',
  userTokenFail = '7',
  scheduleFail = '8',
}
