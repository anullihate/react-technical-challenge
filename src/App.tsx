import './App.css'
import AppRoutes from './shared/routes'
import CustomizedTheme from './shared/theme/CustomizedTheme'

function App() {
  return (
    <CustomizedTheme>
      <AppRoutes />
    </CustomizedTheme>
  )
}

export default App
