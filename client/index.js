// import { ObjectId, getTimestamp } from 'mongoose';

console.log('THIS IS THE HOLE.  YOU ARE HERE');

const title = document.createElement('div');
title.innerHTML = 'In the hole again';
document.body.appendChild(title);

//first we need to target the form
const form = document.getElementById('inputBox');
//console.log(document.forms);
console.log(document.forms[0]);

let name;
let other;

document.addEventListener('submit', (event) => {
  event.preventDefault();
  name = event.target.name.value;
  other = event.target.other.value;
  console.log('THIS DID A THING:', event.target.name.value);
  console.log('THIS DID ANOTHER THING:', event.target.other.value);
  console.log(name, other);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ name: name, other: other }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((response) => {
      document.getElementById('otherText').value = '';
      document.getElementById('otherText').focus();
      console.log(response);
    });
});

window.addEventListener('DomContentLoaded', fetchMessages);
const lastFetchedTimestamp = new Date();
setInterval(fetchMessages, 2500);

// function fetchNew

function fetchMessages() {
  fetch('/api/all')
    .then((response) => {
      return response.json();
    })
    .then((messages) => {
      console.log(messages);
      messages.forEach((msg) => addMessageToDom(msg));
    })
    .catch((error) => {
      console.log('error: ', error);
    });
}
const previousIds = {};
function addMessageToDom(messageObj) {
  const { name, other, _id } = messageObj;
  if (!previousIds.hasOwnProperty(_id)) {
    previousIds[_id] = true;
    //NOTE THIS HOW YOU GET TIME FROM MONGO ID WITHOUT MAGIC
    const timestamp = new Date(parseInt(_id.substring(0, 8), 16) * 1000);
    console.log(timestamp);
    const messageBox = document.createElement('div');
    const name1 = document.createElement('p');
    const msg = document.createElement('p');
    const date = document.createElement('P');

    messageBox.className = 'chat-box';
    name1.className = 'name';
    msg.className = 'msg';
    date.className = 'date';

    msg.innerText = other;
    date.innerText = timestamp;
    name1.innerText = name;

    // append name, msg and date to p tags

    messageBox.append(name1, msg, date);

    // prepend messagebox to chat box
    const chatBox = document.getElementById('viewBox');
    chatBox.prepend(messageBox);
  }
}
