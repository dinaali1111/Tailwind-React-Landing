import { Fragment } from "react"
import Landing from "../Components/Landing";
import Feature from "../Components/Feature";
import StayProductive from "../Components/StayProductive";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";


function Home() {
    return (
      
        <Fragment>  

            <Landing/>
            <Feature />
            <StayProductive />
            <Testimonials />
            <GetStarted />
            </Fragment>
  )
}

export default Home
