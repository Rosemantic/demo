/**
 * ============================================
 * topic-data.js — 专题数据
 * 传播正能量 · 综合资讯平台
 * ============================================
 *
 * 注意：图片路径使用相对于网站根目录的路径（assets/...）
 * 在各页面中根据深度拼接前缀：
 *   - 根目录页面（index.html）: 直接使用
 *   - pages/*.html: 前缀加 "../"
 *   - pages/topics/*.html: 前缀加 "../../"
 */

const TopicData = {
  harryPotter: {
    title: "哈利波特",
    subtitle: "魔法世界的永恒魅力",
    poster: "assets/images/topics/harry-potter/poster.jpg",
    video: "assets/video/harry-potter/harry-potter-trailer.mp4",
    characters: [
      {
        name: "哈利·波特",
        actor: "丹尼尔·雷德克里夫",
        image: "assets/images/topics/harry-potter/harry-12.jpg",
        description: "魔法世界的传奇英雄",
      },
      {
        name: "赫敏·格兰杰",
        actor: "艾玛·沃特森",
        image: "assets/images/topics/harry-potter/granger.jpg",
        description: "聪明勇敢的女巫师",
      },
      {
        name: "罗恩·韦斯莱",
        actor: "鲁伯特·格林特",
        image: "assets/images/topics/harry-potter/ron.jpg",
        description: "忠诚可靠的挚友",
      },
      {
        name: "海德薇",
        actor: "",
        image: "assets/images/topics/harry-potter/hedwig.jpg",
        description: "哈利的忠诚伙伴雪鸮",
      },
      {
        name: "斯内普教授",
        actor: "艾伦·瑞克曼",
        image: "assets/images/topics/harry-potter/snape.jpg",
        description: "最复杂深沉的角色",
      },
    ],
  },

  changjinLake: {
    title: "长津湖",
    subtitle: "抗美援朝战争的壮烈史诗",
    characters: [
      {
        name: "伍千里",
        actor: "吴京",
        image: "assets/images/topics/changjin-lake/wu-qianli.jpg",
        description: "七连连长，编号162，经历无数战斗与生死考验",
      },
      {
        name: "伍万里",
        actor: "易烊千玺",
        image: "assets/images/topics/changjin-lake/wu-wanli.jpg",
        description: "七连新兵，编号677，从叛逆少年成长为战斗英雄",
      },
      {
        name: "谈子为",
        actor: "段奕宏",
        image: "assets/images/topics/changjin-lake/tan-ziwei.jpg",
        description: "三营营长，战斗英雄",
      },
      {
        name: "梅生",
        actor: "朱亚文",
        image: "assets/images/topics/changjin-lake/mei-sheng.jpg",
        description: "七连指导员，编号135，文武兼备，智勇双全",
      },
      {
        name: "余从戎",
        actor: "李晨",
        image: "assets/images/topics/changjin-lake/yu-congrong.jpg",
        description: "七连火力排排长，编号221，阳光乐观的战士",
      },
      {
        name: "雷公",
        actor: "胡军",
        image: "assets/images/topics/changjin-lake/lei-gong.jpg",
        description: '七连炮排排长，编号017，七连的"雷爹"老兵',
      },
    ],
  },

  universe: {
    title: "宇宙闪烁",
    subtitle: "放心去飞 · 勇敢地去追",
    background: "assets/images/topics/universe/background.jpg",
    cover: "assets/images/topics/universe/cover.jpg",
    audio: "assets/audio/universe/fangxin-qu-fei.mp3",
    lyrics: [
      "终于还是走到这一天",
      "要奔向各自的世界",
      "没人能取代记忆中的你",
      "和那段青春岁月",
      "一路我们曾携手并肩",
      "用汗和泪写下永远",
      "拿欢笑荣耀换一句誓言",
      "夜夜在梦里相约",
      "放心去飞 勇敢地去追",
      "追一切我们未完成的梦",
      "放心去飞 勇敢地挥别",
      "说好了 这一次不掉眼泪",
    ],
    images: [
      "assets/images/topics/universe/scene-01.jpeg",
      "assets/images/topics/universe/scene-02.jpeg",
      "assets/images/topics/universe/universe-photo-01.jpg",
      "assets/images/topics/universe/universe-photo-02.jpg",
      "assets/images/topics/universe/universe-photo-03.jpg",
      "assets/images/topics/universe/universe-photo-04.jpg",
      "assets/images/topics/universe/universe-photo-05.jpg",
      "assets/images/topics/universe/universe-photo-06.jpeg",
      "assets/images/topics/universe/universe-photo-07.jpg",
    ],
  },

  travel: {
    title: "旅游文化",
    subtitle: "发现身边的美好",
    images: [
      "assets/images/topics/travel/travel-sample-01.jpg",
      "assets/images/topics/travel/travel-sample-02.jpg",
    ],
  },

  dressingRoom: {
    title: "试衣间",
    subtitle: "穿搭灵感 · 时尚生活",
    model: "assets/images/topics/dressing-room/model.jpg",
    outfits: [
      "assets/images/topics/dressing-room/outfit-01.png",
      "assets/images/topics/dressing-room/outfit-02.png",
      "assets/images/topics/dressing-room/outfit-03.png",
      "assets/images/topics/dressing-room/outfit-04.png",
    ],
    /* 实际文件名：clothing-1.jpg ~ clothing-21.jpg（无零填充） */
    clothing: [
      "assets/images/topics/dressing-room/clothing-1.jpg",
      "assets/images/topics/dressing-room/clothing-2.jpg",
      "assets/images/topics/dressing-room/clothing-3.jpg",
      "assets/images/topics/dressing-room/clothing-4.jpg",
      "assets/images/topics/dressing-room/clothing-5.jpg",
      "assets/images/topics/dressing-room/clothing-6.jpg",
      "assets/images/topics/dressing-room/clothing-7.jpg",
      "assets/images/topics/dressing-room/clothing-8.jpg",
      "assets/images/topics/dressing-room/clothing-9.jpg",
      "assets/images/topics/dressing-room/clothing-10.jpg",
      "assets/images/topics/dressing-room/clothing-11.jpg",
      "assets/images/topics/dressing-room/clothing-12.jpg",
      "assets/images/topics/dressing-room/clothing-13.jpg",
      "assets/images/topics/dressing-room/clothing-14.jpg",
      "assets/images/topics/dressing-room/clothing-15.jpg",
      "assets/images/topics/dressing-room/clothing-16.jpg",
      "assets/images/topics/dressing-room/clothing-17.jpg",
      "assets/images/topics/dressing-room/clothing-18.jpg",
      "assets/images/topics/dressing-room/clothing-19.jpg",
      "assets/images/topics/dressing-room/clothing-20.jpg",
      "assets/images/topics/dressing-room/clothing-21.jpg",
    ],
    audio: [
      { title: "佛说", file: "assets/audio/dressing-room/buddha-says.mp3" },
      { title: "洛丽塔", file: "assets/audio/dressing-room/lolita.mp3" },
    ],
  },
};
