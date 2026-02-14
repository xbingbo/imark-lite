# 仓库设置清单

本文档记录 `imark-lite` 推荐的 GitHub 仓库设置。

## 分支保护（`master`）

建议开启以下规则：

- 合并前必须通过 Pull Request
- 至少 1 人审批
- 新提交推送后自动撤销过期审批
- 合并前必须通过状态检查
- 必需检查项：`quality-check`
- 合并前必须解决所有会话
- 禁止 force push

## 安全设置

- 开启 Dependabot alerts
- 开启 Dependabot security updates
- 开启 secret scanning（如当前套餐支持）

## Pull Request 设置

- 合并后自动删除分支
- 建议优先使用 Squash merge（可选）
