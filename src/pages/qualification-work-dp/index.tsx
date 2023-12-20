import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IQualificationWorkDp {}

export const QualificationWorkDp: FC<IQualificationWorkDp> = () => {
  return (
    <PageLayout title="Виконання кваліфікаційної роботи у вигляді дипломного проекту">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
