import "./App.css";
import ControlledFiled from "./Components/ControlledField/ControlledFiled";
import FormAction from "./Components/FormAction/FormAction";
import HookForm from "./Components/HookForm/HookForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <div>
        <h1>Get started</h1>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledFiled></ControlledFiled> */}
        <HookForm></HookForm>
      </div>
    </>
  );
}

export default App;
