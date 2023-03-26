import type { project } from './components/type'

type projectData = {
  title: string
  items: project[]
}

export const PROJECT_DATA: projectData[] = [
  {
    title: 'Vue',
    items: [
      {
        title: 'element-plus-vite-music',
        desc: '☀️ 利用vite+vue+element-plus+tailwindcss+typescript搭建的一个在线听歌web项目',
        link: 'https://github.com/liwenka1/element-plus-vite-music',
        src: '../../public/element-plus-vite-music.png'
      }
    ]
  }
]
