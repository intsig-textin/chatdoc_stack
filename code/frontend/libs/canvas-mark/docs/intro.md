# 简介

## 由来

该工具是在合同项目中渐渐雏形，将通用功能抽离出来，作为一个库，可为其他项目使用。`Vue`、`React` 等项目皆可使用。

## 目的

致力于文档图像、图形的渲染，轻松解决根据坐标渲染图形，或是绘制图形保存坐标的场景

## 对比

实现方式的对比
Dom Mark：Dom普通标签实现
Svg Mark：svg 标签实现
Canvas Mark：canvas 标签实现

|              | Dom Mark | Svg Mark  | Canvas Mark  |
|--------------|----------|-----------|--------------|
| 初始化速度（520页）  |  3640ms  | - | 120ms |
| 聚焦框cpu占用（520页）  |  15%  | - | 5% |
| 缩放操作cpu占用（520页）  |  27%  | - | 1% |
| 模式切换cpu占用（520页）  |  100%（卡顿2秒）  | - | 5% |
| JS堆内存（520页）  |  190M  | - | 170M |
| dom节点数量（520页）  |  25257  | - | 11735 |
| 多边形        |  ❌  | ✅ | ✅ |
| 图像中文本复制 |  ❌  | ✅ | ✅ |
| dom元素    |  多  | 多 | 少 |
| 实现难度    |  小  | 中 | 高 |
| 技术保密性  |  ❌  | ❌ | ✅ |

总结：在浏览器中实现一套图形渲染组件，可采用混合的方式，取长补短，利用各个方式的有点。

## 未来

- :white_check_mark: 矩形
- :white_check_mark: 矩形动画
- :white_check_mark: 多边形
- :white_check_mark: 矩形动画
- :black_square_button: 自定义图形
- :black_square_button: 旋转
- :black_square_button: 画图工具
- :black_square_button: 支持GPU渲染
