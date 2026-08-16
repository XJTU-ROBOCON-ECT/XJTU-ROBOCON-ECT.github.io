import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://XJTU-ROBOCON-ECT.github.io',
  integrations: [
    starlight({
      title: 'XJTUROBOCON 电控组文档',
      description: '西安交通大学 ROBOCON 机器人战队电控组公开培训与学习文档。',
      favicon: '/favicon.svg',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/XJTU-ROBOCON-ECT',
        },
      ],
      sidebar: [
        { label: '返回官网', link: '/' },
        { label: '文档首页', slug: 'docs' },
        {
          label: '开始',
          items: [{ slug: 'docs/start-here' }],
        },
        {
          label: '培训体系',
          items: [
            { slug: 'docs/training' },
            { slug: 'docs/training/overview' },
            { slug: 'docs/training/schedule' },
            { slug: 'docs/training/learning-resources' },
            { slug: 'docs/training/notes' },
            {
              label: 'Stage 0 · 准备出发',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-0' } }],
            },
            {
              label: 'Stage 1 · 编程筑基',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-1' } }],
            },
            {
              label: 'Stage 2 · 单片机基础',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-2' } }],
            },
            {
              label: 'Stage 3 · 机构控制',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-3' } }],
            },
            {
              label: 'Stage 4 · 任务系统',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-4' } }],
            },
            {
              label: 'Stage 5 · 系统进阶',
              collapsed: true,
              items: [{ autogenerate: { directory: 'docs/training/stage-5' } }],
            },
          ],
        },
        {
          label: '参与维护',
          items: [{ slug: 'docs/contributing' }],
        },
      ],
      customCss: ['./src/styles/docs.css'],
    }),
    sitemap(),
  ],
});
