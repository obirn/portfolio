import './App.css'

function App() {
  return (
    <>
      <div className='navbar'>
        <p className='navbar-item'>Home</p>
        <p className='navbar-item'>About</p>
        <p className='navbar-item'>Hobbies</p>
        <p className='navbar-item'>Resume</p>
      </div>

      <div className='greeting-container'>
      <span className='greeting-name'>Hi, I'm Robin.</span>
      <span className='greeting-job'>A Developper.</span>
      </div>
      <div style={{ margin: "20px"}}>      <div > I'm passionate about <b>algorithms</b>, <b>problems solving</b>, and building complex <b>applications</b>.</div>
      <div> I love <b>teaching</b> IT-related subjects and <b>share</b> my knowledge with others.</div></div>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "50px 50px",
        }
      }>
        <div style={{
          fontSize: "25px",
          display: "flex",
        }}>
          <div style={{
            borderRight: "4px solid #a18555",
            paddingRight: "0.75em"
          }}>Technical skills </div>
          <div style={{
            paddingLeft: "0.75em"
          }}> Which tools do I work with</div>
        </div>
        <div>
          <div>
            Languages
          </div>
          <div className="language-items">
            <div className="language-item">
            <img className="language-icon" src="python.svg"></img>
              <span className="language-name">Python</span>
            </div>
          </div>
          <div className="language-items">
            <div className="language-item">
            <img className="language-icon" src="c++.svg"></img>
              <span className="language-name">C++</span>
            </div>
          </div>          
          <div className="language-items">
            <div className="language-item">
            <img className="language-icon" src="c.svg"></img>
              <span className="language-name">C</span>
            </div>
          </div>
          <div className="language-items">
            <div className="language-item">
            <img className="language-icon" src="csharp.svg"></img>
              <span className="language-name">C#</span>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
