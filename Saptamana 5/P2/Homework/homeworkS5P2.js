function is_string(doit) {
  if
    (Object.prototype.toString.call(doit) === '[object String]')
    return true;
  else
    return false;
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


function is_string(FORS) {
  if
    (typeof FORS === "string")
    return true;


  else
    return false;

}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

function is_Blank(blank) {

  if
    (blank.length === 0)
    return true;

  else
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

function string_to_array(sToA) {
  return sToA.split(" ");
}

console.log(string_to_array("Robin Singh"));

function abbrev_name(abrName) {
  var spl = abrName.trim().split(" ");
  return (spl[0] + " " + spl[1].charAt(0) + ".");

}

console.log(abbrev_name("Robin Singh"));


function capitalize(firstLe) {

  return firstLe.charAt(0).toUpperCase() + firstLe.slice(1);
}
console.log(capitalize('js string exercises'));




function truncate_string(str1, length) {

  return str1.substr(0, length);

};
console.log(truncate_string("Robin Singh", 4));

function isUpperCaseAt(str, lenght) {
  return str.charAt(lenght).toUpperCase() === str.charAt(lenght);
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


function insert(firstString, secondString, pos) {
  return firstString.slice(0, pos) + secondString + firstString.slice(pos);
}

console.log(insert('We are doing some exercises.', 'JavaScript ', 18));


function remove_first_occurrence(string, sString) {
  var index = string.indexOf(sString);
  if (index === -1) {
    return string;
  }
  return string.slice(0, index) + string.slice(index + sString.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

function compare_strings(str1, str2) {
  var equal = str1.toUpperCase() === str2.toUpperCase();
  return equal;
}

console.log(compare_strings('abcd', 'AbcD'));

function Uncapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
console.log(Uncapitalize('Js string exercises'));
