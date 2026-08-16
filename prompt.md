# XJTUROBOCON Electronic Control Team Website — Work Master Prompt

你正在为 **西安交通大学 ROBOCON 机器人战队电控组** 构建一个长期维护的官方网站与公开培训入口。

GitHub Organization：

```
XJTU-ROBOCON-ECT
```

目标官网仓库：

```
XJTU-ROBOCON-ECT.github.io
```

网站未来部署为 GitHub Organization Pages。

------

# 0. 工作方式

这是一个真实、长期维护的团队网站，不是一次性 Demo。

请按照以下方式工作：

1. 先研究参考网站 `n-w-wolf.github.io` 的：
   - 信息架构
   - 首页 section 划分
   - Header / Footer
   - Astro 工程结构
   - Starlight Docs 结构
   - 响应式设计
   - GitHub Pages 部署方式
2. **只借鉴结构思想，不复制其代码、文案、Logo、图片或具体视觉实现。**
3. 在开始编码前，先输出：
   - 建议的网站 sitemap
   - 工程目录
   - 页面结构
   - 设计系统
   - 公开 / 私有信息边界
   - 第一阶段实施计划
4. 然后再开始实际构建。
5. 如果某些真实内容、照片、Logo、二维码等尚不存在：
   - 使用明确标记的 placeholder
   - 不生成假比赛照片
   - 不生成假机器人
   - 不虚构成绩
   - 不虚构队员
   - 不虚构历史信息
6. 完成后：
   - 本地运行网站
   - 检查 desktop
   - 检查 mobile
   - 检查 build
   - 修复报错
   - 检查 GitHub Pages 部署路径
   - 创建 GitHub repository
   - Push 到 `XJTU-ROBOCON-ECT` Organization

除非确有必要，不要在未经确认的情况下发布到最终生产环境。

------

# 1. 网站身份

正式组织名称：

**XJTUROBOCON**

正式组别名称：

**ELECTRONIC CONTROL TEAM**

Header 左上角第一版不使用图形 Logo。

采用纯文字：

```text
XJTUROBOCON
ELECTRONIC CONTROL TEAM
```

其中：

- `XJTUROBOCON` 为主要品牌文字
- `ELECTRONIC CONTROL TEAM` 为较小的辅助文字

未来预留 SVG Logo 插槽，例如：

```text
/public/assets/brand/ect.svg
```

但当前没有最终 Logo。

**不要自行设计一个 Logo 填进去。**

------

# 2. 核心品牌语

网站核心 slogan：

# Build something. Change something.

这是首页 Hero 的核心文案。

整体语气：

- 工程
- 克制
- 精确
- 年轻
- 有技术感
- 不浮夸
- 不使用营销公司式套话

不要使用：

- “赋能”
- “科技改变未来”
- “探索无限可能”
- “勇攀科技高峰”
- 大量空泛科技宣传语

------

# 3. 网站定位

网站有三个目标。

## 3.1 Public Face

向校内外展示：

- XJTUROBOCON 电控组是谁
- 电控组做什么
- ROBOCON 赛季
- 团队文化
- 培训体系
- 招新入口
- 可公开的学习资料

## 3.2 Recruitment

让第一次接触 ROBOCON / STM32 / 嵌入式 / 控制的本科生能够理解：

- 电控组是什么
- 加入后会学习什么
- 培训路线是什么
- 自己需要具备什么
- 可以从哪里开始学习

## 3.3 Public Learning Portal

长期逐步建立公开的电控学习资料。

未来可能包含：

- C Programming
- Git
- STM32
- GPIO
- Interrupt
- Timer / PWM
- UART
- DMA
- CAN / FDCAN
- Motor Control
- Sensors
- PID
- FreeRTOS
- State Machine
- Robot Software Architecture
- ROS2
- Computer Vision
- Engineering Practice

以及每章对应的公开示例代码。

------

# 4. 非公开边界

这一点必须严格执行。

这是一个公开网站。

## 禁止公开

不要在公开站点中出现：

- 当前赛季完整机器人架构
- R1 / R2 实现方案
- 当前比赛策略
- 路径规划细节
- 当前视觉方案
- 定位算法实现细节
- 当前状态机
- 当前自动流程
- CAN ID 表
- PCB 设计
- 接线细节
- 机器人完整代码
- PID 实际比赛参数
- 轨迹参数
- 标定参数
- 对手分析
- 比赛时间策略
- 赛场应急策略
- 内部故障记录
- 内部工作流
- 未公开的技术路线
- 队员个人信息
- 队员考勤记录

不要创建任何“看似隐藏、实际上仍然部署到了静态网站”的密码页面。

**静态部署出去的数据默认视为公开数据。**

------

# 5. GitHub 信息架构

公开官网：

```text
XJTU-ROBOCON-ECT.github.io
PUBLIC
```

第一版只需要创建这个网站仓库。

但是工程结构应该为未来留下扩展能力。

未来可能形成：

```text
XJTU-ROBOCON-ECT
│
├── XJTU-ROBOCON-ECT.github.io
│   PUBLIC
│   官网 + Public Docs
│
├── training-examples
│   PUBLIC / REVIEWED
│   通用培训示例
│
├── training-internal
│   PRIVATE
│   内部培训信息 / 考勤 / 组内资料
│
└── season-projects
    PRIVATE
    比赛工程
```

这次不要擅自创建全部仓库。

只需要确保当前网站未来容易与这些仓库协作。

------

# 6. 技术栈

采用：

```text
Astro
TypeScript
CSS
Starlight
GitHub Pages
```

优先保持：

- 静态生成
- 高性能
- 低 JS
- 良好 SEO
- 易长期维护
- Markdown 驱动 Docs

不要因为“看起来高级”就换成：

- Next.js
- 大型 React SPA
- 复杂 CMS
- 不必要的后端

除非存在明确技术理由。

------

# 7. 网站整体视觉目标

目标不是复制 Apple。

目标是借鉴 Apple 产品网页中的：

- 排版纪律
- 大面积留白
- 大字号
- 产品叙事
- 图像主导
- 克制动效
- Scroll-driven storytelling
- 极少视觉噪声
- 强烈的信息层级

视觉质量目标：

**Apple-like Level 2**

即：

- sticky section
- scroll reveal
- image scale
- subtle parallax
- mask reveal
- section transition
- light / dark scene transition
- blur / opacity / transform
- 滚动驱动叙事

暂时不要：

- 重度 WebGL
- 复杂 Three.js 场景
- 夸张粒子
- RGB 发光
- Hacker green
- Matrix 代码雨
- 满屏 HUD
- 鼠标跟随光斑
- 到处跳动的数据
- 过度动画

如果需要 scroll animation，可以选择成熟方案。

但优先使用：

```text
CSS
IntersectionObserver
原生 JS / TS
```

只有当效果确实需要时再引入 GSAP。

------

# 8. 响应式设计

要求：

**Desktop 和 Mobile 都是正式设计对象。**

不是：

> Desktop 很漂亮，Mobile 只保证不坏。

要求：

- Desktop 有完整 Apple-like storytelling
- Tablet 有合理调整
- Mobile 重新组织排版和动画
- 手机上标题不能简单粗暴缩小
- 图片裁切合理
- 导航清楚
- touch 操作正常
- 不因 scroll animation 导致卡顿

同时支持：

```css
prefers-reduced-motion
```

为不希望复杂动画的用户提供简化效果。

------

# 9. 首页结构

第一版首页暂时只使用以下 Section。

## 00 / HERO

核心：

```text
XJTUROBOCON
ELECTRONIC CONTROL TEAM

Build something.
Change something.
```

需要强视觉层级。

Hero 第一版以排版、留白和动效为主。

因为暂无正式高清素材，不要填入假的机器人主视觉。

可以预留：

```text
HERO_VISUAL_PLACEHOLDER
```

后续替换。

------

## 01 / ROBOCON 2027

当前赛季。

主题：

**ABU ROBOCON 2027**

**The Pursuit of Mustika Nusantara**

这里主要承担：

- 当前赛季入口
- ROBOCON 项目背景
- 当前团队正在准备 2027 赛季

不要公开：

- R1 技术细节
- R2 技术细节
- 战术
- 当前实现方案

允许使用概念级描述。

如果缺乏官方图片，不要擅自抓图作为正式素材。

预留素材位置。

------

## 02 / WHAT WE DO

解释“电控组是什么”。

重点表达：

电控组负责让机械结构真正成为机器人。

可以围绕：

```text
Sensing
Embedded Systems
Communication
Control
Autonomy
System Integration
```

建立概念叙事。

不要变成技术名词墙。

重点应该是：

```text
input
↓
computation
↓
decision
↓
control
↓
actuation
↓
feedback
```

让没有机器人基础的人也能理解。

------

## 03

不做。

不要创建 ROBOT SYSTEMS Section。

------

## 04

不做。

不要在首页创建完整 CONTROL STACK 展示。

------

## 05

不做。

不要创建 HOW WE BUILD Section。

------

## 06

不做。

第一版不要 FIELD NOTES。

------

## 07 / TEAM / HISTORY / IDENTITY

不要围绕某一年成绩做主页核心。

XJTUROBOCON 历史很长，不应让网站形成：

> 2026 才开始

这样的印象。

目前不要编写完整历史时间轴。

建立一个能够未来承载：

- 团队历史
- ROBOCON 历史
- 重要年份
- 荣誉
- 历届项目

的结构。

第一版可以使用 placeholder 或极简介绍。

不要虚构具体年份和事件。

------

## 08 / THE TEAM

介绍：

**西安交通大学 ROBOCON 机器人战队电控组**

内容重点：

- 电控是什么
- 我们负责什么
- 我们学习什么
- 我们如何参与机器人研发

不需要第一版制作成员墙。

不要使用：

```text
Leader
Member A
Member B
```

这样的结构。

------

## 09

首页不需要独立 OPEN DOCUMENTATION / LEARN Section。

但 Header 可以保留：

```text
文档
```

直接进入 `/docs/`。

------

## 10 / JOIN US

创建 Section 和完整视觉框架。

但：

**招新正文由我以后自己填写。**

因此只做：

- layout
- card
- CTA
- status slot
- time slot
- QR slot
- guide slot

内容统一从配置读取。

例如：

```text
siteConfig.recruitment
```

不要把招新文字硬编码进 `index.astro`。

使用 placeholder。

------

# 10. Header

希望类似高质量产品网站：

左侧：

```text
XJTUROBOCON
ELECTRONIC CONTROL TEAM
```

右侧根据最终结构设计。

第一版建议控制数量，不要导航爆炸。

例如：

```text
赛季
电控组
团队
培训
文档
加入我们
```

其中：

- 首页 section 使用 anchor
- Docs 使用 `/docs/`

Header 要有：

- desktop nav
- mobile menu
- scroll state
- active section
- 优秀 hover
- 合理 backdrop / transparency

不要照搬四足组 Header。

------

# 11. 培训系统

网站未来一个非常重要的模块是：

# Electronic Control Training

第一版需要搭出架构。

但不要求现在填完所有课程。

建议的信息结构：

```text
/docs/
│
├── start-here/
│
│   ├── introduction
│
├── training/
│
│   ├── overview
│   ├── schedule
│   ├── learning-resources
│   ├── notes
│   │
│   ├── stage-0/
│   ├── stage-1/
│   ├── stage-2/
│   ├── stage-3/
│   ├── stage-4/
│   └── stage-5/
│
└── contributing/
```

------

# 12. 培训路线

长期培训路线基于：

## Stage 0：准备出发

- 开发环境
- Git
- AI Agent
- 查资料与提问

## Stage 1：编程筑基

- C 语言
- 指针
- 结构体
- 枚举
- 宏
- `.c / .h`
- 基础代码规范

## Stage 2：让单片机工作

- STM32
- GPIO
- Interrupt
- Timer / PWM
- UART
- DMA
- CAN

注意教学依赖：

**Interrupt 应在需要它的 Timer / UART / DMA 内容之前讲清楚。**

## Stage 3：让机构动起来

- 电机
- 编码器
- 传感器
- 开环
- 闭环
- PID

## Stage 4：让机器人完成任务

- 状态机
- FreeRTOS
- 多电机协同
- 自动流程
- 故障处理
- 安全保护

## Stage 5：让机器人跑得更好

- 轨迹规划
- 底盘运动
- 定位
- ROS2
- CV
- 状态估计

第一版只搭目录和导航。

不要替我自动写完整课程。

------

# 13. 培训大纲页面

未来需要一个：

```text
Training Overview
培训大纲
```

它应该能够展示：

- Stage
- 章节
- 教学目标
- 前置知识
- 预计学习时间
- 培训时间
- 作业 / Task
- 示例代码
- 推荐资料

培训时间不要硬编码进页面。

设计可维护的数据结构。

例如：

```ts
TrainingModule {
  id
  stage
  title
  description
  estimatedHours
  scheduledDate
  prerequisites
  resources
  exampleRepo
}
```

具体实现可以根据 Astro / Starlight 最佳实践调整。

------

# 14. 每章节教学页面

网站未来要支持真正的图文教学。

每章结构建议标准化。

例如：

```text
Chapter Title

01 / What
这是什么

02 / Why
为什么需要

03 / How
它怎么工作

04 / STM32 Context
在 STM32 工程中它是什么

05 / Example
最小例程

06 / Common Mistakes
常见错误

07 / Exercise
练习

08 / Next
下一步
```

支持：

- Markdown
- 图片
- diagram
- code block
- admonition
- table
- formula
- internal link
- external reference
- GitHub example link

必须方便未来大量新增内容。

------

# 15. 教学代码

未来公开培训代码包括但不限于：

```text
examples/
│
├── c-basics/
├── gpio/
├── interrupt/
├── timer/
├── pwm/
├── uart/
├── dma/
├── can/
├── motor/
├── encoder/
├── sensor/
├── pid/
├── freertos/
├── state-machine/
├── chassis/
└── ...
```

可能进一步出现：

- 电机驱动
- 编码器
- CAN
- PID
- 底盘基础控制

注意：

这些必须是：

**教学示例**

不是：

**当前比赛机器人源码。**

二者必须明确隔离。

第一版不要虚构完整驱动实现。

只建立代码展示 / 链接机制。

------

# 16. 推荐学习网站

Docs 中建立：

```text
Recommended Resources
推荐学习资源
```

未来分类：

```text
C
Embedded
STM32
Git
Control
FreeRTOS
ROS2
CV
Tools
Documentation
```

要求：

- 不做杂乱链接堆
- 每个资源说明：
  - 学什么
  - 为什么推荐
  - 适合什么阶段
  - 是否作为主线资料
  - 是否只是补充

第一版可以只做模板。

不要擅自填大量未经审核的第三方资源。

------

# 17. 其他注意事项

建立：

```text
Training Notes
培训注意事项
```

未来用于：

- 开发环境要求
- 软件安装
- Git 规范
- 提问规范
- AI 使用规范
- 代码规范
- 作业提交方式
- 培训纪律

第一版建立页面结构和 placeholder。

------

# 18. 考勤

培训体系确实需要考勤。

但是：

# 不得将考勤公开部署在 GitHub Pages。

当前公开网站只允许存在：

```text
培训时间
培训计划
培训章节
```

具体成员：

- 姓名
- 学号
- 出勤情况
- 请假记录
- 作业完成情况

不得进入公开仓库。

请在工程 README / architecture docs 中记录建议：

未来建立：

```text
training-internal
PRIVATE
```

或者连接其他内部管理工具。

但这次不要自行建立公开 attendance 页面。

------

# 19. Docs 第一版

采用 Starlight。

第一版目标：

**搭框架，不填满。**

至少需要有：

```text
/docs/

/docs/start-here/

/docs/training/
  overview
  schedule
  learning-resources
  notes

/docs/training/stage-0/
/docs/training/stage-1/
/docs/training/stage-2/
/docs/training/stage-3/
/docs/training/stage-4/
/docs/training/stage-5/
```

每个 Stage 可以有：

```text
Coming soon
```

但页面不能显得像坏掉的网站。

做成：

> Documentation under construction

这种有意设计的状态。

------

# 20. 内容语言

网站：

**中文为主，英文承担视觉标题与技术关键词。**

例如：

```text
ELECTRONIC CONTROL TEAM

电控组
```

或者：

```text
TRAINING

培训体系
```

不要做全站中英双语切换。

暂时不要做 i18n。

------

# 21. 素材策略

目前真实视觉素材之后补充。

所以第一版必须：

1. 设计完整 image slot
2. 保证没有图片时页面仍然漂亮
3. 使用：
   - typography
   - whitespace
   - grid
   - subtle geometry
   - line
   - mask
   - motion
   - code / signal-inspired abstract elements

来建立视觉系统。

可以有非常抽象的控制系统视觉语言。

例如：

```text
SIGNAL
FEEDBACK
STATE
CONTROL
ACTUATION
```

但要极其克制。

不要把网站做成：

“赛博朋克控制台”。

------

# 22. 设计语言

建议整体：

- 黑
- 白
- 灰
- 少量 XJTU / ECT accent color

第一版不要自己决定非常强烈的品牌色。

颜色系统写成 CSS variables：

```css
--color-bg
--color-text
--color-muted
--color-border
--color-accent
```

以后容易替换。

Typography 需要特别重视。

网页高级感主要来自：

- line-height
- max-width
- grid
- font-size
- letter-spacing
- section spacing

不要靠 box-shadow 堆质感。

------

# 23. 工程结构

不要把整个首页写成一个 1000 行 `index.astro`。

适当组件化。

建议：

```text
src/
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.astro
│   │   └── SiteFooter.astro
│   │
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── Season.astro
│   │   ├── WhatWeDo.astro
│   │   ├── Identity.astro
│   │   ├── Team.astro
│   │   └── Join.astro
│   │
│   └── ui/
│
├── config/
│   ├── site.ts
│   └── navigation.ts
│
├── content/
│   └── docs/
│
├── data/
│   └── training/
│
├── pages/
│   └── index.astro
│
└── styles/
    ├── global.css
    ├── tokens.css
    └── docs.css
```

不要求完全照搬。

如果有更合理结构，可以调整。

但必须保持清楚。

------

# 24. Site Config

所有高频修改信息集中维护。

例如：

```ts
siteConfig = {
  organization,
  teamName,
  teamNameZh,
  slogan,
  season,
  recruitment,
  links
}
```

特别是：

- 招新状态
- 招新时间
- 二维码
- GitHub
- 联系方式
- 当前赛季

不要散落在组件中。

------

# 25. GitHub Pages

配置 GitHub Actions：

```text
push main
↓
astro build
↓
deploy
↓
GitHub Pages
```

确保：

- Organization Pages base path 正确
- asset URL 正确
- `/docs/` 正确
- refresh 正确
- sitemap 正确
- favicon placeholder 正确
- 404 正确

------

# 26. README

创建高质量 README。

至少说明：

```text
XJTUROBOCON Electronic Control Team Website

Overview
Tech Stack
Local Development
Project Structure
Content Editing
Docs Editing
Assets
Deployment
Information Classification
Contributing
```

其中必须有：

# Information Classification

说明：

```text
PUBLIC
允许进入本仓库

INTERNAL
禁止进入本仓库

SEASON CONFIDENTIAL
禁止进入本仓库
```

提醒未来维护者：

**不要因为 Git 仓库方便，就把内部比赛资料上传到公开网站仓库。**

------

# 27. Git workflow

初始化：

```text
main
```

后续建议：

```text
feature/*
docs/*
fix/*
```

第一版完成后：

- git status clean
- commit history 清晰
- 不提交 node_modules
- 不提交 build cache
- 不提交 secret
- 不提交 credential

------

# 28. 性能要求

目标：

- 首屏快速
- 图片 lazy loading
- 控制 JS bundle
- 动画 GPU-friendly
- 避免 layout thrashing
- 不滥用 scroll listener
- CLS 尽可能低
- mobile 性能良好

尽量保证 Lighthouse：

```text
Performance
Accessibility
Best Practices
SEO
```

都处于高水平。

不要为了动画牺牲基本性能。

------

# 29. Accessibility

至少考虑：

- semantic HTML
- keyboard navigation
- focus state
- ARIA
- color contrast
- alt text
- reduced motion
- mobile navigation accessibility

------

# 30. 第一阶段完成标准

最终第一版应该得到：

```text
PUBLIC SITE

Homepage
├── Hero
├── ROBOCON 2027
├── What We Do
├── Identity / History framework
├── Team
└── Join Us framework

Docs
├── Start Here
└── Training
    ├── Overview
    ├── Schedule
    ├── Resources
    ├── Notes
    └── Stage 0–5 skeleton
```

并拥有：

```text
Astro
Starlight
Responsive design
Apple-like L2 motion
GitHub Pages configuration
README
Information boundary documentation
```

------

# 31. 第一版明确不做

不要因为“以后可能有”就现在全部实现。

第一版不要做：

- R1 页面
- R2 页面
- Control Stack 首页 section
- How We Build
- Field Notes
- Homepage Learn Section
- 2026 专题
- 历年详细成绩
- 成员墙
- 考勤公开页面
- 内部知识库
- 比赛代码
- 登录系统
- 数据库
- CMS
- WebGL
- Three.js
- 当前机器人技术公开
- 自动生成 Logo
- 自动生成虚假机器人素材

------

# 32. 最终设计原则

整个项目始终遵循：

## Content first.

## Structure before decoration.

## Motion supports meaning.

## Public does not mean everything.

## Build something. Change something.

最终效果应该让访问者感受到：

这是一个真正做机器人、重视工程、重视技术传承的大学生团队。

而不是一个套了“科技模板”的学生社团网站。