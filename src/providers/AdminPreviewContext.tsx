import { createContext, useContext, type ReactNode } from 'react'

const AdminPreviewContext = createContext(false)

/** When true, public sections should skip scroll-pin / GSAP and use static layouts. */
export function AdminPreviewProvider({ children }: { children: ReactNode }) {
  return (
    <AdminPreviewContext.Provider value={true}>{children}</AdminPreviewContext.Provider>
  )
}

export function useAdminPreview() {
  return useContext(AdminPreviewContext)
}
