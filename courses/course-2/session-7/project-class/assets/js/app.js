// Variables
const noteList = document.querySelector('#note-list')
const form = document.querySelector('#form')


// Event Listeners
form.addEventListener('submit', newNote)

// remove note
noteList.addEventListener('click', removeNote)


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
  // for method 1
  // noteList.appendChild(newLi) 
  // for method 2
  noteList.innerHTML += newLi

  addToLS({ value: note, id: Math.random() })

}

// remove note function
function removeNote(e) {
  if (e.target.classList.contains('removeBtn')) {
    e.target.parentElement.remove()
  }
}


function getLS() {
  let recevieNotes;

  let LSNotes = localStorage.getItem('noteList');

  if (LSNotes == null) {
    recevieNotes = []
  } else {
    recevieNotes = JSON.parse(LSNotes)
  }

  return recevieNotes
}


function addToLS(userNote) {
  let oldNotes = getLS()

  oldNotes.push(userNote)

  localStorage.setItem('noteList', JSON.stringify(oldNotes))
}




// [
//   {
//     value: 'Data Value 1',
//     id: 1
//   },
//   {
//     value: "Data Value 2",
//     id: 2
//   }
// ]



if (localStorage.getItem('database')) {
  let lsData = JSON.parse(localStorage.getItem('database'))

  lsData.push({
    value:'Data Value 1231 ',
    id : 1
  })

  localStorage.setItem('database', JSON.stringify(lsData))

} else {
  localStorage.setItem('database', '[]')
}

