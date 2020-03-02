const createLoginModal = function() {
  const div = document.createElement('div')
  div.innerHTML = '我是弹窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

document.getElementById('loginBtn').onclick = () => {
  const loginModal = createLoginModal()
  loginModal.style.display = 'block'
}