function restoreIpAddresses(str = "") {
  let result = [];
  console.log(str);
  if (str.length < 4 || str.length > 12) return result;
  function loop(target, temp = [], result) {
    if (temp.length === 3) {
      regular(target) && result.push([...temp, target]);
      return;
    }
    for (let i = 1; i < 4; i++) {
      regular(target.substr(0, i)) &&
        loop(target.substr(i), [...temp, target.substr(0, i)], result);
    }
  }
  loop(str, [], result);
  return result;
}
function regular(target = "") {
  if (!target) return false;
  return (
    +target >= 0 &&
    +target <= 255 &&
    (target.length > 1 ? !target.startsWith("0") : true)
  );
}

console.log(restoreIpAddresses("25525511135"), +"44444" <= 22);
