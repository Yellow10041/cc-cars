import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IComplexProfessionalExamination {}

export const ComplexProfessionalExamination: FC<
  IComplexProfessionalExamination
> = () => {
  return (
    <PageLayout title="Програма комплексного фахового екзамену">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
