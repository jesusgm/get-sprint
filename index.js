const WEEK_DAYS = 7;

function zeroPad(num) {
  return num.toString().padStart(2, "0");
}

function getSprint(date = "", prefix = "", sprintWeeks = 2, separator = "_") {
  var dateEnd = date ? new Date(Date.parse(date)) : new Date();

  var dateStart = new Date(Date.parse(dateEnd.getFullYear() + "-01-01"));

  var differenceInTime = dateEnd.getTime() - dateStart.getTime();

  var differenceInDays = differenceInTime / (1000 * 3600 * 24);

  var yeardigits = dateEnd.getFullYear().toString().substr(-2);

  var weekNo = Math.floor(differenceInDays / (WEEK_DAYS * sprintWeeks));

  if (weekNo === 0) {
    weekNo += sprintWeeks;
  }

  if (weekNo % sprintWeeks === 1) {
    weekNo += 1;
  }

  return (
    (prefix ? prefix + separator : "") +
    yeardigits +
    separator +
    zeroPad(weekNo)
  );
}

module.exports = getSprint;
