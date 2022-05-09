let keyboard = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'Shift',
  'Meta',
  'Alt',
  ' ',
  'Alt',
  'Control',
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
]

document.addEventListener('DOMContentLoaded', () => {
  const fragment = document.createDocumentFragment()

  const h1 = document.createElement('h1')
  h1.textContent = 'RSS Виртуальная клавиатура'
  h1.classList.add('main-title')

  const divContent = document.createElement('div')
  divContent.classList.add('content')

  const divSystem = document.createElement('div')
  divSystem.classList.add('system')
  divSystem.textContent = 'Клавиатура создана в операционной системе Windows'

  const divLanguage = document.createElement('div')
  divLanguage.classList.add('language')
  divLanguage.textContent =
    'Для переключения языка комбинация: левыe ctrl + alt'

  divContent.appendChild(divSystem)
  divContent.appendChild(divLanguage)

  const textarea = document.createElement('textarea')
  textarea.classList.add('textarea')
  textarea.cols = 50

  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  fragment.appendChild(h1)
  fragment.appendChild(divContent)
  fragment.appendChild(textarea)
  fragment.appendChild(keyboard)

  document.body.prepend(fragment)

  init()
  document.querySelector('textarea').focus()
})

document.addEventListener('keydown', logKey)

function logKey(e) {
  keyboard.push(`${e.key}`)

  document.querySelectorAll(`.keyboard .key`).forEach(function (element) {
    element.classList.remove('active')
  })

  document
    .querySelector(`.keyboard .key[data-key="${e.key}"]`)
    .classList.add('active')
}

function init(e) {
  let keyInput = ' '

  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i] === ' ') {
      keyboard[i] = 'Space'
    }

    if (keyboard[i] === 'Meta') {
      keyboard[i] = 'Wind'
    }

    if (keyboard[i] === 'ArrowLeft') {
    }
    // if (keyboard[i] === 'ArrowUp') {
    //   keyboard[i] = '▲'
    // }
    // if (keyboard[i] === 'ArrowRight') {
    //   keyboard[i] = '►'
    // }
    // if (keyboard[i] === 'ArrowDown') {
    //   keyboard[i] = '▼'
    // }
    // if (keyboard[i] === 'ArrowDown') {
    //   keyboard[i] = '▼'
    // }

    keyInput += `<div class="key" data-key="${keyboard[i]}">${keyboard[i]}</div>`
  }
  console.log(keyInput)

  document.querySelector('.keyboard').innerHTML = keyInput

  document.querySelectorAll(`.keyboard .key`).forEach(function (element) {
    element.addEventListener('click', function (e) {
      document.querySelectorAll(`.keyboard .key`).forEach(function (element) {
        element.classList.remove('active')
      })

      let code = this.getAttribute('data-key')
      if (code === 'Backspace') {
        console.log(e)
      }
      this.classList.add('active')
      console.log(code)
      console.log(e)
      document.querySelector('textarea').value += code
    })
  })
}
