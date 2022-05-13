// add a submit listener to our submit button
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formElement = document.querySelector('form');
  const newCommentSection = document.querySelector('.newComment');

  // function nthEnding(num) {
  //   const endsWith = String(num % 10);
  //   if (endsWith == '1') return `${num}st`;
  //   if (endsWith == '2') return `${num}nd`;
  //   if (endsWith == '3') return `${num}rd`;
  //   return `${num}th`;
  // }

  // console.log(nthEnding(3));

  function handleSubmit(e) {

    e.preventDefault();
  
    // grab all the user's input and format it into an html element that we can append to the page
    // The username, date, time, comment

    // the text input (Name)
    const nameInput = document.querySelector('input[type=text]');
    // the value living on the text input
    const name = nameInput.value;

    // the email input
    const emailInput = document.querySelector('input[type=email]');

    // the textarea input
    const commentInput = document.querySelector('textarea');
    // the value living on the textarea input
    const comment = commentInput.value;

    // a date object
    const date = new Date();

    // Element wrapping comment setup the same way as our existing comments
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('commentWrapper');
    
    // img with its src and other attributes
    const avatar = document.createElement('img');
    avatar.src = '../assets/darsh.jpg';
    avatar.alt = 'User avatar';
    avatar.setAttribute('aria-hidden', 'true');

    // Element wrapping the comment itself
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('userComment');

    // Our username and date ELEMENT
    const userNameAndDate = document.createElement('h5');
    // Adding its text content (Date and username)
    userNameAndDate.textContent = `
    ${daysOfTheWeek[date.getDay()]} 
    ${monthsOfTheYear[date.getMonth()]} 
    ${date.getDate()}, 
    ${date.getFullYear()} 
    by ${name}`;

    // Our user comment ELEMENT
    const userComment = document.createElement('p');
    // Adding its text content (Comment provided in textarea)
    userComment.textContent = comment;

    // Compile the comment div
    commentDiv.append(userNameAndDate, userComment);
    
    // Compile it
    wrapperDiv.append(avatar, commentDiv);

    // append it to the comment "section"
    newCommentSection.prepend(wrapperDiv);

    // clear inputs
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';

  }

  formElement.addEventListener('submit', handleSubmit);




// For reference, my html:

/* <div class="commentWrapper">
  <img src="assets/comment-image-1.jpg" alt="User avatar" aria-hidden="true" />
  <div class="userComment">
    <h5>Tuesday October 9th, 2019 by Sulaire</h5>
    <p>
      Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.Donec viverra
      eleifend lacus, vitae ullamcorper metus. Sedsollicitudin ipsum quis nunc
      sollicitudin ultrices. Donec euismodscelerisque ligula. Maecenas eu varius
      risus..
    </p>
  </div>
</div> */
