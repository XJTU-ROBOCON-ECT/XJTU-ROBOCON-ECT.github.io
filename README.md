# XJTUROBOCON Electronic Control Team Website

西安交通大学 ROBOCON 机器人战队电控组官方网站与公开培训入口。网站使用 Astro + Starlight 构建，目标仓库为 `XJTU-ROBOCON-ECT/XJTU-ROBOCON-ECT.github.io`。

## Tech Stack

- Astro / TypeScript / CSS
- Starlight 文档系统
- GitHub Pages / GitHub Actions

## Local Development

需要 Node.js 24 和 npm。

```powershell
npm.cmd install
npm.cmd run dev
```

质量检查：

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run check:links
```

## Project Structure

```text
src/
├── components/      首页与布局组件
├── config/          站点内容与导航配置
├── content/docs/    Starlight Markdown 文档
├── data/training/   培训模块数据结构
├── pages/           官网与 404
└── styles/          官网与文档视觉
templates/docs/      章节模板
public/              可公开静态资源
```

## Content Editing

队名、赛季、招新状态、联系方式和链接统一维护在 `src/config/site.ts`。真实内容没有确认时应保持为空，由组件显示“待更新”，不要在页面中虚构占位人物、成绩或联系方式。

## Docs Editing

公开文档位于 `src/content/docs/docs/`。新增页面时填写 `title`、`description` 与 `sidebar.order`，并使用 `templates/docs/chapter-template.md` 作为章节结构。

## Assets

网站只使用经过确认、允许公开的图片和视频。当前首页使用排版与抽象几何占位，不生成假机器人、假比赛照片或临时 Logo。

## Deployment

`.github/workflows/deploy.yml` 会在 `main` 更新后构建并部署 GitHub Pages。首次发布前，需要在仓库 Settings → Pages 中选择 GitHub Actions。创建远程仓库和首次推送必须由负责人确认。

## Information Classification

### PUBLIC

允许进入本仓库：团队介绍、赛事背景、通用培训内容、经审核的学习资源和教学示例。

### INTERNAL

禁止进入本仓库：完整内部培训资料、考勤、成员个人信息、接口分配、接线说明、内部故障记录和工作流。

### SEASON CONFIDENTIAL

禁止进入本仓库：当前赛季机器人实现、状态机、自动流程、视觉与定位方案、策略、参数、图纸和源代码。

静态部署的数据默认视为公开数据。不要因为 Git 仓库方便，就把内部或赛季机密资料上传到公开网站仓库。

## Contributing

使用 `feature/*`、`docs/*` 或 `fix/*` 分支提交变更。合并前至少运行 check、build 和链接检查，并由内容负责人完成公开审查。
