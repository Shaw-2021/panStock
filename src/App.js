import React from "react";
import "antd/dist/antd.min.css";
import "./index.css";
import { Cascader } from "antd";

import { useState, useEffect } from "react";

const myWords = {
  niu: "牛市",
  xiong: "熊市",
  gao: "高位",
  zhong: "中位",
  di: "低位",
  da: "外盘>内盘",
  deng: "外盘=内盘",
  xiao: "外盘<内盘",
  sheng: "价升",
  ping: "价平",
  die: "价跌",
  zeng: "量增",
  liangPing: "量平",
  jian: "量减",
};

const results = {
  aa: "涨后回调",
  ab: "上涨末端",
  ac: "跌后再涨",
  ad: "高位顶部",
  ae: "做多无力",
  af: "主力看空",
  ag: "主力出逃",
  ah: "卖出放空",
  ai: "出货洗盘",
  aj: "谨慎看多",
  ak: "持股观望",
  al: "诱多出逃",
  am: "头部已现",
  an: "顺势观望",
  ao: "持股待变",
  ap: "当心跳水",
  aq: "止涨信号",
  ar: "轻仓离场",
  as: "积极跟进",
  at: "上涨途中",
  au: "警示信号",
  av: "跑错也跑",
  aw: "筹码松动",
  ax: "见顶转跌",
  ay: "及时离场",
  az: "惯性下跌",
  za: "还会下跌",
};

const results1 = {
  aa: "高歌猛进",
  ab: "推高接货",
  ac: "拉高出货",
  ad: "主力加仓",
  ae: "续买多单",
  af: "蓄势待变",
  ag: "空仓观望",
  ah: "减仓观察",
  ai: "无承接盘",
  aj: "大胆买入",
  ak: "加仓信号",
  al: "持多待变",
  am: "主力买入",
  an: "等待变盘",
  ao: "警戒出货",
  ap: "持空待变",
  aq: "空头信号",
  ar: "无量阴跌",
  as: "勇敢加仓",
  at: "持续跟进",
  au: "无人跟进",
  av: "主力试盘",
  aw: "做多等待",
  ax: "主力犹豫",
  ay: "清仓休息",
  az: "卖出放空",
  za: "卖出信号",
};

const results2 = {
  aa: "齐声看涨",
  ab: "锁仓持有",
  ac: "主力诱多",
  ad: "跟错也跟",
  ae: "拿错也拿",
  af: "等错也等",
  ag: "主力出货",
  ah: "继续卖出",
  ai: "主力洗盘",
  aj: "买入信号",
  ak: "续买多单",
  al: "继续持有",
  am: "主力进场",
  an: "保持观望",
  ao: "主力锁仓",
  ap: "弃卖观望",
  aq: "不宜建仓",
  ar: "隔岸观火",
  as: "主力吸筹",
  at: "持续买入",
  au: "高度控盘",
  av: "底部拐点",
  aw: "持股待涨",
  ax: "底部等涨",
  ay: "坚决离场",
  az: "下跌途中",
  za: "筑底迹象",
};

const options4 = [
  {
    value: myWords.zeng,
    label: myWords.zeng,
  },
  {
    value: myWords.liangPing,
    label: myWords.liangPing,
  },
  {
    value: myWords.jian,
    label: myWords.jian,
  },
];

const options3 = [
  {
    value: myWords.sheng,
    label: myWords.sheng,
    children: options4,
  },
  {
    value: myWords.ping,
    label: myWords.ping,
    children: options4,
  },
  {
    value: myWords.die,
    label: myWords.die,
    children: options4,
  },
];

const options2 = [
  {
    value: myWords.da,
    label: myWords.da,
    children: options3,
  },
  {
    value: myWords.deng,
    label: myWords.deng,
    children: options3,
  },
  {
    value: myWords.xiao,
    label: myWords.xiao,
    children: options3,
  },
];

const options1 = [
  {
    value: myWords.gao,
    label: myWords.gao,
    children: options2,
  },
  {
    value: myWords.zhong,
    label: myWords.zhong,
    children: options2,
  },
  {
    value: myWords.di,
    label: myWords.di,
    children: options2,
  },
];

const options = [
  {
    value: myWords.niu,
    label: myWords.niu,
    children: options1,
  },
  {
    value: myWords.xiong,
    label: myWords.xiong,
    children: options1,
  },
];

const App = () => {
  const [myArray, setMyArray] = useState([]);
  const [result, setResult] = useState("");
  const getresult = () => {
    return myArray[0] === myWords.niu &&
      myArray[1] === myWords.gao &&
      myArray[2] === myWords.da &&
      myArray[3] === myWords.sheng &&
      myArray[4] === myWords.zeng
      ? results.aa
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results.ab
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results.ac
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results.ad
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results.ae
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results.af
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results.ag
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results.ah
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results.ai
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.zeng
      ? results.aj
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results.ak
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results.al
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results.am
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results.an
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results.ao
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results.ap
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results.aq
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results.ar
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results.as
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results.at
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results.au
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results.av
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results.aw
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results.ax
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results.ay
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results.az
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.gao &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results.za
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.zeng
      ? results1.aa
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results1.ab
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results1.ac
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results1.ad
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results1.ae
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results1.af
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results1.ag
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results1.ah
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results1.ai
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.zeng
      ? results1.aj
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results1.ak
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results1.al
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results1.am
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results1.an
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results1.ao
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results1.ap
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results1.aq
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results1.ar
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results1.as
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results1.at
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results1.au
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results1.av
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results1.aw
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results1.ax
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results1.ay
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results1.az
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results1.za
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.zhong &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.zeng
      ? results2.aa
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results2.ab
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results2.ac
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results2.ad
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results2.ae
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results2.af
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results2.ag
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results2.ah
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results2.ai
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.da &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.zeng
      ? results2.aj
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results2.ak
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results2.al
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results2.am
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results2.an
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results2.ao
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results2.ap
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results2.aq
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.deng &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
      ? results2.ar
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.liangPing
      ? results2.as
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.sheng &&
        myArray[4] === myWords.jian
      ? results2.at
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.zeng
      ? results2.au
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.liangPing
      ? results2.av
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results2.aw
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.ping &&
        myArray[4] === myWords.jian
      ? results2.ax
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.zeng
      ? results2.ay
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.liangPing
      ? results2.az
      : myArray[0] === myWords.niu &&
        myArray[1] === myWords.di &&
        myArray[2] === myWords.xiao &&
        myArray[3] === myWords.die &&
        myArray[4] === myWords.jian
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