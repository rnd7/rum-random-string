var RANDOM_STRING_DEFAULTS = {
  length: 16,
  charset: "abcdefghijklmnopqrstuvwxyz1234567890"
};
function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RANDOM_STRING_DEFAULTS.length;
  var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RANDOM_STRING_DEFAULTS.charset;
  var str = "";
  var charsetLen = charset.length;

  while (length-- > 0) {
    str += charset[Math.random() * charsetLen | 0];
  }

  return str;
}

export { RANDOM_STRING_DEFAULTS, randomString };
//# sourceMappingURL=rum-random-string-es.js.map
