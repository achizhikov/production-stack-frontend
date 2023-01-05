import { Suspense, useState } from 'react'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'
import { Modal } from 'shared/ui/Modal/Modal'

function App() {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>trig</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eaque minus error perferendis, tempora perspiciatis explicabo sit
          commodi odio maxime delectus est odit consequatur ab tenetur
          temporibus. Mollitia, adipisci hic?
        </Modal>
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
