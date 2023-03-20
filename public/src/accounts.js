function findAccountById(accounts, id) {
  for (let num in accounts) {
    if (id=== accounts[num].id) return accounts[num];
  }
}



function sortAccountsByLastName(accounts) {
  accounts.sort((lastA, lastB) => lastA.name.last>lastB.name.last ? 1 : -1);
  return accounts
}



function getTotalNumberOfBorrows(account, books) {
  let total=0;
  const accID=account.id;
  
  for (let num in books) {
    const bookBorr= books[num].borrows;
    for (let num1 in bookBorr) {
      const bookID=(bookBorr[num1].id)
      if (accID===bookID) total+=1;
    }
  }
  return total
}
 


/*I just decided to leave all this code in to show the extra long route I took because
I didn't fully understand the question that was asked of me. So after fixing a lot of 
work and writting new code this is what it turned out to be. I would redo it if I wasn't
already late on this assignment*/


function getBooksPossessedByAccount(account, books, authors) {

  //let finArr = [];
  let tempArr = [];
  //let booksArr = [];
  //let borrowsArr = [];
  const accID = account.id;


  for (let num in books) {
    const {borrows} = books[num];
    let found = borrows.find((borrow) => borrow.id === accID && borrow.returned ===false);
    if (found != null) {
      tempArr.push(books[num])
      //console.log(books[num])





      //borrowsArr.push(found);
      //booksArr.push(books[num]);
    
        //const bookId = "id";
        //const bookTitle = "title";
        //const bookGenre = "genre";
        //const bookAuthorId = "authorId";
        //const bookAuthor = "author";
        //const borrowing = "borrows";
  

        //const results = booksArr.map((book) => {
          //const foundAuthor = authors.find((author) => author.id === book.authorId)
          //const foundBorrow = borrowsArr.find((borrowV) => borrowV.id === book.authorId)
          
          
            //return {[bookId]: book.id, 
            //        [bookTitle]: book.title, 
            //        [bookGenre]: book.genre, 
            //        [bookAuthorId]: book.authorId, 
            //        [bookAuthor]: foundAuthor,
            //        [borrowing]: borrows,
          //}
          
        //} )
      //console.log(found)
      
    }

  
  //console.log(booksArr)
  
    
  }
  //console.log(tempArr)
  //let result = removeDup(tempArr);
        const bookId = "id";
        const bookTitle = "title";
        const bookGenre = "genre";
        const bookAuthorId = "authorId";
        const bookAuthor = "author";
        const borrowing = "borrows";

  const result = tempArr.map((book) => {
    const foundAuthor = authors.find((author) => author.id === book.authorId)
          
          
            return {[bookId]: book.id, 
                    [bookTitle]: book.title, 
                    [bookGenre]: book.genre, 
                    [bookAuthorId]: book.authorId, 
                    [bookAuthor]: foundAuthor,
                    [borrowing]: book.borrows,
}})



  console.log(result)
  return result


//console.log(account)
//console.log(result[0])
//console.log(authors)
//console.log(borrowsArr)
//console.log(booksArr)
//console.log(finArr)

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
