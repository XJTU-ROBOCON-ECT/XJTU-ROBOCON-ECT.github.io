export interface RecruitmentConfig {
  status?: string;
  time?: string;
  applicationUrl?: string;
  qrCode?: string;
  guideUrl?: string;
}

export const siteConfig = {
  organization: 'XJTU-ROBOCON-ECT',
  teamName: 'ELECTRONIC CONTROL TEAM',
  teamNameZh: '西安交通大学 ROBOCON 机器人战队电控组',
  slogan: 'Build something. Change something.',
  season: {
    name: 'ABU ROBOCON 2027',
    theme: 'The Pursuit of Mustika Nusantara',
  },
  recruitment: {} satisfies RecruitmentConfig,
  links: {
    github: 'https://github.com/XJTU-ROBOCON-ECT',
    docs: '/docs/',
  },
} as const;
