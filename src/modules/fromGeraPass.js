import geraChar from './geradores'

const passwordGerada = document.querySelector('.password')
const qtdCaract = document.querySelector('.qntd_caract')
const addNumb = document.querySelector('.check_numb')
const addMaiuscula = document.querySelector('.check_maiusc')
const addMinuscula = document.querySelector('.check_minusc')
const addsuimbol = document.querySelector('.check_simbo')
const geraPassButtn = document.querySelector('.gera_pass_buttn')

export default () => {
   geraPassButtn.addEventListener('click', () => {
      passwordGerada.innerHTML = gera();
   })
}

function gera() {
   const senha = geraChar(
      qtdCaract.value,
      addMaiuscula.checked,
      addMinuscula.checked,
      addNumb.checked,
      addsuimbol.checked
   )

   return senha || 'Nada selecionado.';
}