
import "../styles/about.css";

const About = () =>{

    return (
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <h3>Easy Shopping Experience</h3>
          <p>
            Welcome to shopEasy, your number one source for Home Appliances.
            We're dedicated to providing you the very best Appliances, Founded
            in 2021 , lavishop has come a long way from its beginnings in All
            Over Country. We hope you enjoy our products as much as we enjoy
            offering them to you. If you have any questions or comments, please
            don't hesitate to contact us.
          </p>
        </div>

        <h2 className="text-center">Our Team</h2>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Omkar Annam</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem.</p>
                <p>Omkar@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Abhijeet Raut</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem.</p>
                <p>abhijeet@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Akshay Nandre</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem.</p>
                <p>akshay@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Navjyot Jadhav</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem.</p>
                <p>navjyot@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default About