export default date => {
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', options)

  return dateTimeFormat.format(date)
}
