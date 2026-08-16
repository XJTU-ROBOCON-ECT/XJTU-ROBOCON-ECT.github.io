export type TrainingStageId = 0 | 1 | 2 | 3 | 4 | 5;

export interface TrainingResource {
  label: string;
  url: string;
}

export interface TrainingModule {
  id: string;
  stage: TrainingStageId;
  title: string;
  description: string;
  estimatedHours?: number;
  scheduledDate?: string;
  prerequisites: string[];
  resources: TrainingResource[];
  exampleRepo?: string;
}

export const trainingModules: TrainingModule[] = [
  {
    id: 'stage-0',
    stage: 0,
    title: '准备出发',
    description: '开发环境、Git、AI Agent、资料检索与提问方法。',
    prerequisites: [],
    resources: [],
  },
  {
    id: 'stage-1',
    stage: 1,
    title: '编程筑基',
    description: 'C 语言、指针、结构体、枚举、宏与基础工程规范。',
    prerequisites: ['Stage 0'],
    resources: [],
  },
  {
    id: 'stage-2',
    stage: 2,
    title: '让单片机工作',
    description: 'STM32、GPIO、中断、定时器、PWM、UART、DMA 与 CAN。',
    prerequisites: ['Stage 1'],
    resources: [],
  },
  {
    id: 'stage-3',
    stage: 3,
    title: '让机构动起来',
    description: '电机、编码器、传感器、开环、闭环与 PID。',
    prerequisites: ['Stage 2'],
    resources: [],
  },
  {
    id: 'stage-4',
    stage: 4,
    title: '让机器人完成任务',
    description: '状态机、FreeRTOS、多电机协同、故障处理与安全保护。',
    prerequisites: ['Stage 3'],
    resources: [],
  },
  {
    id: 'stage-5',
    stage: 5,
    title: '让机器人跑得更好',
    description: '轨迹规划、底盘运动、定位、ROS2、CV 与状态估计。',
    prerequisites: ['Stage 4'],
    resources: [],
  },
];
