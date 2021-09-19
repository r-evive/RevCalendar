class RevCalendar {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor() {
    this.selectedDate = new Date();
    this.selection = {
      currentPosition: "START",
      start: null,
      end: null,
    };
    this.initControlers();
    this.render();
  }

  render = () => {
    document.querySelector(".calendar__title__currentMonth h1").innerHTML =
      this.months[this.selectedDate.getMonth()];

    document.querySelector(".calendar__title__currentMonth h2").innerHTML =
      this.selectedDate.getFullYear();

    const daysPanel = document.querySelector(".calendar__content__days");
    daysPanel.innerHTML = "";

    let firstDayOfMonth = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth(),
      1
    ).getDay();

    if (firstDayOfMonth == 0) firstDayOfMonth = 7;

    let prevMonth = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth() - 1,
      0
    ).getDate();

    const numerOfDaysInMonth = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i < firstDayOfMonth; i++) {
      let singleDate = document.createElement("div");
      singleDate.classList.add("previous");
      singleDate.innerHTML = prevMonth - (firstDayOfMonth - 1) + i;
      daysPanel.appendChild(singleDate);
    }

    let activeDay = -1;
    let realTimeDate = new Date();
    if (
      realTimeDate.getMonth() == this.selectedDate.getMonth() &&
      realTimeDate.getFullYear() == this.selectedDate.getFullYear()
    )
      activeDay = realTimeDate.getDate();

    for (let i = 1; i <= numerOfDaysInMonth; i++) {
      let singleDate = document.createElement("div");
      singleDate.innerHTML = i;
      activeDay == i ? singleDate.classList.add("active") : "";
      daysPanel.appendChild(singleDate);
    }
  };

  initControlers = () => {
    const nextMonthButton = document.querySelector(".calendar__title .next");
    const prevMonthButton = document.querySelector(".calendar__title .prev");

    nextMonthButton.addEventListener("click", () => {
      this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
      this.render();
    });

    prevMonthButton.addEventListener("click", () => {
      this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
      this.render();
    });
  };
}

window.onload = function () {
  let revCalendar = new RevCalendar();
};
