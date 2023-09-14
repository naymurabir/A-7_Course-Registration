import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([])

  const [totalCredit, setTotalCredit] = useState(0)

  const [remainingCredit, setRemainingCredit] = useState(0)

  // const [totalPrice, setTotalPrice] = useState(0)

  const handleAddToBookMarks = (course) => {

    const isExist = bookMarks.find(bookMark => bookMark.id === course.id)

    let count = course.credit;
    if (isExist) {
      return toast("The course is already Enrolled.")
    } else {

      bookMarks.forEach(bookMark => {
        count = count + bookMark.credit
      })

      const remainingCredit = 20 - count

      if (count > 20) {
        return toast("You can't get over 20 credit!")
      } else {

        setTotalCredit(count)
        setRemainingCredit(remainingCredit)

        const newBookmarks = [...bookMarks, course]
        setBookMarks(newBookmarks)
      }

    }

  }


  return (
    <>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto my-5 py-2 px-2 md:px-16 lg:px-24 flex flex-col md:flex-col lg:flex-row'>

        <Courses handleAddToBookMarks={handleAddToBookMarks}></Courses>
        <Bookmarks bookMarks={bookMarks} totalCredit={totalCredit} remainingCredit={remainingCredit} ></Bookmarks>

        <ToastContainer />
      </div>
    </>
  )
}

export default App
