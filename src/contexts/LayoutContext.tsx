import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { createContext, useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';

interface LayoutContextData {
  menu: boolean,
  setMenu: any
}

const LayoutContext = createContext({} as LayoutContextData);


export const LayoutProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const { push } = useRouter()
  useEffect(() => {
    if (menu) {
      setMenu(false)
    }
  }, [push])
  return (
    <LayoutContext.Provider value={{ menu, setMenu }}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Layout>
          {children}
        </Layout>
      </AnimatePresence>
    </LayoutContext.Provider>
  )
}



const useLayout = () => useContext(LayoutContext);

export default useLayout;