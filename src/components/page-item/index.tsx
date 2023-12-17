import clsx from "clsx"
import React, {FC} from "react"

import styles from "./index.module.scss"

interface IPageItem {
  title?: string
  content?: React.ReactNode
}

export const PageItem: FC<IPageItem> = ({title, content}) => {
  return (
    <div className={clsx(styles.PageItem)}>
      {title && <div className={clsx(styles.PageItem_title)}>{title}</div>}
      {content}
    </div>
  )
}
