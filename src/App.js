import React from "react";
import "antd/dist/antd.min.css";
import "./index.css";
import { Cascader } from "antd";

import { useState, useEffect } from "react";

const myWords = {
  gao: "高位20%",
  zhong: "中继10%",
  di: "低位5%",
  da: "外盘>内盘",
  deng: "外盘=内盘",
  xiao: "外盘<内盘",
  sheng: "上涨",
  ping: "十字星",
  die: "下跌",
  zeng: "放量",
  liangPing: "平量",
  jian: "缩量",
};

const results = {
  aa: "齐声看涨",
  ab: "锁仓持有",
  ac: "休整待涨",
  ad: "跟错也跟",
  ae: "看多做多",
  af: "等错也等",
  ag: "打压建仓",
  ah: "择机小仓",
  ai: "主力洗盘",
  aj: "买入信号",
  ak: "续买多单",
  al: "继续持有",
  am: "主力进场",
  an: "保持观望",
  ao: "主力锁仓",
  ap: "弃卖观望",
  aq: "轻仓等待",
  ar: "隔岸观火",
  as: "拐点突破",
  at: "试错建仓",
  au: "高度控盘",
  av: "主力吸筹",
  aw: "等待上拐",
  ax: "底部等涨",
  ay: "底部拐点",
  az: "最后一跌",
  za: "筑底迹象",
};

const results1 = {
  aa: "高歌猛进",
  ab: "推高接货",
  ac: "蓄势待发",
  ad: "转阴变盘",
  ae: "续买多单",
  af: "蓄势待变",
  ag: "空头强势",
  ah: "减仓观察",
  ai: "洗盘观望",
  aj: "大胆买入",
  ak: "加仓信号",
  al: "持股待变",
  am: "主力犹豫",
  an: "等待变盘",
  ao: "坚决不动",
  ap: "看空待变",
  aq: "空头信号",
  ar: "耐心等待",
  as: "勇敢建仓",
  at: "持续跟进",
  au: "等待跟进",
  av: "主力撤退",
  aw: "做多等待",
  ax: "主力犹豫",
  ay: "减仓看空",
  az: "卖出做空",
  za: "主力惜筹",
};

const results2 = {
  aa: "冲高回调",
  ab: "回调再涨",
  ac: "退一进二",
  ad: "高位止涨",
  ae: "拿错也拿",
  af: "空头衰竭",
  ag: "主力出逃",
  ah: "利空出尽",
  ai: "出贷洗盘",
  aj: "谨慎看多",
  ak: "持股观望",
  al: "等待机会",
  am: "头部已现",
  an: "顺势观望",
  ao: "持股待变",
  ap: "当心跳水",
  aq: "止涨信号",
  ar: "轻仓观望",
  as: "拉高出货",
  at: "上涨途中",
  au: "持有等待",
  av: "跑错也跑",
  aw: "持股待涨",
  ax: "见顶转跌",
  ay: "及时离场",
  az: "惯性下跌",
  za: "止跌有望",
};

const options3 = [
  {
    value: myWords.gao,
    label: myWords.gao, 
  },
  {
    value: myWords.zhong,
    label: myWords.zhong,  
  },
  {
    value: myWords.di,
    label: myWords.di, 
  },
];

const options2 = [
  {
    value: myWords.zeng,
    label: myWords.zeng,
    children: options3,
  },
  {
    value: myWords.liangPing,
    label: myWords.liangPing,
    children: options3,
  },
  {
    value: myWords.jian,
    label: myWords.jian,
    children: options3,
  },
];

const options1 = [
  {
    value: myWords.sheng,
    label: myWords.sheng,
    children: options2,
  },
  {
    value: myWords.ping,
    label: myWords.ping,
    children: options2,
  },
  {
    value: myWords.die,
    label: myWords.die,
    children: options2,
  },
];

const options = [
  {
    value: myWords.da,
    label: myWords.da,
    children: options1,
  },
  {
    value: myWords.deng,
    label: myWords.deng,
    children: options1,
  },
  {
    value: myWords.xiao,
    label: myWords.xiao,
    children: options1,
  },
];


const App = () => {
  const [myArray, setMyArray] = useState([]);
  const [result, setResult] = useState("");
  const getresult = () => {
    return myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.aa
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.ab
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.ac
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.ad
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.ae
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.af
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.ag
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.ah
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.ai
      :myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.aj
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.ak
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.al
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.am
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.an
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.ao
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.ap
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.aq
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.ar
      :myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.as
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.at
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.au
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.av
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.aw
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.ax
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.di
      ? results.ay
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.di
      ? results.az
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.di
      ? results.za
      :myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.aa
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.ab
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.ac
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.ad
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.ae
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.af
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.ag
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.ah
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.ai
      :myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.aj
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.ak
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.al
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.am
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.an
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.ao
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.ap
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.aq
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.ar
      :myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.as
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.at
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.au
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.av
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.aw
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.ax
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.zhong
      ? results1.ay
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.zhong
      ? results1.az
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.zhong
      ? results1.za
      :myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.aa
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.ab
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.ac
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.ad
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.ae
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.af
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.ag
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.ah
      : myArray[0] === myWords.da &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.ai
      :myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.aj
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.ak
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.al
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.am
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.an
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.ao
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.ap
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.aq
      : myArray[0] === myWords.deng &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.ar
      :myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.as
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.at
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.sheng &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.au
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.av
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.aw
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.ping &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.ax
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.zeng &&
      myArray[3] === myWords.gao
      ? results2.ay
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.liangPing &&
      myArray[3] === myWords.gao
      ? results2.az
      : myArray[0] === myWords.xiao &&
      myArray[1] === myWords.die &&
      myArray[2] === myWords.jian &&
      myArray[3] === myWords.gao
      ? results2.za   
      : "无熊市信号";
  };

  useEffect(() => {
    setResult(getresult());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myArray]);

  return (
    <>
      <h1>量价关系对照图</h1>

      <Cascader
        options={options}
        size="large"
        onChange={(data) => {
          setMyArray(data);
        }}
        placeholder="请选择"
      />
      <div>
        <h1>已选择</h1>
        {myArray.map(i=><li>{i}</li>)}
      </div>
      <h1>结果</h1>
      <h2>{result}</h2>
    </>
  );
  
};

export default App;