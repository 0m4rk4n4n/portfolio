import React from "react"
const Location=()=>
{
return(<>
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-12 col-sm-12">
          <div className="jumbotron jumbotron-fluid eliminate onsmall">
            <div className="container">
              <h2
                className="display-4 my-4 welcoming borderr dec"
                data-aos="zoom-in"
                data-aos-duration="1600"
              >
                Location
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="container-fluid">
        <div id="location" className="row">
          <div className="col-12">
            <div data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
              <br></br>
              <iframe
                data-aos-duration="10001000"
                data-aos="zoom-in"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40226.22190014285!2d-114.08378695309025!3d50.93964481361583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176c31ac1c07d%3A0x6ae3e5caaa0e47d4!2sLake%20Bonavista%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1638341853278!5m2!1sen!2sca"
                width="900"
                height="550"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-"></div>
        </div>

        <br></br>
        <button
          type="button"
          className="btn btn-primary btn-lg bg-dark but"
          data-toggle="modal"
          data-target="#ref"
        >
          Hire Me
        </button>

        <div
          className="modal fade"
          id="ref"
          role="dialog"
          aria-labelledby="ref"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header cen">
              <h5 style={{fontSize:15,textAlign:"center",fontWeight:"light"}} className="modal-title cen" id="ref">
                  Hire Omar
                </h5>
              </div>
              <h6 style={{fontSize:18,textAlign:"center",fontWeight:"100"}} className="modal-body cen">
                Thank you for taking the time to review my skills and background. if my skillset seems like a good fit, Please take a moment to contact me at my cell <a href="tel:403-861-6240">(403) 861-6240</a> or by
                email at <a href = "mailto: omar_kanan@outook.com">omar_kanan@outlook.com</a>

              </h6>
              <h5 style={{fontSize:15,textAlign:"center",fontWeight:"light"}}>
                  Your Time is Much Appreciated. Thank You
                </h5>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary cen btnwidth"
                  data-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></>)
}
export default Location