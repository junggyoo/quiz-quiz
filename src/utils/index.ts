export const getTimeTaken = (startTime: number, endTime: number) => {
  const timeTaken = endTime - startTime;
  const seconds = Math.floor(timeTaken / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return `${seconds}초`;
  }

  if (minutes < 60) {
    return `${minutes}분 ${seconds % 60}초`;
  }

  if (hours < 24) {
    return `${hours}시간 ${minutes % 60}분 ${seconds % 60}초`;
  }

  return `${Math.floor(hours / 24)}일 ${hours % 24}시간 ${
    minutes % 60
  }분 ${seconds % 60}초`;
};
