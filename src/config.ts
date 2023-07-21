import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'inicio'
    },
    blog: {
        path: '/blog',
        title: 'bitácora'
    },
    about: {
        path: '/about',
        title: 'descripción'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Bitácora',
    title: 'Bitácora',
    description: 'Seguimiento de obra del proyecto Asador en el Saltito',
    url: 'https://astro-ink.vercel.app',
    githubUrl: 'https://github.com/moisesescarcega/bitacorasaltito',
    listDrafts: true,
    image: 'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
    // YT video channel Id (used in media.astro)
    ytChannelId: '',
    // Optional, user/author settings (example)
    // Author: name
    author: '', // Example: Fred K. Schott
    // Author: Twitter handler
    authorTwitter: '', // Example: FredKSchott
    // Author: Image external source
    authorImage: '', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
    // Author: Bio
    authorBio: 'Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro'
}

// Ink - Theme configuration
export const PAGE_SIZE = 8
export const USE_POST_IMG_OVERLAY = false
export const USE_MEDIA_THUMBNAIL = true

export const USE_AUTHOR_CARD = true
export const USE_SUBSCRIPTION = false /* works only when USE_AUTHOR_CARD is true */
