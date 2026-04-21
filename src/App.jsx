import "./App.css";
import ControlledFiled from "./Components/ControlledField/ControlledFiled";
import FormAction from "./Components/FormAction/FormAction";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <div>
        <h1>Get started</h1>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        <ControlledFiled></ControlledFiled>
      </div>
    </>
  );
}

export default App;
