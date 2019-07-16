export const length = (start_time, end_time) => {
  if (end_time == null || start_time == null) return 0

  let start_split = start_time.split("h")
  let end_split = end_time.split("h")

  return start_split[1] > end_split[1]
    ? 60 -
        parseInt(start_split[1]) +
        parseInt(end_split[1]) +
        60 * (end_split[0] - start_split[0] - 1)
    : Math.abs(start_split[1] - end_split[1]) +
        60 * (end_split[0] - start_split[0])
}

export const sumTime = (time, increment) => {
  let split = time.split("h")
  let minutes = parseInt(split[1]) + increment
  let hours = parseInt(split[0])
  const quocient = Math.floor(minutes / 60)

  if (minutes >= 60) {
    hours += quocient
    minutes -= 60 * quocient
  }

  return hours + "h" + minutes + (minutes === 0 ? "0" : "")
}

export const getMaxEndTime = events => {
  let max = events[0].props.end_time

  events.forEach(event => {
    if (event.props.end_time > max) max = event.props.end_time
  })

  return max
}
