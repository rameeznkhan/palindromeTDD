# Phrase object (with palindrome detector)

This is a sample NPM module created to practice TDD.

The module can be used as follows:

```
$ npm install --global rk-palindrome
$ vim test.js
let Phrase = require("rk-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
