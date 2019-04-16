import { EnumApiStatus } from '../../enums/index';

// @ts-ignore
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: String,
      value: EnumApiStatus.fetching,
    },
    title: {
      type: String,
      value: '',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    enumStatus: EnumApiStatus,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
});
