import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface ISectionImg {
  title?: string
  img?: string
  index: number
}

export const SectionImg: FC<ISectionImg> = ({title, img, index}) => {
  return (
    <div
      className={clsx(
        styles.SectionImg,
        styles[index % 2 == 0 ? "left" : "right"],
      )}
    >
      {title && <div className={clsx(styles.SectionImg_title)}>{title}</div>}
      {img && <img className={clsx(styles.SectionImg_img)} src={img} alt="" />}
    </div>
  )
}
