import clsx from "clsx"
import {FC} from "react"

import {IGalleriesType} from "@/types/galleries.interface"

import styles from "./index.module.scss"

interface IGalleries {
  data: IGalleriesType
}

export const Galleries: FC<IGalleries> = ({data}) => {
  return (
    <div className={clsx(styles.Galleries)}>
      {data.map((e, i) => (
        <div className={clsx(styles.Galleries_col)} key={i}>
          {e.map((el, ind) => (
            <img
              className={clsx(styles.Galleries_col_img)}
              src={el}
              alt=""
              key={ind}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
