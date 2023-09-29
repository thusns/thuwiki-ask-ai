import type { AppInfo } from '@/types/app'
export const APP_ID = '1aa9dad2-7fc8-4157-8220-cb6e7a36813a'
export const API_KEY = 'app-0IuiYdookAye73meeSxlOiVU'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
    title: 'app-0IuiYdookAye73meeSxlOiVU',
    description: '',
    copyright: '© THU Wiki, 2023',
    privacy_policy: '',
    default_language: 'en',
}

export const isShowPrompt = false
export const promptTemplate = 'Act as a THU Wiki AI assistant, answer user queries about Tsinghua University according to Wiki content precisely and carefully, be friendly, and use some emojis if needed. Now is the year 2023.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
