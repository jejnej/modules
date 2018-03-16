var list = []

function numberList(num, cb) {
  list.push(num);
  sortList();
  return list
}

function sortList() {
    list.sort(function(a,b) {
      return a -b
    });

   return list
}

module.exports =  {
  numberList: numberList,
};
