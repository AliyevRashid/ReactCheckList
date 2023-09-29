
import CheckListItem from './CheckListItem/CheckListItem';

function CheckList({tasks})
{
    
    return(
        <ul>
            {
                tasks.map((taskData)=><CheckListItem taskData={taskData} key={taskData.id}/>)
            }
        </ul>
    )
}

export default CheckList;