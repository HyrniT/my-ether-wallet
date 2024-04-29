function formatTimeAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let unit;
  let value;
  if (days > 0) {
    unit = 'days';
    value = days;
  } else if (hours > 0) {
    unit = 'hours';
    value = hours;
  } else if (minutes > 0) {
    unit = 'mins';
    value = minutes;
  } else {
    unit = 'secs';
    value = seconds;
  }

  let timeAgo = `${value} ${unit} ago`;

  return timeAgo;
}

function formatTimeUTC(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = formatter.format(date);

  return formattedDate + ' +UTC';
}

export { formatTimeAgo, formatTimeUTC };
