import Button from "../../Button/Button";
import {useId} from 'react';
import '../CheckListItem/CheckListItem.css';
import { useDispatch } from "react-redux";
import {removeTask} from '../../../app/slices/checkListSlice';
function CheckListItem({taskData})
{
  const id = useId();
  const dispatch = useDispatch();
  return(
    <li>
        <input type='checkbox' id={id}/>
        <label htmlFor={id}>{taskData.title}</label>
        <Button>Edit</Button>
        <Button clickHandler={()=>dispatch(removeTask(taskData.id))}>Delete</Button>
    </li>
  )
}

export default CheckListItem;