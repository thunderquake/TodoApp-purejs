export function getDate(noteContent) {
  const dateFormats =
    /(((0[1-9]|[12][0-9]|3[01])([\/.-])(0[13578]|10|12)([\/.-])(\d{4}))|((0[1-9]|[12][0-9]|30)([\/.-])(0[469]|11)([\/.-])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([\/.-])(02)([\/.-])(\d{4}))|((29)([\/.-])(02)([\/.-])([02468][048]00))|((29)(\/)(02)(\/)([13579][26]00))|((29)([\/.-])(02)([\/.-])([0-9][0-9]0[48]))|((29)([\/.-])(02)([\/.-])([0-9][0-9][2468][048]))|((29)([\/.-])(02)([\/.-])([0-9][0-9][13579][26])))/g;
  const dates = [];
  if (noteContent.match(dateFormats)) {
    noteContent.match(dateFormats).forEach((date) => {
      let formattedDate = date.replaceAll("-", "/");
      formattedDate = date.replaceAll(".", "/");
      dates.push(formattedDate);
    });
  }
  return dates.join(", ");
}
