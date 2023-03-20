function removeDupAndSort(array) {
  let finArr=[];

  let unique = [...new Map(array.map((res) => [res.name, res])).values()];

  unique.sort((first, next)=> next.count-first.count);
  
  
  finArr.push(unique[0]);
  finArr.push(unique[1]);
  finArr.push(unique[2]);
  finArr.push(unique[3]);
  finArr.push(unique[4]);
  return finArr
}


function getMostPopularType(book, type){
let resultArr=[];

console.log(resultArr)
}



function getTotalBooksCount(books) {
  return books.length
}


function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  let total=0;
  for (let num in books) {
    const bookBorr= books[num].borrows;
    for (let num1 in bookBorr) {
      const bookBoo=(bookBorr[num1].returned)
      if (bookBoo===false) total+=1;
    }
  }
  return total
}


function getMostCommonGenres(books) {

  let resultArr=[];
  let name="name";
  let count="count";
  
  for (let num in books) {
    let total=0;
    const {genre}=books[num];
    for (let num1 in books) {
      if (genre===books[num1].genre) {
        total += 1;
      }
    }

    resultArr.push({[name]:genre, [count]:total})

  }
  return removeDupAndSort(resultArr);


}




function getMostPopularBooks(books) {
 
  let resultArr=[];
  let name="name";
  let count="count";

  for (let num in books) {
    const {borrows}=books[num];
    const {title}=books[num];
    let total=borrows.length;

    resultArr.push({[name]:title, [count]:total})

  }

  return removeDupAndSort(resultArr);
}


function getMostPopularAuthors(books, authors) {
  

  let resultArr=[];
  let name="name";
  let count="count";

  for (let num1 in authors) {
    const {id} = authors[num1];
    const {name: {first},} = authors[num1];
    const {name: {last},} = authors[num1];
    let total=0;


    for (let num in books) {
      const {borrows}=books[num];
      if (id===books[num].authorId) {
        total+=borrows.length;
      }
  
    }


    resultArr.push({[name]:`${first} ${last}`, [count]:total})
  }
  return removeDupAndSort(resultArr);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
