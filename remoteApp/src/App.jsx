import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <div className="content">
        <h1>Remote Application</h1>
        <div className="card">
          <div style={{ marginTop: '20px' }}>
            <Button 
              text="I'm a Button from Remote App" 
              onClick={() => alert('Button in Remote App clicked!')} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App