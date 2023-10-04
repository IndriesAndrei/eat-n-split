import Friend from './Friend'

function FriendsList({friends, onSelection, selectedFriend}) {
    return <ul>
        {/* getting onSelection from parent App and send it further to Friend component */}
        {friends.map(friend => 
          (<Friend 
            friend={friend} 
            key={friend.id} 
            onSelection={onSelection} 
            selectedFriend={selectedFriend} 
          />)
        )}
      </ul>
}

export default FriendsList;