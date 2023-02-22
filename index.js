const app = require('express')();

/**
 * Problem Statement: Given list of items in array find maximum repeated item and display it on output.
 * Input: List of Elements
 * Output: Most Repeated String in Array
 */
var getLargestString = (req, res) => {
  let input = [
      'fan',
      'table',
      'computer',
      'books',
      'table',
      'computer',
      'table',
    ],
    output = 'Display String with Maximum repeated in Array';

  /**
   * Write down your code here
   * */

  /** Logic Ends */

  res.send('<h3>' + output + '</h3>');
};

app.get('/', getLargestString);

app.listen(3000, () => {
  console.log('Started listening');
});
