document.getElementById('add-border').addEventListener('click', function() {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';



})

function addbackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';

    }

}

document.getElementsByClassName('add-friend').addEventListener('click', function() {
    const container = document.getElementsByClassName('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `  <h3 class="friend-name"></h3>
    <p>Eos quasi praesentium corporis sunt.</p>`;
    container.appendChild(friendDiv);


})