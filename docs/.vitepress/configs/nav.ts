import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav/', activeMatch: '/nav/' },
  { text: '博客', link: 'https://liwenkai.netlify.app/', activeMatch: '/blog/' },
  { text: '项目', link: 'https://liwenkai.netlify.app/projects', activeMatch: '/project/' }
]
