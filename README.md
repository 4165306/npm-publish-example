#### 说明文档

##### package.json
```json

{
  // 项目名称，发布到npm上的名称，如果与其他项目相似会发布失败
  "name": "@peach_blossom/test-package",
  // 项目版本
  "version": "3.0.5",
  // 项目描述
  "description": "",
  // 入口文件，这里指向打包过后的文件，这个配置是node_module模块的入口文件
  // 如果不配置，那么默认是index.js
  "main": "dist/my-library.js",
  // 配置类型，这里是module，表示是es6模块
  "type": "module",
  // npm run 命令
  // npm run build 其实就是执行 rollup -c
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rollup -c"
  },
  // 这个库搜索的关键字
  "keywords": [],
  // 作者
  "author": "",
  // 开源协议
  "license": "ISC",
  // 依赖
  "devDependencies": {
    "rollup": "^3.20.2",
    "rollup-plugin-typescript2": "^0.34.1",
    "typescript": "^5.0.4"
  },
  // 要上传到npm的文件, 这里只上传dist
  "file": [
    "dist"
  ]
}

```

##### rollup.config.js
```js
// 支持Typescript
import typescript from 'rollup-plugin-typescript2';

export default {
    // 打包的入口文件，这里指向src/my-library.ts
    input: 'src/my-library.ts',
    // 打包输出文件
    output: {
        file: 'dist/my-library.js',
        // 打包输出的格式，这里是es6模块, 也可以配置CommonJs模块
        format: 'es',
        name: 'MyLibrary',
    },
    // Typescript扩展
    plugins: [typescript()],
    external: [],
};
```

##### src/my-library.ts
```ts
// 测试的入口文件，直接导出一个sayHello函数
// 引入方式 import {sayHello} from 'my-library'
export function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
}
```

##### test-import.js
```js
// 从打包过后的文件导入
import {sayHello} from "./dist/my-library.js";
// 执行方法
sayHello('xxx');
```

#### 总结
package.json 是配置npm包的信息，比如包名，版本，入口文件，依赖等等
rollup.config.js 是配置打包信息，比如打包入口文件，打包输出文件，打包格式等等
.gitignore 是配置git忽略文件，比如node_modules，dist等等
.npmignore 是配置npm忽略文件，比如node_modules，dist等等, 配置这个也可以忽略上传文件

#### 参考
一般可以直接package.json指定到打包过后的文件
rollup.config.js 指定到原项目的入口文件
如果要测试的话可以直接控制台node 文件名
