<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2023-09-25 13:30:26
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-14 09:41:40
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

bytedesk.com react lib

## Usage

```bash
npm install bytedesk-react --save
# or
yarn add bytedesk-react
```

## Options

```jsx
import { ChatFloat } from "bytedesk-react";
// 
<ChatFloat
    chatUrl="http://localhost:9006/chat?t=1&sid=default_wg_uid&"
    //buttonPosition: 'right', // botton position：left or right
    //buttonBackgroundColor: 'blue', // button background color
    //iframeMargins: { right: 20, bottom: 20, left: 20 }, // iframe margins
    //buttonMargins: { right: 20, bottom: 20, left: 20 }, // button margins
    //showButton: true, // show button or not
    //showIframe: true // show iframe or not
/>
// params:
chatUrl: chat url;
```

## Example

| button-color |  button-left | button-margin | iframe-margin |
| :----------: | :----------: | :----------:  | :----------: |
| <img src="./docs/image/button-color.png" width="250"> | <img src="./docs/image/button-left.png" width="250"> | <img src="./docs/image/button-margin.png" width="250"> | <img src="./docs/image/iframe-margin.png" width="250"> |

## LICENSE

MIT

- [dumi](https://d.umijs.org/guide/initialize)
