/*
Description:
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output

[ [ "bar_", "bar@bar.com" ] ]
  */


const searchNames = (logins) => {
    //return logins.filter(val => val[0].match('_')); // .match not using since the question strictly says that the login name ends with "_"

    return logins.filter(val => val[0].endsWith('_'));

    
}
console.log(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]));
console.log(searchNames([ [ "fo_o", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]));
