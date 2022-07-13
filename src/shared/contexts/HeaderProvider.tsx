import { createContext, PropsWithChildren, useMemo } from 'react'

interface HeaderProviderState {
  value: HeaderContextType
}

interface HeaderContextType {
  headerTabsValue: number
  setHeaderTabsValue: React.Dispatch<React.SetStateAction<number>>
}

export const HeaderContext = createContext<HeaderContextType>(null!)

function HeaderProvider({ children, value }: PropsWithChildren<HeaderProviderState>) {
  const { headerTabsValue, setHeaderTabsValue } = value

  const headerProviderValue = useMemo(
    () => ({ headerTabsValue, setHeaderTabsValue }),
    [headerTabsValue, setHeaderTabsValue],
  )
  return <HeaderContext.Provider value={headerProviderValue}>{children}</HeaderContext.Provider>
}

export default HeaderProvider
