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
      <div> I love <b>teaching</b> subjects that I understand well.</div></div>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "100px 0",
        }
      }>
        <div style={{
          fontSize: "25px",
          display: "flex",
        }}>
          <div style={{
            borderRight: "4px solid rgb(154, 117, 48)",
            padding: "0 0.75em"
          }}>Technical skills </div>
          <div style={{
            padding: "0 0.75em"
          }}> Frameworks and languages I know about.</div>
        </div>
      </div>
      <div style={{
            fontSize: "4px solid rgb(154, 117, 48)",
            padding: "0 0.75em"
          }}>Languages</div>

    </>
  )
}

export default App
