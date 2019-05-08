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
    image: { // 相对本组件的图片路径
      type: String,
      value: '',
    },
    cardClass: {
      type: String,
      value: '',
    },
    footer: {
      type: String,
      value: '',
    },
    to: {
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
    fetch() {
      // @ts-ignore
      this.triggerEvent('fetch');
    },
    onCardClick() {
      // @ts-ignore
      this.properties.status === EnumApiStatus.success && this.data.to && wx.navigateTo({ url: this.data.to });
    },
  },
});
