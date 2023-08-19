import React,{useState} from 'react';
import styles from './UserInput.module.css';
//import Button from './UI/Button';
const UserInput = (props)=>{
    const [user, setUser] = useState('');    
    const inputHandler = (key, value)=>{
         setUser((user)=>{
            return{
                ...user,
               [key]:value,
               id: Math.random()*100+5,
            }
         });
       }

    const submitHandler =(event)=>{
        event.preventDefault();
        props.onAdd(user);
        setUser(' ');
    }

    return(
    <div>
        <form className={styles.input} onSubmit={submitHandler}>
              <label htmlFor='Name'>Name</label>
              <input type='text'id ="name" min="1" onChange={(event)=>{inputHandler('name',event.target.value)}}></input>
              <label htmlFor='Age' >Age (years)</label>
              <input type='number' min="1"  onChange={(event)=>{inputHandler('age', event.target.value)}}></input>
              <button type='submit' className={styles.button}>Add</button>
        </form>
    </div>
    );

}
export default UserInput;

