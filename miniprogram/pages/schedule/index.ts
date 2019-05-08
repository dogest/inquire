import { IMyApp } from '../../app';
import scheduleConfig from '../../configs/schedule';
import { ICOutputSchedule } from '../../contracts/schedule';
import { isClassAvailableInSomeWeek } from '../../utils/schedule';

const app = getApp<IMyApp>();

const dayNum = scheduleConfig.dayNum;
const classNum = scheduleConfig.classTime.length;

type ScheduleCellData = (ICOutputSchedule['schedule'][0] & {
  isFirst: boolean;
  isLast: boolean;
  colorScheme: number;
}) | null;

function getEmptySchedule(): ScheduleCellData[][] {
  return new Array(classNum).fill(undefined).map(() =>  new Array(dayNum).fill(null));
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    d: app.globalData.resp.schedule,
    currentWeek: 0,
    formattedSchedule: getEmptySchedule(),
    colorSchemeMap: {} as { [x: string]: number },
    maxWeek: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const d = app.globalData.resp.schedule;
    if (!d) {
      return;
    }

    const { schedule } = d;

    // 计算 color scheme 分配和最大周
    const classNameSet = new Set();
    let maxWeek = 0;
    schedule.forEach((s) => {
      classNameSet.add(s.className);
      maxWeek = Math.max(maxWeek, s.durationOfWeekList[s.durationOfWeekList.length - 1]);
    });
    let curIndex = 0;
    const colorSchemes = new Array(classNameSet.size).fill(0).map((_i, index) => index + 1);
    colorSchemes.sort(() => 0.5 - Math.random());
    const colorSchemeMap = {};
    classNameSet.forEach(v => {
      colorSchemeMap[v] = colorSchemes[curIndex++];
    });

    this.setData!({
      d,
      currentWeek: d.currentWeek,
      colorSchemeMap,
      maxWeek,
    });
    this.calSchedule();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  calSchedule() {
    if (!this.data.d) {
      return;
    }

    const { colorSchemeMap, currentWeek } = this.data;
    const { schedule } = this.data.d;
    const formattedSchedule = getEmptySchedule();

    schedule.forEach((s) => {
      const available = isClassAvailableInSomeWeek(s.durationOfWeekList, currentWeek);
      if (available) {
        const colorScheme = colorSchemeMap[s.className];
        s.durationOfClassList.forEach((c, index) => {
          formattedSchedule[c - 1][s._dayOfWeek - 1] = {
            ...s,
            isFirst: index === 0,
            isLast: index === s.durationOfClassList.length - 1,
            colorScheme,
          };
        });
      }
    });
    console.log(formattedSchedule);
    this.setData!({
      formattedSchedule,
    });
  },

  toPrevious() {
    this.setData!({
      currentWeek: this.data.currentWeek - 1,
    });
    this.calSchedule();
  },

  toNext() {
    this.setData!({
      currentWeek: this.data.currentWeek + 1,
    });
    this.calSchedule();
  },
});
