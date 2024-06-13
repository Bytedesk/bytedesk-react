<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-13 18:20:50
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-13 19:30:19
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 * 联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# Locally preview the production build.
$ yarn run docs:preview

# check your project for potential problems
$ yarn run doctor
```

## Publish to npmjs.org

```bash
npm config get registry
# 
npm config set registry https://registry.npmjs.org/
#
npm login
npm version patch
yarn run build
# 
npm publish
```
