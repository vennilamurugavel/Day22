import React from 'react'

function Showcase() {
  return <>
  <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url('assets/img/bg-showcase-1.jpg')`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
  </>
}
export default Showcase