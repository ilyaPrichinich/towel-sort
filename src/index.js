
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
    if(matrix === undefined){
        return [];
    } else {
        matrix.map((item, i) => {
        if(i % 2 != 0) {
        item.reverse();
        }
          item.forEach(item => {
          result.push(item);
          })
        })
    }
  return result;
 }