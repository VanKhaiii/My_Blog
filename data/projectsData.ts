import type { Project } from '@/types/data';

const projectsData: Project[] = [
  // {
  //   type: 'work',
  //   title: 'EcomHeat - Manage Market Share, Monitor Sales Performance, Optimize Store Operation',
  //   description:
  //     'The pioneering E-commerce data intelligence platform in Vietnam for brands with the most granular data information.',
  //   imgSrc: '/static/images/projects/ecom-heat.png',
  //   url: 'https://youneteci.com/en/eci-ecomheat/?ref=karhdo.dev',
  //   builtWith: ['React', 'Bootstrap', 'FeathersJS', 'MySQL', 'RabbitMQ'],
  // },
  // {
  //   type: 'work',
  //   title: 'Military 7A Bidding',
  //   description:
  //     'Creating a web-based system designed for the efficient management of bidding packages related to medical supplies information.',
  //   imgSrc: '/static/images/projects/military-7a-bidding.png',
  //   builtWith: ['NestJS', 'PosgreSQL', 'JWT', 'VueJS', 'Tailwind'],
  // },
  {
    type: 'self',
    title: 'Credit Risk Model Stability',
    description: `The topic explores Credit Risk Model Stability, focusing on evaluating how consistently a credit risk model performs over time under varying economic conditions.`,
    imgSrc: '/static/images/projects/cs116.jpg',
    builtWith: ['Python'],
  },
  {
    type: 'self',
    title: 'Course Recommendation System For Online Learning Platforms',
    description: `The topic focuses on developing a Course Recommendation System for an Online Learning Platform to personalize the learning experience for users.`,
    imgSrc: '/static/images/projects/cs313.png',
    builtWith: ['Python'],
  },
  {
    type: 'self',
    title: 'Scene Text Detection and Recognition on Vietnamese',
    description: `The topic focuses on Scene Text Detection and Recognition in Vietnamese, aiming to develop algorithms that can accurately detect and interpret text in images for the Vietnamese language.`,
    imgSrc: '/static/images/projects/cs406.png',
    builtWith: ['Python'],
  },
];

export default projectsData;
