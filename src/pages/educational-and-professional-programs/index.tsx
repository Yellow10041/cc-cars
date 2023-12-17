import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IEducationalPrograms {}

export const EducationalPrograms: FC<IEducationalPrograms> = () => {
  return (
    <PageLayout title="Освітньо-професійні програми">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
