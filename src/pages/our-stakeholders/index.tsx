import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IOurStakeholders {}

export const OurStakeholders: FC<IOurStakeholders> = () => {
  return (
    <PageLayout title="Наші стейкхолдери">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
