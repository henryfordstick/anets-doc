# 安装

### NPM

Anets 动画库依赖 html2canvas 安装包，如果使用项目未安装，可以先安装 html2canvas。或者直接将 DOM 元素转成 canvas 后，然后通过 config.canvas 传入。

```bash
npm install html2canvas
# or
npm add html2canvas
```

<br/>
Anets 的 package 已上传至 npm。欲下载最新版本，请运行如下命令：

```bash
npm install anets
```

或者可以使用 yarn：

```bash
yarn add anets
```

### bundler

通过 npm 安装的 Anets 与 Webpack 或 Rollup 等模块 bunlder 可以轻松匹配。

### CDN

Anets 动画库提供了 UMD 构建，可以直接在 `<script>` 中使用，并将符号 Anets 暴露给全局的命名空间。

```bash
<script src="https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"></script>
```
