import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';


export default function UserLogin() {
    const [userId, setUserId] = useState("");
    const history = useHistory();

    const login = () => {
        history.push(`/${userId}/tweets`);
    }

    return (<div><textarea  value={userId} onChange={e => { setUserId(e.target.value) }} placeholder="put your id" >
        
    </textarea><button  onClick={login} >Login</button></div>);
}
