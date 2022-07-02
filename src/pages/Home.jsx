import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from 'axios';

const Home = () => {
  return (
    <div>
        <AddTutorial/>
        <TutorialList/>

    </div>
  )
}

export default Home