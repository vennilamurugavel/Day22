import React from 'react'
import Icons from './components/Icons'
// import Header from './components/header'
import Showitems from './components/Showitems'
import Testimonial from './components/Testimonial'
import Action from './components/Action'
import Footer from './components/Footer'
function App() {
  const data=[
    {
    icon:"bi-window m-auto text-primary",
    namelist:"Fully Responsive",
    description:"This theme will look great on any device, no matter the size!"
  },
  {
    icon:"bi-layers m-auto text-primary",
    namelist:"Bootstrap 5 Ready",
    description:"Featuring the latest build of the new Bootstrap 5 framework!"
  },
  {
    icon:"bi-terminal m-auto text-primary",
    namelist:"Easy to Use",
    description:"Ready to use with your own content, or customize the source files!"
  },

]
  return <>
  <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
        {/* <Header/> */}
        <section className="features-icons bg-light text-center">
            <div className="container">
            <div className="row">
    {
      data.map((e,i)=>{return <Icons data = {e} key={i}/>
      })
    }
    </div>
            </div>
        </section>

        <Showitems/>
        <Testimonial/>
        <Action/>
        <Footer/>
        
          </>
}

export default App