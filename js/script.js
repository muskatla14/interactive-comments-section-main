// Your users should be able to:

// - View the optimal layout for the app depending on their device's screen size 
// - See hover states for all interactive elements on the page
// - Create, Read, Update, and Delete comments and replies
// - Upvote and downvote comments
// - **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
// - **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

const comments = document.querySelector('.comments');
const sendBtn =  document.querySelector('.send-btn');
const textArea = document.querySelector('.text-area');
const replyBtn = document.querySelectorAll('.btn-reply');

function sendMessage() {
    const comment = document.createElement('section');
    comment.classList.add('comment');
    comment.innerHTML = `<div class="vote">
    <button class="btn-score">
      <img class="plus" src="/images/icon-plus.svg" alt="" />
    </button>

    <p class="vote-number">13</p>
    <button class="btn-score">
      <img class="minus" src="/images/icon-minus.svg" alt="" />
    </button>
  </div>
  <div class="user">
    <div class="info">
      <div class="user-info">
        <img
          class="avatar-img"
          src="./images/avatars/image-juliusomo.png"
          alt=""
        />
        <p class="user-name">ramsesmiron</p>
        <p class="bg-blue">you</p>    
        <p class="time-ago">1 weeks ago</p>
      </div>

      <div class="reply">
        <img src="/images/icon-delete.svg" alt="" />
        <button class="btn-reply">Delete</button>
        <img src="/images/icon-edit.svg" alt="" />
        <button class="btn-reply">Edit</button>
      </div>
    </div>
    <div class="text">
      <p>
        ${textArea.value}
      </p>
    </div>
  </div>`
  comments.appendChild(comment);
    console.log(textArea.value);
    textArea.value = '';
    
}



function replay(event) {
    const replyDiv = document.createElement('div');
    const element = event.target;
    const parent = element.parentElement.parentElement.parentElement.parentElement;
    
    replyDiv.innerHTML = `<div class="add-my-comment">
    <img
      src="./images/avatars/image-juliusomo.png"
      class="my-avatar-img"
      alt=""
    />
    <textarea
      class="text-area"
      name=""
      id=""
      cols="70"
      rows="5"
      placeholder="Add a comment"
    ></textarea>
    <button class="send-btn">Send</button>
  </div>`

//   parent.insertAfter(replyDiv);
    console.log(event.target);
}

replyBtn.forEach(item => {
    item.addEventListener('click', replay)
})


sendBtn.addEventListener('click', sendMessage)