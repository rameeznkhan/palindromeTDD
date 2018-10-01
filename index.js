String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

String.prototype.blank = function blank() {
  return !!(this.match(/^\s*$/g));
}

Array.prototype.last = function last() {
  return this[this.length - 1];
}

function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === processedContent.reverse();
}

function emailParts(string) {
  return string.toLowerCase().split("@");
}


function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}
