// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "Van Khaiii's Site",
  author: 'Van Khai',
  fullname: 'Truong Van Khai',
  headerTitle: "Khaiii's Blog",
  description: 'Keep your face always toward the sunshine, and shadows will fall behind you.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://vankhai_blog.09',
  siteRepo: 'https://github.com/VanKhaiii',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'truongvankhai0906@gmail.com',
  github: 'https://github.com/VanKhaiii',
  facebook: 'https://www.facebook.com/hiho.hihu.9/',
  linkedin: 'https://www.linkedin.com/in/tr%C6%B0%C6%A1ng-v%C4%83n-kh%E1%BA%A3i-a14450250/',
  twitter: 'https://twitter.com',
  youtube: 'https://www.youtube.com/@TruongVanKhai-ys9dr',
  locale: 'en-US',
  socialAccounts: {
    github: 'Van Khaiii',
    linkedin: 'Truong Van Khai',
    facebook: 'Khai Truong',
  },
  analytics: {
    umamiWebsiteId: '7b7953a7-de2e-4e30-9a29-1a4aee05c627',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
