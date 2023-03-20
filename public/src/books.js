function findArguementById(arg, id) {
  return arg.find((arg)=> arg.id===id)
}


function arrTen(array){
  let finArr=[];
  finArr.push(array[0]);
  finArr.push(array[1]);
  finArr.push(array[2]);
  finArr.push(array[3]);
  finArr.push(array[4]);
  finArr.push(array[5]);
  finArr.push(array[6]);
  finArr.push(array[7]);
  finArr.push(array[8]);
  finArr.push(array[9]);
  return finArr
}


function findAuthorById(authors, id) {
  return findArguementById(authors, id)
}

function findBookById(books, id) {
  return findArguementById(books, id)
}

function partitionBooksByBorrowedStatus(books) {
  let arrOut=[];
  let arrReturn=[];
  let result=[arrOut ,arrReturn]
  

  for (let num in books) {
    const {borrows}=books[num];

    if (borrows.some((borrow)=>borrow.returned===false)===false) {
      arrReturn.push(books[num]);
    } else {
      arrOut.push(books[num]);
    }
    
  }



  return result
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book;
  let result = [];
  for (let num in borrows) {
    const {id} = borrows[num];
    const {returned} = borrows[num];
    for (let num1 in accounts) {
      const {picture}=accounts[num1];
      const {age}=accounts[num1];
      const {name}=accounts[num1];
      const {company}=accounts[num1];
      const {email}=accounts[num1];
      const {registered}=accounts[num1];
      if (id === accounts[num1].id) {
        result.push({id, returned, picture, age, name, company, email, registered})
      }
    }
  }
  return (arrTen(result))
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
