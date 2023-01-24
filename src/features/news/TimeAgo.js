import React from "react"
import {
  compareAsc,
  formatDistanceToNow,
  fromUnixTime,
  parseISO,
} from "date-fns"

export const TimeAgo = ({ timeStamp }) => {
  const wrote = fromUnixTime(timeStamp).toISOString()

  const comp = compareAsc(1674514520, 1674524177)

  console.log(comp)

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
