module.exports = function check(str, bracketsConfig) {
  let stack = []
  let arr = [...str]
  for (let i of arr) {
   let index
   for(let k = 0; k < bracketsConfig.length; k++) {
     if (bracketsConfig[k].includes(i)) index = k
   }
    if (bracketsConfig[index][0] == bracketsConfig[index][1]) {
      if(stack[stack.length - 1] != bracketsConfig[index][0] || stack.length == 0) {
       stack.push(i)
      }else {
        stack.pop()
      }
    } else if (i == bracketsConfig[index][0]) {
      stack.push(i)
    } else {
      if (stack[stack.length - 1] == bracketsConfig[index][0]) {
        stack.pop()
      } else {
        console.log(stack)
        return false
      }
    }
  }
  return !stack.length
 }