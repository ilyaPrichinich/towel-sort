
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
        matrix.map((item, i) => {
        if(i % 2 !== 0) {
        item.sort((a, b) => b - a)
        }
          item.forEach(item => {
          result.push(item);
          })
        })
     return result;
    }
    
