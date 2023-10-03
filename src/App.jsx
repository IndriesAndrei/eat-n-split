import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'
import FriendsList from './components/FriendsList'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  }
]

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show)
  }

  function handleAddFriend(friend) {
    // create new friends array and add the new friend to it
    setFriends(friends => [...friends, friend]);
    // hide the form again after adding a new friend
    setShowAddFriend(false);
  }

  return (
    <>
      <h1>-- Eat And Split --</h1>
      <hr />
      <div className='app'>
        <div className='sidebar'>
          <FriendsList friends={friends} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        </div>

        <FormSplitBill />
      </div>
    </>
  )
}

export default App
