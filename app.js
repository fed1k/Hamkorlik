const btn = document.querySelector('.link_bnt')
const card = document.querySelector('#two')

btn.addEventListener('click',()=>{
  card.classList.toggle('hidden')
})