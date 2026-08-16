export interface NavigationItem {
  label: string;
  href: string;
  section?: string;
}

export const navigation: NavigationItem[] = [
  { label: '赛季', href: '#season', section: 'season' },
  { label: '电控组', href: '#what-we-do', section: 'what-we-do' },
  { label: '团队', href: '#identity', section: 'identity' },
  { label: '培训', href: '/docs/training/' },
  { label: '文档', href: '/docs/' },
  { label: '加入我们', href: '#join', section: 'join' },
];
