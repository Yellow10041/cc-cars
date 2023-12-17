import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IMaterialBase {}

export const MaterialBase: FC<IMaterialBase> = () => {
  return (
    <PageLayout title="Матеріально-технічна база ЦК">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
