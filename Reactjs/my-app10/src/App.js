import MainFragComponent from "./Components/Fragments";

import MainClassComponents, { ChiladClassComponent, SiblingChildClassComp } from "./Components/MultipleClassComponents";

import {ChildComponent,ParentComponent} from "./Components/MultipleFunctionComponents"
// import MultipleComponent from "./Components/MultipleComponents"
function App() {
  return (
    <div className="App">
      {/* <MultipleComponent/> */}
      <ChildComponent/>
      <ParentComponent/>
      <hr />
      <MainClassComponents/>
      <ChiladClassComponent/>
      <SiblingChildClassComp/>
      <hr />
      <MainFragComponent/>
    </div>
  );
}
export default App;
