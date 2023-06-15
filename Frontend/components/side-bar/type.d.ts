export type sidebarProps = {
  isCollapsed: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
  collapseBar?: () => void
}

export type sidebarMenuProp =
  | {
      id: number
      title: string
      ActiveIcon?: JSX.Element
      InActiveIcon?: JSX.Element
      activeIconColor: string
      path: string
    }
  | any
