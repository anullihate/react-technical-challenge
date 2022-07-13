import { useContext } from 'react'
import { MySpeeches, NewSpeech, SearchSpeeches } from './SpeechPanels'
import { HeaderContext } from '../../shared/contexts/HeaderProvider'
import { HeaderPanel } from '../../shared/layouts/Header'

function Speech() {
  const headerContext = useContext(HeaderContext)
  const { headerTabsValue } = headerContext
  return (
    <>
      <HeaderPanel value={headerTabsValue} index={0}>
        <MySpeeches />
      </HeaderPanel>
      <HeaderPanel value={headerTabsValue} index={1}>
        <NewSpeech />
      </HeaderPanel>
      <HeaderPanel value={headerTabsValue} index={2}>
        <SearchSpeeches />
      </HeaderPanel>
    </>
  )
}

export default Speech
