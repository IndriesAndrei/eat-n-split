const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.css/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.css/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.css/48?u=499476",
      balance: 0,
    }
]

function FriendsList() {
    const friends = initialFriends;
    return <ul>Friends</ul>
}

export default FriendsList;