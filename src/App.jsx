import './App.css';
import Form from './Components/Form/Form.jsx';
import Button from './Components/Button/Button.jsx';
import CheckList from './Components/CheckList/CheckList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './app/slices/checkListSlice';




function App() {

  const tasks = useSelector(store=>store.checklistReducer)
  const dispatch = useDispatch();

  return (
    <>
      <Form onSubmit={(taskData)=>dispatch(addTask(taskData))}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remained</Button>
      <CheckList tasks={tasks} />
    </>
  );
}

export default App;
