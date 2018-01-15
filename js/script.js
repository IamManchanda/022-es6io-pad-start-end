/**
 * JS
 */

/* eslint-disable */
const strings = ['short', 'medium size', 'this is really really long'];
const longestString = strings
  .sort((str) => str.length)
  .map((str) => str.length)[0];

strings.forEach((str) => {
  console.log(str.padStart(longestString));
});
