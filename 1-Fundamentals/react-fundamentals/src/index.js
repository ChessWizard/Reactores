import ReactDOM from 'react-dom/client';
import './css/style.css';

function DailyRoutines(){
  return(
      <div>
        <ul className="list-group">
            <li className="list-group-item active">Wash face</li>
            <li className="list-group-item">Brush teeths</li>
            <li className="list-group-item">Go to work</li>
        </ul>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MainHeader/>
    <SubHeader/>
    <Body/>
    <Footer/>
  </div>
);

const mainHeaderStyle = {
  fontSize:"45px",
  color: "blue",
  fontFamily: "Times New Roman"
}

function MainHeader(){
  return <h1 style={mainHeaderStyle}>Welcome React</h1>
}

function SubHeader(){
  return <h3 className="text-warning">Great to see you!</h3>
}

function Body(){
const name = "İsa ÖZGÜR";
return(
  <div>
    <h3>Here is my daily routines. I'm {name}</h3>
    <DailyRoutines/>
    <UserInput/>
  </div>)  
}

function Footer(){
  return <p style={{fontSize:"36px", color:"red"}}>Sitemiz, günlük rutinler hakkında bilgi sunmayı amaçlayan bir kaynaktır.</p>
}

function UserInput(){
  return <input maxLength={10}/>
}

