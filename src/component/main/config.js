const btnConfig = [
  {
    name: '百叶窗',
    child: [
      {
        name: '出现-横',
        key: 'blindsInBOTTOM',
      },
      {
        name: '出现-竖',
        key: 'blindsInRight',
      },
      {
        name: '消失-横',
        key: 'blindsOutBOTTOM',
      },
      {
        name: '消失-竖',
        key: 'blindsOutRight',
      },
    ],
  },
  {
    name: '棋盘',
    child: [
      {
        name: '出现-横',
        key: 'checkerboardInDown',
      },
      {
        name: '出现-竖',
        key: 'checkerboardInRight',
      },
      {
        name: '消失-横',
        key: 'checkerboardOutDown',
      },
      {
        name: '消失-竖',
        key: 'checkerboardOutRight',
      },
    ],
  },
  {
    name: '擦除',
    child: [
      {
        name: '出现-从顶端',
        key: 'wipeInTop',
      },
      {
        name: '出现-从右端',
        key: 'wipeInRight',
      },
      {
        name: '出现-从低端',
        key: 'wipeInBottom',
      },
      {
        name: '出现-从左端',
        key: 'wipeInLeft',
      },
      {
        name: '消失-从顶端',
        key: 'wipeOutTop',
      },
      {
        name: '消失-从右端',
        key: 'wipeOutRight',
      },
      {
        name: '消失-从低端',
        key: 'wipeOutBottom',
      },
      {
        name: '消失-从左端',
        key: 'wipeOutLeft',
      },
    ],
  },
  {
    name: '劈裂-出现',
    child: [
      {
        name: '上下向中央收缩',
        key: 'barnInTopBottomCenter',
      },
      {
        name: '中央向上下展开',
        key: 'barnInCenterTopBottom',
      },
      {
        name: '左右向中央收缩',
        key: 'barnInLeftRightCenter',
      },
      {
        name: '中央向左右展开',
        key: 'barnInCenterLeftRight',
      },
    ],
  },
  {
    name: '劈裂-消失',
    child: [
      {
        name: '上下向中央收缩',
        key: 'barnOutTopBottomCenter',
      },
      {
        name: '中央向上下展开',
        key: 'barnOutCenterTopBottom',
      },
      {
        name: '左右向中央收缩',
        key: 'barnOutLeftRightCenter',
      },
      {
        name: '中央向左右展开',
        key: 'barnOutCenterLeftRight',
      },
    ],
  },
  {
    name: '溶解',
    child: [
      {
        name: '向内',
        key: 'dissolveIn',
      },
      {
        name: '向外',
        key: 'dissolveOut',
      },
    ],
  },
  {
    name: '随机线条',
    child: [
      {
        name: '出现-水平',
        key: 'randombarInHorizontal',
      },
      {
        name: '出现-垂直',
        key: 'randombarInVertical',
      },
      {
        name: '消失-水平',
        key: 'randombarOutHorizontal',
      },
      {
        name: '消失-垂直',
        key: 'randombarOutVertical',
      },
    ],
  },
  {
    name: '阶梯状',
    child: [
      {
        name: '出现-左下',
        key: 'stripsInLeftBottom',
      },
      {
        name: '出现-左上',
        key: 'stripsInLeftTop',
      },
      {
        name: '出现-右下',
        key: 'stripsInRightBottom',
      },
      {
        name: '出现-右上',
        key: 'stripsInRightTop',
      },
      {
        name: '消失-左下',
        key: 'stripsOutLeftBottom',
      },
      {
        name: '消失-左上',
        key: 'stripsOutLeftTop',
      },
      {
        name: '消失-右下',
        key: 'stripsOutRightBottom',
      },
      {
        name: '消失-右上',
        key: 'stripsOutRightTop',
      },
    ],
  },
  {
    name: '扇形扩展',
    child: [
      {
        name: '出现',
        key: 'wedgeIn',
      },
      {
        name: '消失',
        key: 'wedgeOut',
      },
    ],
  },
  {
    name: '轮子-出现',
    child: [
      {
        name: '1轮辐图案',
        key: 'wheelInOneSpokes',
      },
      {
        name: '2轮辐图案',
        key: 'wheelInTwoSpokes',
      },
      {
        name: '3轮辐图案',
        key: 'wheelInThreeSpokes',
      },
      {
        name: '4轮辐图案',
        key: 'wheelInFourSpokes',
      },
      {
        name: '8轮辐图案',
        key: 'wheelInEightSpokes',
      },
    ],
  },
  {
    name: '轮子-消失',
    child: [
      {
        name: '1轮辐图案',
        key: 'wheelOutOneSpokes',
      },
      {
        name: '2轮辐图案',
        key: 'wheelOutTwoSpokes',
      },
      {
        name: '3轮辐图案',
        key: 'wheelOutThreeSpokes',
      },
      {
        name: '4轮辐图案',
        key: 'wheelOutFourSpokes',
      },
      {
        name: '8轮辐图案',
        key: 'wheelOutEightSpokes',
      },
    ],
  },
  {
    name: '矩形扩展',
    child: [
      {
        name: '出现-内',
        key: 'boxInIn',
      },
      {
        name: '出现-外',
        key: 'boxInOut',
      },
      {
        name: '消失-内',
        key: 'boxOutIn',
      },
      {
        name: '消失-外',
        key: 'boxOutOut',
      },
    ],
  },
  {
    name: '圆形扩展',
    child: [
      {
        name: '出现-内',
        key: 'circleInIn',
      },
      {
        name: '出现-外',
        key: 'circleInOut',
      },
      {
        name: '消失-内',
        key: 'circleOutIn',
      },
      {
        name: '消失-外',
        key: 'circleOutOut',
      },
    ],
  },
  {
    name: '菱形扩展',
    child: [
      {
        name: '出现-内',
        key: 'diamondInIn',
      },
      {
        name: '出现-外',
        key: 'diamondInOut',
      },
      {
        name: '消失-内',
        key: 'diamondOutIn',
      },
      {
        name: '消失-外',
        key: 'diamondOutOut',
      },
    ],
  },
  {
    name: '十字扩展',
    child: [
      {
        name: '出现-内',
        key: 'plusInIn',
      },
      {
        name: '出现-外',
        key: 'plusInOut',
      },
      {
        name: '消失-内',
        key: 'plusOutIn',
      },
      {
        name: '消失-外',
        key: 'plusOutOut',
      },
    ],
  },
];

export default btnConfig;
