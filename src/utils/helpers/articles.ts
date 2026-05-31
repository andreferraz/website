import fs from 'node:fs'
import path from 'node:path'
import { type Locale, locales as routingLocales } from '@/i18n/routing'
import type { ArticleMeta, ArticleMetaWithReadingTime } from '@/utils/typings/ArticleMeta'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'articles')
const WORDS_PER_MINUTE = 200
const META_FILE_SUFFIX = '.meta.ts'
const MDX_FILE_SUFFIX = '.mdx'
const KNOWN_LOCALES = new Set(routingLocales.map(({ locale }) => locale))

interface ArticleMetaEntry {
  dir: string
  locale: Locale
  slug: string
}

export function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

async function loadMetaEntry(entry: ArticleMetaEntry): Promise<ArticleMeta> {
  const mod = await import(`@/content/articles/${entry.dir}/${entry.slug}.${entry.locale}.meta`)
  return (mod.meta ?? mod.default) as ArticleMeta
}

function parseMetaEntry(dir: string, fileName: string): ArticleMetaEntry | null {
  if (!fileName.endsWith(META_FILE_SUFFIX)) return null

  const withoutSuffix = fileName.slice(0, -META_FILE_SUFFIX.length)
  const localeSeparatorIndex = withoutSuffix.lastIndexOf('.')
  if (localeSeparatorIndex <= 0) return null

  const slug = withoutSuffix.slice(0, localeSeparatorIndex)
  const localeValue = withoutSuffix.slice(localeSeparatorIndex + 1)

  if (!KNOWN_LOCALES.has(localeValue as Locale)) return null

  return {
    dir,
    locale: localeValue as Locale,
    slug,
  }
}

function getMetaEntries(dir: string): ArticleMetaEntry[] {
  const dirPath = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(dirPath)) return []

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => parseMetaEntry(dir, entry.name))
    .filter((entry): entry is ArticleMetaEntry => entry !== null)
}

function getAlternates(entries: ArticleMetaEntry[], locale: Locale) {
  return entries
    .filter((entry) => entry.locale !== locale)
    .map((entry) => ({ locale: entry.locale, slug: entry.slug }))
}

function getArticleDirs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

function resolveMdxFileName(dir: string, locale: Locale, slug: string): string | null {
  const slugAndLocaleFileName = `${slug}.${locale}${MDX_FILE_SUFFIX}`
  if (fs.existsSync(path.join(CONTENT_DIR, dir, slugAndLocaleFileName))) {
    return slugAndLocaleFileName
  }

  return null
}

function readMdxContent(
  dir: string,
  locale: Locale,
  slug: string,
): { content: string; fileName: string } | null {
  const fileName = resolveMdxFileName(dir, locale, slug)
  if (!fileName) return null
  const mdxPath = path.join(CONTENT_DIR, dir, fileName)
  return { content: fs.readFileSync(mdxPath, 'utf-8'), fileName }
}

export async function getArticlesForLocale(locale: Locale): Promise<ArticleMetaWithReadingTime[]> {
  const dirs = getArticleDirs()
  const results: ArticleMetaWithReadingTime[] = []

  for (const dir of dirs) {
    const entries = getMetaEntries(dir)
    const entry = entries.find((metaEntry) => metaEntry.locale === locale)
    if (!entry) continue

    const meta = await loadMetaEntry(entry)

    const mdx = readMdxContent(dir, locale, entry.slug)
    if (!mdx) continue

    const readingTimeMinutes = calculateReadingTime(mdx.content)
    results.push({
      ...meta,
      slug: entry.slug,
      alternates: getAlternates(entries, locale),
      readingTimeMinutes,
      dir,
      contentFileName: mdx.fileName,
    })
  }

  return results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(
  slug: string,
  locale: Locale,
): Promise<ArticleMetaWithReadingTime | null> {
  const dirs = getArticleDirs()

  for (const dir of dirs) {
    const entries = getMetaEntries(dir)
    const entry = entries.find(
      (metaEntry) => metaEntry.locale === locale && metaEntry.slug === slug,
    )
    if (!entry) continue

    const meta = await loadMetaEntry(entry)

    const mdx = readMdxContent(dir, locale, slug)
    if (!mdx) continue

    const readingTimeMinutes = calculateReadingTime(mdx.content)
    return {
      ...meta,
      slug,
      alternates: getAlternates(entries, locale),
      readingTimeMinutes,
      dir,
      contentFileName: mdx.fileName,
    }
  }

  return null
}

export async function getAllArticleSlugs(): Promise<{ locale: Locale; slug: string }[]> {
  const dirs = getArticleDirs()
  const results: { locale: Locale; slug: string }[] = []

  for (const dir of dirs) {
    const entries = getMetaEntries(dir)
    for (const entry of entries) {
      results.push({ locale: entry.locale, slug: entry.slug })
    }
  }

  return results
}
