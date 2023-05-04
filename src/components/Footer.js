import React, { useContext, useEffect }  from 'react'
// import NoteContext from '../context/NoteContext'

// const About = () => {
//   const a = useContext(NoteContext)

//   useEffect(() => {
//     a.update()
//   }, [])


//   return (
//     <>
//     <p>This is about page, Hi I am  {a.state.name}, My Job role is {a.state.role}</p>
//     </>
//   )
// }

const Footer = () => {
    return (
      <>
      
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a></li> */}
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a></li>
          <li className="nav-item"><a href="https://kiranmadhe.github.io/selfsite/about.html" className="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p className="text-center text-muted">© 2023 Kiran R Madhe</p>
      </footer>
      </>
    )
  }

export default Footer