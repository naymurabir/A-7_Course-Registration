
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto my-5 py-2 px-2 md:px-16 lg:px-24 flex flex-col md:flex-col lg:flex-row'>

        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
