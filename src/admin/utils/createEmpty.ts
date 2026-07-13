import type {
  AdminInsight,
  AdminProject,
  AdminProjectBlock,
  AdminService,
  AdminTeamMember,
  BilingualText,
} from '../types/adminContent'
import { bi } from './richText'

export function slugifyKey(text: string, fallback = 'item'): string {
  const ascii = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  return ascii || fallback
}

export function uniqueSlug(base: string, existing: string[]): string {
  const root = slugifyKey(base, 'item')
  if (!existing.includes(root)) return root
  let n = 2
  while (existing.includes(`${root}-${n}`)) n += 1
  return `${root}-${n}`
}

export function newBlockId(): string {
  return `blk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export function emptyBi(en = '', ar = ''): BilingualText {
  return bi(en, ar)
}

export function createEmptyTeamMember(existingIds: string[]): AdminTeamMember {
  let id = `member-${Date.now().toString(36)}`
  while (existingIds.includes(id)) {
    id = `member-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`
  }
  return {
    id,
    src: '',
    realSrc: '',
    name: emptyBi('New member', 'عضو جديد'),
    role: emptyBi('Role', 'الدور'),
    firstName: emptyBi('New', 'جديد'),
    heroName: emptyBi('New Member', 'New Member'),
    bio: emptyBi('', ''),
    aboutBio: emptyBi('', ''),
  }
}

export function createEmptyService(existingSlugs: string[]): AdminService {
  const slug = uniqueSlug('new-service', existingSlugs)
  return {
    slug,
    image: '',
    variant: 'showcase',
    float: 0,
    showOnHome: false,
    title: emptyBi('New service', 'خدمة جديدة'),
    tagline: emptyBi('', ''),
    desc: emptyBi('', ''),
    heroSummary: emptyBi('', ''),
    aboutHeadline: emptyBi('', ''),
    aboutParagraphs: [emptyBi('', '')],
  }
}

export function createEmptyProject(existingSlugs: string[], nextId: number): AdminProject {
  const slug = uniqueSlug('new-project', existingSlugs)
  return {
    id: nextId,
    slug,
    image: '',
    heroImage: '',
    images: [],
    blocks: [],
    year: new Date().getFullYear(),
    service: 'branding',
    showOnHome: false,
    client: emptyBi('New client', 'عميل جديد'),
    field: emptyBi('Field', 'المجال'),
    industry: emptyBi('Industry', 'الصناعة'),
    serviceLabel: emptyBi('Branding', 'العلامة التجارية'),
    summary: emptyBi('', ''),
    outcomeLine: emptyBi('', ''),
    challenge: emptyBi('', ''),
    approach: emptyBi('', ''),
    result: emptyBi('', ''),
  }
}

export function createEmptyInsight(existingSlugs: string[]): AdminInsight {
  const slug = uniqueSlug('new-article', existingSlugs)
  const today = new Date().toISOString().slice(0, 10)
  return {
    slug,
    coverImage: '',
    cardImage: '',
    publishedAt: today,
    readingTimeMinutes: 3,
    featured: false,
    showOnHome: false,
    layout: 'standard',
    title: emptyBi('New article', 'مقال جديد'),
    excerpt: emptyBi('', ''),
    authorName: emptyBi('Salezeus', 'سيلزيوس'),
    authorRole: emptyBi('Editorial', 'التحرير'),
    service: emptyBi('Branding', 'العلامة التجارية'),
    industry: emptyBi('Startups', 'الشركات الناشئة'),
    topics: [],
    content: [],
  }
}

export function migrateProjectImagesToBlocks(
  images: AdminProject['images'],
  blocks: AdminProjectBlock[] | undefined,
): AdminProjectBlock[] {
  if (blocks && blocks.length > 0) return blocks
  return (images ?? []).map((img) => ({
    id: img.id || newBlockId(),
    type: 'image' as const,
    src: img.src,
    alt: img.alt,
  }))
}

export function createEmptyProjectBlock(
  type: AdminProjectBlock['type'],
): AdminProjectBlock {
  const id = newBlockId()
  switch (type) {
    case 'image':
      return { id, type: 'image', src: '', alt: emptyBi('', '') }
    case 'text':
      return { id, type: 'text', title: emptyBi('', ''), body: emptyBi('', '') }
    case 'video':
      return { id, type: 'video', url: '', caption: emptyBi('', '') }
    case 'link':
      return {
        id,
        type: 'link',
        url: '',
        title: emptyBi('Link title', 'عنوان الرابط'),
        description: emptyBi('', ''),
      }
  }
}
