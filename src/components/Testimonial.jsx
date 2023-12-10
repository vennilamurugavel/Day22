import React from 'react'
function Testimonial() {
  return <>
  
  <section className="testimonials text-center bg-light">
<div className="container">
    <h2 className="mb-5">What people are saying...</h2>
    <div className="row">
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="data:image/jpeg;base64,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"/>
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3"  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt="..." />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxwZXJzb258ZW58MHx8MHx8fDA%3D" alt="..." />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
            </div>
        </div>
    </div>
</div>
        </section>
       </>
}

export default Testimonial