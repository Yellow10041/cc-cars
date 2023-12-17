import clsx from "clsx"
import {FC} from "react"

import {ContactsSection} from "@/components/contacts"

import styles from "./index.module.scss"
import {dataContacts} from "./lib/dataContent"
import {PageLayout} from "@/layouts"

interface IContacts {}

export const Contacts: FC<IContacts> = () => {
  return (
    <PageLayout title="Контакти">
      <ContactsSection data={dataContacts} />
    </PageLayout>
  )
}
