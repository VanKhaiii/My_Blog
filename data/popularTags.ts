import { BrandIconType } from '@/components/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/python',
    iconType: 'Python',
    slug: 'javascript',
    title: 'Python',
  },
  {
    href: '/tags/database',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
];

export default popularTags;
