import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IHistoryCC {}

export const HistoryCC: FC<IHistoryCC> = () => {
  return (
    <PageLayout title="Історія ЦК">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
