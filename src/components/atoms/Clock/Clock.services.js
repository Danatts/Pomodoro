export const numToTime = (num) => {
  const min = Math.floor(num / 60);
  const sec = num % 60;
  return `${ min >= 10 ? min : '0' + min }:${sec >= 10 ? sec : '0' + sec}`
}
