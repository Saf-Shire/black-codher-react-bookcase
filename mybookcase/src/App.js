import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
// import Book from './components/Book';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import {Layout} from './components/Layout';
// import Pagination from './components/Pagination'




const App = (props) => {

    const [books,setBooks] = useState(data);
    const [keyword,setKeyword] = useState('');
    const [bookcase,setBookcase]=useState([]);

   
     async function findBooks (value){  
        const results = await 
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
        pe=books&projection=lite`).then(res => res.json());
            if (!results.error){
                setBooks(results.items);    
            }
        }


    function addBook(id) {
        console.log(`The Book ${id} was clicked`);
        const newBooks= books.filter((book) => id !== book.id)
         const chosenBook= books.filter((book)  => id === book.id)
        setBooks(newBooks);
        setBookcase([...bookcase,...chosenBook])
        }

        useEffect(() => {
            document.title = `${bookcase.length} books in the bookcase`;
          }, [bookcase]);

    // if (books.length === 0){
    //   return 'No books found';  
    // }
    function removeBook(id){
       const newBooks= bookcase.filter((book) => {
           return book.id !== id;
      })  
      setBookcase(newBooks);};
    

    return (
        <Layout>
        <BrowserRouter>
        <Switch>       
        <Route exact path="/" render={() => (
            <React.Fragment>
                <Header />
                { <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}  /> }
                {<BookList books={books} addBook={addBook} />}
            {/* <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/> */}
            </React.Fragment>
            )} />

        <Route exact path="/bookcase" render={() => (
            <React.Fragment>
            <Header />
            <BookList books={bookcase} addBook={addBook} removeBook={removeBook} />
             </React.Fragment>
             )} />

            <Route  exact path="/About" render={() => (
             <React.Fragment>
                 <Header />
                <About />
            </React.Fragment>
                )} />


            <Route> <Error/> </Route>
            </Switch>
        </BrowserRouter>
        </Layout>
    )
}
export default App;