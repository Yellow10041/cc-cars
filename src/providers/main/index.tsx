import * as React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {MainLayout} from "../../layouts/main"
import {pages} from "../../pages"
import {Footer} from "../../widgets/footer"
import {Header} from "../../widgets/header"

interface IMainProviderProps {}

const MainProvider: React.FunctionComponent<IMainProviderProps> = () => {
  return (
    <BrowserRouter basename="/">
      <MainLayout>
        <Routes>
          {pages.map((e, i) => (
            <Route path={e.path} element={<e.Component />} key={i} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default MainProvider
