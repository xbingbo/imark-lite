# imark

> 将 Markdown 转换为 **可直接粘贴到微信公众号编辑器的富文本**  
> 一个为公众号创作者、技术写作者准备的轻量级排版工具

---

## 为什么会有 imark？

如果你写过公众号文章，大概率遇到过这些问题：

- Markdown 写得很爽，但**公众号不支持直接粘贴 HTML**
- 样式一复杂，**粘贴后全乱**
- 在线 Markdown 编辑器很多，但**为公众号适配的很少**

**imark-lite 做的只有一件事：**

> 把 Markdown 转换成 **公众号编辑器真正能识别、能保留样式的富文本**

你复制的不是 HTML 代码，而是 **可以直接粘贴使用的内容**。

---

## 核心特性

- [x] Markdown → 微信公众号可用富文本
- [x] 一键复制，直接粘贴到公众号编辑器
- [x] 适配公众号支持的格式子集
- [x] 内置多种基础排版风格
- [x] 前端纯实现，无需登录、无需后端

---

## 内置样式

当前 Lite 版提供以下基础风格：

- **简约白**：干净克制，适合长文
- **护眼黑**：夜间阅读友好
- **技术蓝**：偏技术风格排版

> 复杂布局类样式（Hero / Card / Alert）不包含在 Lite 版中

---

## 支持的 Markdown 特性

### 已支持

- 标题（H1–H6）
- 有序 / 无序列表
- 引用块
- 表格
- 图片
- 代码块（基础样式）

### 不支持（或刻意限制）

- 任意 HTML 标签
- 自定义复杂布局
- JS / 内联脚本
- 公众号编辑器不支持的样式

> 这是为了确保 **复制后在公众号中表现稳定一致**

---

## 使用流程

```text
Markdown
   ↓
imark-lite 转换
   ↓
复制富文本
   ↓
粘贴到微信公众号编辑器
无需插件、无需配置。
```

## 技术栈

- Nuxt 4
- TypeScript
- Tailwind CSS
- Clipboard API

## 质量保障

当前项目在 CI 中默认执行以下检查：

- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run generate`

当前仓库未引入单元测试框架。提交 PR 前请至少完成：

- 本地 `lint` 与 `typecheck` 通过
- 编辑器输入与预览渲染手工验证
- 复制结果在公众号编辑器中粘贴验证

## 本地运行

```shell
pnpm install
pnpm dev
```

或使用 npm / yarn 亦可。

## 关于 License

本项目基于 **MIT License** 开源。  
你可以在保留原版权与许可证声明的前提下，进行使用、修改、分发与商业使用。

## 反馈与交流

- Issue / PR 欢迎
- 如果这个项目对你有帮助，欢迎 Star 
- 贡献指南：`CONTRIBUTING.md`
- 行为准则：`CODE_OF_CONDUCT.md`
- 安全策略：`SECURITY.md`
- 仓库治理设置：`.github/REPOSITORY_SETTINGS.md`
