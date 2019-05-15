import { IMyApp } from '../../app';
import { ICOutputScore } from '../../contracts/score';

const app = getApp<IMyApp>();

interface IScoreSemesterData {
  semesterName: string;
  schoolYear: ICOutputScore['scores'][0]['schoolYear'];
  semester: ICOutputScore['scores'][0]['semester'];
  data: ICOutputScore['scores'];
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scores: [] as IScoreSemesterData[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const d = app.globalData.resp.score;
    if (d) {
      const scores: IScoreSemesterData[] = [];
      for (const s of d.scores) {
        const semesterName = `${s.schoolYear}_${s.semester}`;
        const semesterSection = scores.find(se => se.semesterName === semesterName);
        if (!semesterSection) {
          scores.push({
            semesterName,
            schoolYear: s.schoolYear,
            semester: s.semester,
            data: [s],
          });
        } else {
          semesterSection.data.push(s);
        }
      }
      this.setData!({
        scores,
      });
    }
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
});
