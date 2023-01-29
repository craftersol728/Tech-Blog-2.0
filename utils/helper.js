module.exports = {
    //The function format_date takes a date as input and returns a string representation of the date in the format "MM/DD/YYYY". It first converts the input date to a JavaScript Date object, then retrieves the month, date, and full year from that object and concatenates them with slashes to form the desired string format.
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    //The function format_url takes a URL string as input and returns a string that removes the "http://", "https://", "www." substrings, if present, and returns only the hostname portion of the URL.
    format_url: url =>{
        return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
  //The function format_plural takes a word and an amount as input and returns the word with an "s" added to the end if the amount is not equal to 1. This is a simple pluralization function.
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;

    }
};