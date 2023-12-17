import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IMethodologicalKP {}

export const MethodologicalKP: FC<IMethodologicalKP> = () => {
  return (
    <PageLayout title="Методичні рекомендації до КР">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
