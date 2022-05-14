// Day and month arrays for use with Date object
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formElement = document.querySelector('form');
const commentSection = document.querySelector('.commentList');


// function that takes a number and returns the same number as an ordinal. Why I insisted on making it handle numbers larger than 31, I'll never know.
function nthEnding(num) {
  let endsWith = num % 100;
  if (endsWith == 11) return `${num}th`;
  if (endsWith == 12) return `${num}th`;
  if (endsWith == 13) return `${num}th`;
  endsWith = num % 10;
  if (endsWith == 1) return `${num}st`;
  if (endsWith == 2) return `${num}nd`;
  if (endsWith == 3) return `${num}rd`;
  return `${num}th`;
}

function handleSubmit(e) {

  e.preventDefault();

  // the text input
  const nameInput = document.querySelector('input[type=text]');
  // and its value: the user's name
  const name = nameInput.value;

  // the email input
  const emailInput = document.querySelector('input[type=email]');

  // the textarea input
  const commentInput = document.querySelector('textarea');
  // and its value: the user's comment
  const comment = commentInput.value;
  
  // Create comment's outer div
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('commentWrapper');
  
  // Create comment's avatar
  const avatar = document.createElement('img');
  avatar.src = '../assets/darsh.jpg';
  avatar.alt = 'User avatar';
  avatar.setAttribute('aria-hidden', 'true');
  
  // Create comment's inner div (wrapping name/date/comment)
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('userComment');
  
  // A date object to log date of comment
  const date = new Date();
  date.setDate(104)

  // Create h5 that holds user's name and date of comment
  const userNameAndDate = document.createElement('h5');
  
  // Adding its text content (Date and username)
  userNameAndDate.textContent = `
  ${daysOfTheWeek[date.getDay()]} 
  ${monthsOfTheYear[date.getMonth()]} 
  ${nthEnding(date.getDate())}, 
  ${date.getFullYear()} 
  by ${name}`;

  // Create p that holds user's comment
  const userComment = document.createElement('p');
  
  // Adding its text content (Comment provided in textarea)
  userComment.textContent = comment;

  // Compile name, date, and comment into inner div
  commentDiv.append(userNameAndDate, userComment);
  
  // Compile avatar and inner div into outer div
  wrapperDiv.append(avatar, commentDiv);

  // Add it to the end of the comment section
  commentSection.append(wrapperDiv);

  // Clear inputs
  nameInput.value = '';
  emailInput.value = '';
  commentInput.value = '';

}

formElement.addEventListener('submit', handleSubmit);