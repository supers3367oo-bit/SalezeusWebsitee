import { createContext, useContext, type ReactNode } from 'react'
import type { AdminFeaturedCase } from '../admin/types/adminContent'

const DraftFeaturedCasesContext = createContext<AdminFeaturedCase[] | null>(null)

export function DraftFeaturedCasesProvider({
  cases,
  children,
}: {
  cases: AdminFeaturedCase[]
  children: ReactNode
}) {
  return (
    <DraftFeaturedCasesContext.Provider value={cases}>
      {children}
    </DraftFeaturedCasesContext.Provider>
  )
}

export function useDraftFeaturedCases() {
  return useContext(DraftFeaturedCasesContext)
}
