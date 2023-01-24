import React from "react"
import { formatDistanceToNow, parseISO } from "date-fns"

export const TimeAgo = ({ timeStamp }) => {
  const wrote = new Date(Number(timeStamp)).toISOString()

  let timeAgo = ""
  if (wrote) {
    const date = parseISO(wrote)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title={wrote}>
      <i>{timeAgo}</i>
    </span>
  )
}
