import clsx from "clsx"
import React, {Children, FC} from "react"

import {Footer} from "../../widgets/footer"
import {Header} from "../../widgets/header"

import styles from "./index.module.scss"

interface IMainLayout {
  children: React.ReactNode
}

export const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <div className={clsx(styles.MainLayout)}>
      <Header />
      <div className={clsx(styles.MainLayout_content)}>
        <div className={clsx(styles.MainLayout_content_inner)}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
