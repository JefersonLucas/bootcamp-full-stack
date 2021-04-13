const VOWELS = 'aáãâäàeéêëèiíîïìoóõôöòuúûüù'.split('');

export function isVowel(char) {
  return VOWELS.includes(char.toLowerCase());
}

export function isConsonant(char) {
  return !isVowel(char) && !isNumber(char);
}

export function isNumber(char) {
  return !isNaN(char);
}
