import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const dateHumanize = (dateStr) => {
  if (!dateStr) return
  return dayjs(dateStr).fromNow()
}
