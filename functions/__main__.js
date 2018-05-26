/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
module.exports = (name = '', context, callback) => {

  callback(null, `hello ${name}`);

};
