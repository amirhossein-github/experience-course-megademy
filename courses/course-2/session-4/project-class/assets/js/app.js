// Variables
const noteList = document.querySelector('#note-list')
const form = document.querySelector('#form')


// Event Listeners
form.addEventListener('submit', newNote)


// Functions
function newNote(e) {
  e.preventDefault()

  // Access to textArea Value
  const note = document.querySelector('#note').value

  // Create <li> tag
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(note))
  // li.append(note)

  // Create x (remove) Button
  const removeBtn = document.createElement('a');
  removeBtn.textContent = 'X'
  removeBtn.classList.add('removeBtn')

  // Adding remove Btn to the li
  li.appendChild(removeBtn)


  // Method 2
  const newLi = `
    <li>
      ${note}
      <a href="#" class="removeBtn">X</a>
    </li> 
  `


  // Adding li to the note-list
  // noteList.appendChild(newLi)
  // noteList.insertAdjacentElement('afterend',newLi)

  noteList.innerHTML += newLi
}

