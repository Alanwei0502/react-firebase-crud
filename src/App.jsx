import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef = collection(db, 'users'); // 抓取firestore中的特定collection

  // 新增document中的資料
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
  }

  // 更新document中的資料
  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  }

  // 刪除document中的資料
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc, id);
  }

  useEffect(() => {
    const getUsers = async () => {
      // 抓取特定collection中所有的document
      const data = await getDocs(usersCollectionRef);
      // 抓取document中的field和id
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]);


  return (
    <div className="App">
      <input type="text" placeholder='Name...' onChange={e => setNewName(e.target.value)} />
      <input type="number" placeholder='Age...' onChange={e => setNewAge(+e.target.value)} />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id}>
          <span>Name: {user.name}, </span>
          <span> Age: {user.age} </span>
          <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div >
      ))
      }
    </div >
  );
}

export default App;
