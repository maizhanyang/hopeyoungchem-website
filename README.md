# Hope Young Website

广州虹扬化工科技有限公司官网展示版，基于 React + TypeScript + Vite 构建，包含：

- 中英双语页面结构
- 6 个核心页面：首页、解决方案、行业应用、技术实力、关于我们、联系我们
- 真实品牌与联系信息展示模块
- 面向正式对外展示的工业科技风视觉系统

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址会由 Vite 输出在终端中。

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/` 目录。

## 当前维护入口

- 站点内容、品牌、联系信息和多语言文案集中在 `src/content/siteContent.ts`
- 页面结构与组件组合集中在 `src/App.tsx`
- 全局视觉与响应式样式集中在 `src/index.css`
- 上线前所需资料与待补事项清单见 `LAUNCH_CHECKLIST.md`

## 内容更新建议

- 若后续要接入真实表单提交，可在联系页新增后端接口、邮件通知或企业微信通知逻辑
- 案例、证书、检测报告与技术资料建议仅在确认授权后加入 `src/content/siteContent.ts`
- 若正式商务邮箱确认，可直接在 `src/content/siteContent.ts` 的 `siteConfig.contacts` 中补充
