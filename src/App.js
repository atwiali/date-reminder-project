import { Container } from "react-bootstrap"
import React , {useState , useEffect} from "react"
import { person} from "./data"
import DatesCount from "./components/DatesCount"
import DatesList from "./components/DatesList"
import DatesAction from "./components/DatesAction"


function App() {
  const [personData, setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData ([])
  }
  const onViewData=()=>{
    setPersonData (person)
  }
  useEffect(() => {
    setPersonData ([])
  }, [])
  
  
  return (
    <div className="">
      <Container className="py-5">
        {/* 1 */}
      <DatesCount person={personData}/>
        {/* 2 */}
     <DatesList person={personData}/>
        {/* 3 */}
        <DatesAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
