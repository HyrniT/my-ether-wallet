function formatTimeAgo(dateUTC) {
  const timestamp = Date.parse(dateUTC);
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

  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  // const timeZone = date.toISOString().substring(19);

  const formattedDate = `${month}-${day}-${year} ${hour12}:${minute}:${second} ${ampm} +UTC`;

  return formattedDate;
}

export { formatTimeAgo, formatTimeUTC };
