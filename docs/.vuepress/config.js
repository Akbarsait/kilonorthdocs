import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'en-US',
  title: 'KiloNorth Docs',
  description: 'Documentation for the KiloNorth EV Charging App',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  theme: defaultTheme({
    logo: '/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Credits', link: '/credits.html' },
      { text: 'About', link: 'https://kilonorth.netlify.app/about' },
      { text: 'Contact', link: 'https://kilonorth.netlify.app/contact' },
    ],
    sidebar: [
      {
        text: 'Basics',
        collapsible: true,
        children: [
          '/basics/using-the-map.md',
          '/basics/finding-chargers.md',
        ],
      },
      {
        text: 'Charging & History',
        collapsible: true,
        children: [
          '/charging/logging-sessions.md',
          '/charging/viewing-history.md',
          '/charging/managing-history.md',
        ],
      },
      {
        text: 'Analytics',
        collapsible: true,
        children: [
          '/analytics/insights.md',
        ],
      },
      {
        text: 'Design Standards',
        collapsible: true,
        children: [
          '/standards/branding-standards.md',
        ],
      },
    ],
  }),
})
