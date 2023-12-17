import clsx from "clsx"
import React, {FC} from "react"

import styles from "./index.module.scss"

interface IPageLayout {
  title?: string
  description?: string
  sectionID?: string
  children: React.ReactNode
}

export const PageLayout: FC<IPageLayout> = ({
  title,
  description,
  sectionID,
  children,
}) => {
  return (
    <div id={sectionID} className={clsx(styles.page)}>
      <div className={clsx(styles.page_content)}>
        <div className={clsx(styles.page_content_inner)}>
          {title && (
            <div className={clsx(styles.page_content_header)}>
              <div className={clsx(styles.page_content_header_title)}>
                {title}
              </div>
              {description && (
                <div className={clsx(styles.page_content_header_des)}>
                  {description}
                </div>
              )}
            </div>
          )}
          <div className={clsx(styles.page_content_inner_content)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
