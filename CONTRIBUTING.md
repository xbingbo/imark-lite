# 贡献指南

感谢你关注并参与 `imark-lite`。

## 本地开发

1. 安装依赖：
   - `pnpm install`
2. 启动开发环境：
   - `pnpm dev`

## 分支与提交

1. 从 `master` 创建功能分支。
2. 每次提交尽量聚焦单一改动。
3. 提交信息清晰描述改动目的与范围。

## PR 检查清单

提交 PR 前请确保：

- `pnpm run lint` 通过
- `pnpm run typecheck` 通过
- `pnpm run generate` 通过
- `/edit` 页面手工验证通过
- 复制结果在公众号编辑器中粘贴验证通过

## 范围约束

- Lite 版本聚焦稳定的 Markdown 转公众号富文本能力。
- 不引入 Pro 专属能力（高级组件、一键发布流程等）。
- 尽量保持既有 Markdown 用法的向后兼容。

## 问题与需求

- Bug 与需求请优先使用 GitHub Issue 模板。
- 描述请包含复现步骤、期望行为、实际行为和环境信息。
