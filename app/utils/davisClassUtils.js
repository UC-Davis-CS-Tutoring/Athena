import $ from 'jquery';
import axios from 'axios';
const baseUrl = 'https://registrar-apps.ucdavis.edu/courses/search/course.cfm';

export const getTermInfo = date => {
  const monthName = date.format('MMMM');
  const year = date.format('YYYY');

  const nextYear = date.add(3, 'month').format('YYYY');

  switch (monthName) {
    case 'November':
    case 'December':
    case 'January':
    case 'February':
      return {
        term: 'Winter',
        year: nextYear,
        short: 'W',
        termCode: `${year}01`,
      };
    case 'March':
    case 'April':
      return { term: 'Spring', year, short: 'S', termCode: `${year}03` };
    case 'May':
    case 'June':
    case 'July':
    case 'August':
    case 'September':
    case 'October':
    default:
      return { term: 'Fall', year, short: 'F', termCode: `${year}10` };
  }
};

// const proxy = "https://thingproxy.freeboard.io/fetch/"
const proxy = 'https://cors.io/?';
// const proxy = 'http://www.corsmirror.com/v1/cors?url=';
export const generateRequestUrl = (crn, termCode) => {
  const params = $.param({ crn, termCode });

  return axios.get(`${proxy}${baseUrl}?${params}`);
};
