import axios from "axios"
import clsx from "clsx"
import {FC, useEffect, useState} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const [data, setData] = useState([])
  const [isLoading, srtLoading] = useState<boolean>(true)

  useEffect(() => {
    const apiKey = "AIzaSyDUWS_3nDunYCHjO_FznDxHOqx9blUfLW8"
    const spreadsheetId = "1gmFAaJgjHbB_mzYVhv_7x7Wa-rTvfm14Y1J3-tMJ3p4"
    const range = "Sheet1"

    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`,
      )
      .then((response) => {
        setData(response.data.values.slice(1))
        srtLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])
  return (
    <PageLayout title="Дисципліни (силабуси)">
      {isLoading && <PageItem content={<Loading />} />}
      {data[0] && (
        <PageItem
          content={data.map((e, i) => (
            <p key={i}>
              <a target="_blank" href={e[1]}>
                {e[0]}
              </a>
            </p>
          ))}
        />
      )}
    </PageLayout>
  )
}
