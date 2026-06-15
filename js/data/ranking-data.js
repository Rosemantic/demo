/**
 * ============================================
 * ranking-data.js — 热点排行数据
 * 传播正能量 · 综合资讯平台
 * ============================================
 *
 * 数据结构说明：
 * - hotEvents: 热门事件排行
 * - hotActivities: 热门活动排行
 * - entertainmentHot: 娱乐热点排行
 * - socialHot: 社会热点排行
 */

const RankingData = {
  hotEvents: [
    { rank: 1, title: "浙江温岭槽罐车爆炸致19人遇难", heat: 98, tag: "社会" },
    {
      rank: 2,
      title: "北京丰台花乡地区升级为疫情高风险地区",
      heat: 95,
      tag: "疫情",
    },
    { rank: 3, title: '民航局发出第一份"熔断指令"', heat: 90, tag: "财经" },
    { rank: 4, title: "重庆副市长、公安局长邓恢林被查", heat: 88, tag: "社会" },
    { rank: 5, title: "三文鱼案板现新冠", heat: 85, tag: "民生" },
  ],

  hotActivities: [
    {
      rank: 1,
      title: "本地文旅活动",
      link: "pages/topics/travel.html",
      tag: "文旅",
    },
    { rank: 2, title: "本地消费节", link: "pages/finance-sports.html", tag: "消费" },
    { rank: 3, title: "本地公益行动", link: "pages/social.html", tag: "公益" },
    { rank: 4, title: "本地车展盛会", link: "pages/finance-sports.html", tag: "汽车" },
    { rank: 5, title: "本地美食市集", link: "pages/culture-life.html", tag: "美食" },
    {
      rank: 6,
      title: "本地体育赛事",
      link: "pages/finance-sports.html",
      tag: "体育",
    },
    {
      rank: 7,
      title: "全国影视盛典",
      link: "pages/entertainment.html",
      tag: "影视",
    },
    { rank: 8, title: "全民读书活动", link: "pages/culture-life.html", tag: "文化" },
    {
      rank: 9,
      title: "户外徒步大会",
      link: "pages/culture-life.html",
      tag: "户外",
    },
    { rank: 10, title: "线上购物狂欢", link: "pages/interaction.html", tag: "消费" },
    {
      rank: 11,
      title: "青年文创大赛",
      link: "pages/culture-life.html",
      tag: "文创",
    },
  ],

  entertainmentHot: [
    { rank: 1, title: "外媒资深记者眼中的弗洛伊德事件", heat: 92, tag: "国际" },
    { rank: 2, title: "国际锐评：对拉美裔倒打一耙", heat: 88, tag: "评论" },
    { rank: 3, title: "北京新增确诊病例8人详情公布", heat: 85, tag: "疫情" },
  ],

  socialHot: [
    {
      rank: 1,
      title: "满满的正能量！晚高峰路口7辆车抛锚",
      heat: 96,
      tag: "暖心",
    },
    { rank: 2, title: "亲历者讲述温岭爆炸", heat: 94, tag: "社会" },
    { rank: 3, title: "北京通报36个新增病例情况", heat: 90, tag: "疫情" },
  ],
};
