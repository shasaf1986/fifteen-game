import moment from "moment";

function createDigitText(digit: number) {
  const prefix = digit < 10 ? '0' : '';
  return `${prefix}${digit}`;

}

export default function createDurationText(startTime: Date) {
  const diff = moment().add(1, 'day').diff(startTime, 'milliseconds');
  const duration = moment.duration(diff, 'milliseconds');
  const hours = createDigitText(duration.hours());
  const minutes = createDigitText(duration.minutes());
  const seconds = createDigitText(duration.seconds());
  return `${hours}:${minutes}:${seconds}`;
}
