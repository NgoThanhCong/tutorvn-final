export function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}

export function compareLessDate(start, end) {
  const startCompare = new Date(start)
  const endCompare = new Date(end)
  return ((startCompare < endCompare))
}

export function isDateEnd(time) {
  const today = new Date()
  const dataCompare = new Date(time)
  return today > dataCompare
}

export function isDateAvailable(start, end) {
  const today = new Date()
  const startCompare = new Date(start)
  const endCompare = new Date(end)
  return ((startCompare < today) && (today < endCompare))
}

export function matchYoutubeUrl(url) {
  var p =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url?.match(p)) {
    return url?.match(p)[1];
  }
  return false;
}