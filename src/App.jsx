import React from 'react'
import Student_Login from './Student/Student_Login'
import Student_Register from './Student/Student_Register'
import Student_nav from './Student/Student_nav'
import Student_home from './Student/Student_home'
import Student_profile from './Student/Student_profile'
import Student_book from './Student/Student_book'


import Librarian_login from './Librarian/Librarian_login'
import Librarian_register from './Librarian/Librarian_register'
import Librarian_nav from './Librarian/Librarian_nav'
import Librarian_profile from './Librarian/Librarian.profile'
import Librarian_home from './Librarian/Librarian_home'
import Librarian_book from './Librarian/Librarian_book'
import LibrarianManage_Student from './Librarian/LibrarianManage_Student'

import Bookissue_request from './Book/Bookissue_request'
import Borrowed_books from './Book/Borrowed_books'
import Book_return from './Book/Book_return'
import Bookissue_accept from './Book/Bookissue_accept'
import Home from './pages/Home'
import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Student/Login' element={<Student_Login/>}/>
      <Route path='/Student/Register' element={<Student_Register/>}/>
      <Route path='/Student/Home' element={<Student_home/>}/>
      <Route path='/Student/Profile' element={<Student_profile/>}/>
      <Route path='/Student/Book' element={<Student_book/>}/>


      <Route path='/Librarian/Login' element={<Librarian_login/>}/>
      <Route path='/Librarian/Register' element={<Librarian_register/>}/>
      <Route path='/Librarian/Home' element={<Librarian_home/>}/>
      <Route path='/Librarian/Profile' element={<Librarian_profile/>}/>
      <Route path='/Librarian/Book' element={<Librarian_book/>}/>
      <Route path='/Librarian/Students' element={<LibrarianManage_Student/>}/>
      

      <Route path='/Book/Issue_Request' element={<Bookissue_request/>}/>
      <Route path='/Book/Borrowed_Books' element={<Borrowed_books/>}/>
      <Route path='/Book/Return' element={<Book_return/>}/>
      <Route path='/Librarian/Requests' element={<Bookissue_accept/>}/>
    </Routes>
    </>
  )
}

export default App