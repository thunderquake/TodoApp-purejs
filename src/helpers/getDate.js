import { DATEFORMATS } from "../constants/regex.js";

export function getDate(noteContent) {
  if (!noteContent) {
    return "";
  }

  const dates = [];

  if (noteContent.match(DATEFORMATS)) {
    noteContent.match(DATEFORMATS).forEach((date) => {
      const formattedDate = date.replaceAll("-", "/").replaceAll(".", "/");
      dates.push(formattedDate);
    });
  }

  return dates.join(", ");
}

export function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en-GB");
}
