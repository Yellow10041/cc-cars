import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface IImg {
  type?: "h" | "v"
  size?: "small"
  src: string
}

export const Img: FC<IImg> = ({type = "h", src, size = ""}) => {
  return (
    <img
      className={clsx(styles.Img, styles[type], styles[size])}
      src={src}
      alt=""
    />
  )
}
