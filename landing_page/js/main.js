const accordionActiveClass = 'accordion--active';
const accordionTrigger = document.querySelectorAll('.js-accordion');
const accordionHandler = (event) =>
  event.target.classList.toggle(accordionActiveClass);

for (const item of accordionTrigger) {
  item.addEventListener('click', accordionHandler);
}

class Countdown {
  constructor(days, hours, minutes, seconds) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
    this.secondsNode = document.getElementById('js-countdown-seconds');
    this.minutesNode = document.getElementById('js-countdown-minutes');
    this.hoursNode = document.getElementById('js-countdown-hours');
    this.daysNode = document.getElementById('js-countdown-days');
  }

  start() {
    this.counter = setInterval(() => this.reduceSeconds(this), 1000);
  }

  reduceSeconds() {
    if (this.seconds > 1) {
      this.seconds --;
    } else {
      this.seconds = 60;
      this.reduceMinutes();
    }
    this.secondsNode.innerHTML = this.seconds;
  }

  reduceMinutes() {
    if (this.minutes > 1) {
      this.minutes --;
    } else {
      this.minutes = 60;
      this.reduceHours();
    }
    this.minutesNode.innerHTML = this.minutes;
  }

  reduceHours() {
    if (this.hours > 1) {
      this.hours --;
    } else {
      this.hours = 24;
      this.reduceDays();
    }
    this.hoursNode.innerHTML = this.hours;
  }

  reduceDays() {
    if (this.days > 1) {
      this.days --;
    } else {
      clearInterval(this.counter);
    }
    this.daysNode.innerHTML = this.days;
  }
}

const countdown = new Countdown(120, 3, 1, 52);
countdown.start();
