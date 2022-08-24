/*
Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
Print the result.
*/

const myFriends = ['Yakup', 'Alican', 'Alparslan', 'Muaz'];


const friends = (arr) => {
    let newFriend = [];
    for (let i = 0; i < arr.length; i++) {
        const friend = arr[i];
        if (friend.length % 2 === 0) {
            newFriend.push(friend);
        }
    }
    return newFriend;
}

const newFriends = friends(myFriends);
console.log(newFriends);