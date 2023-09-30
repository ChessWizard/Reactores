import { StudentInformations } from "./students";

const students = [
  {name:"John", surname:"Doe", schoolNumber:"11223344"},
  {name:"Mary", surname:"Powder", schoolNumber:"22334455"},
  {name:"Chris", surname:"Shelby", schoolNumber:"33445566"}
]

var containerStyle = {
  width: "800px",
  height: "100%"
}

function App() {
  return (
    <div>
      <StudentInformations infos={students} containerStyle={containerStyle}/>
    </div>
  );
}

export default App;
