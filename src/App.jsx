import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';
import Form from './components/Form';

function App() {
  const [name,setName] = useState("");
  const [color, setColor] = useState("");
  const [numEmployees,setNumEmployees] = useState(0);
  const [imgUrl,setImgUrl] = useState("");
  const [hogs,setHogs] = useState([]);
  const [nameVal,setNameVal] = useState("");
  const [colorVal,setColorVal] = useState("");
  const [numVal,setNumVal] = useState("");
  const [search,setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let hog = {name:name,color:color,numE:numEmployees,imgUrl:imgUrl}
    setHogs(oldHogs => [...oldHogs,hog]);
    setName("");
    setColor("");
    setNumEmployees(0);
    setImgUrl("");
  }
  const handleName = (e) => {
    setName(e.target.value);
    if(e.target.value.length <= 2){
      setNameVal("Name must be at least 3 characters.");
    }
    else{
      setNameVal("");
    }
  }
  const handleColor = (e) => {
    setColor(e.target.value);
    if(e.target.value.length <= 2){
      setColorVal("Color must be at least 3 characters.");
    }
    else{
      setColorVal("");
    }
  }
  const handleNum = (e) => {
    setNumEmployees(e.target.value);
    if(e.target.value < 0){
      setNumVal("Can't have negative employees.");
    }
    else{
      setNumVal("");
    }
  }

  return (
    <div className="App">
      <Search 
        search={search}
        handleSearch={setSearch}
      />
      <div className="row justify-content-around">
        <Form 
          numVal={numVal}
          colorVal={colorVal}
          nameVal={nameVal}
          handleName={handleName}
          handleColor={handleColor}
          handleNum={handleNum}
          handleImg={setImgUrl}
          name={name}
          color={color}
          numEmployees={numEmployees}
          imgUrl={imgUrl}
          handleSubmit={handleSubmit}
        />
        <div className="col-5">
          {
            hogs.filter( h => h.name.includes(search) ).map((hog,idx) => {
              return (
                    <div className="card" key={idx}>
                        <img className="card-img-top img-thumbnail"  src={hog.imgUrl} alt={hog.name}></img>
                        <div className="card-body">
                          <h3 className="card-title">{hog.name}</h3>
                          <p className="card-text">Employees: {hog.numE}</p>
                          <p className="card-text">Color: {hog.color}</p>

                        </div>
                    </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
