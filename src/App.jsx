import Home from "./pages/Home";
import BackgroundFX from "./components/background/BackgroundFX";
import { useState } from "react";
import IntroScreen from "./components/intro/IntroScreen";

function App() {

  const [introFinished, setIntroFinished] = useState(false);

return (

  <>

    
    <>

        <BackgroundFX />

        <Home />

      </>

  </>

);


}

export default App;