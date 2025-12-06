
import './App.css'
import FamilyTree from './component/FamilyTree/FamilyTree'
import ControlledForm from './ControlledForm/ControlledForm'
import FormAction from './FormAction/FormAction'
import HookForm from './HookForm/HookForm'
import ProductManagement from './ProductManagement/ProductManagement'
import SimpleForm from './SimpleForm/SimpleForm'

function App() {

  return (
    <>

      <h1>Explore React Form</h1>
      {/* 
      <SimpleForm></SimpleForm>

      <FormAction></FormAction>

      <ControlledForm></ControlledForm>

      <HookForm></HookForm> */}

      <ProductManagement></ProductManagement>

      <FamilyTree></FamilyTree>

    </>
  )
}

export default App
