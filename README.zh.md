<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2023-09-25 13:30:26
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-11 09:57:20
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 * 联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# bytedesk-react

[![NPM version](https://img.shields.io/npm/v/bytedesk-react.svg?style=flat)](https://npmjs.org/package/bytedesk-react)
[![NPM downloads](http://img.shields.io/npm/dm/bytedesk-react.svg?style=flat)](https://npmjs.org/package/bytedesk-react)

bytedesk.com react lib web 客服聊天插件

## 语言

- [English](./README.md)
- [中文](./README.zh.md)

## 安装

```bash
npm install bytedesk-react --save
# or
yarn add bytedesk-react
```

## 使用

```jsx
import { ChatFloat } from "bytedesk-react";
// 
<ChatFloat
    chatUrl="http://localhost:9006/chat?t=1&sid=default_wg_uid&"
    //buttonPosition: 'right', // botton position：left or right
    //buttonBackgroundColor: 'blue', // button background color
    //iframeWidth: 400,
    //iframeHeight: 600,
    //iframeMargins: { right: 20, bottom: 20, left: 20 }, // iframe margins
    //buttonMargins: { right: 20, bottom: 20, left: 20 }, // button margins
    //showButton: true, // show button or not
    //showIframe: true // show iframe or not
/>
// params:
chatUrl: 客服链接;
```

## 获取客服链接

- [登录管理后台](https://www.weiyuai.cn/admin/cs/wgroup)
- <img src="./image/get_code.png" width="500">

## 示例

| 自定义按钮颜色 |  按钮放在窗口左下角 | 自定义按钮边距 | 自定义聊天窗口边距 | 自定义聊天窗口宽度 |
| :----------: | :----------: | :----------:  | :----------: | :----------: |
| <img src="./image/button-color.png" width="250"> | <img src="./image/button-left.png" width="250"> | <img src="./image/button-margin.png" width="250"> | <img src="./image/iframe-margin.png" width="250"> | <img src="./image/iframe-width.png" width="250"> |

## 更多

- [iOS-oc](https://github.com/Bytedesk/bytedesk-oc)
- [iOS-swift](https://github.com/Bytedesk/bytedesk-swift)
- [Android](https://github.com/bytedesk/bytedesk-android)
- [Flutter](https://github.com/bytedesk/bytedesk-flutter)
- [Vue](https://github.com/bytedesk/bytedesk-vue)
- [React](https://github.com/bytedesk/bytedesk-react)
- [React-native](https://github.com/bytedesk/bytedesk-react-native)
- [UniApp](https://github.com/bytedesk/bytedesk-uniapp)
- [Web](https://github.com/bytedesk/bytedesk-web)
- [Browser-Extension](https://github.com/Bytedesk/bytedesk-browser-extention)
- [Vscode-plugin](https://github.com/bytedesk/bytedesk-vscode-plugin)

## LICENSE

MIT

- [dumi](https://d.umijs.org/guide/initialize)
