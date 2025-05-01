import { domElements } from './domElements.js'
const { dayValue, monthValue, weekValue, dateValue } = domElements;

export let dateObj = {
  moth: '',
  day: '',
  week: '',
  fullDate: ''
};

export const generateDateValue = (date) => {
  const monthsName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const daysName = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const monthNum = date.getMonth()
  const dayWeek = date.getDay();

  const getWeekNumber = (inputDate) => {
    const firstJan = new Date(inputDate.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((inputDate - firstJan + 86400000) / 86400000);
    const firstWeekDay = firstJan.getDay() || 7;
    const adjustedDate = dayOfYear + (firstWeekDay <= 4 ? firstWeekDay - 1 : firstWeekDay - 8);
    return Math.ceil(adjustedDate / 7);
  };
  const weekNum = getWeekNumber(date);

  dateObj = {
    moth: monthsName[monthNum],
    day: daysName[dayWeek],
    week: weekNum,
    fullDate: date.toISOString().split('T')[0]
  }
  printDate(dateObj);

  return dateObj;
}

export const printDate = (date) => {
  dayValue.innerHTML = date.day;
  monthValue.innerHTML = date.moth;
  weekValue.innerHTML = `Semana   <span>${date.week}</span>`;

  dateValue.value = date.fullDate;
}
