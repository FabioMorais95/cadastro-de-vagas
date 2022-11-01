const btnListVagas = document.querySelector('.btnVagas').addEventListener("click", listVacancy)
const btnCadastro = document.querySelector('.btnCadastro').addEventListener('click', register)
let identifier = 0
let vacancys = []


function listVacancy() {
     const listVacancy = document.querySelector('.lista-de-vagas')
     const createUl = document.createElement('ul')
     createUl.id = 'lista-de-vagas'
     const createLi = document.createElement('li')


     createUl.appendChild(createLi)
     if (vacancys.length <= 0) {
          alert('Lista de vagas vazia')
     } else {
          listVacancy.appendChild(createUl)
          let percorrerVagas = ''
          vacancys.forEach((elemento) => {
               percorrerVagas = elemento.name + '\n' + 'Data limite: ' + elemento.dateLimit + '\n' + 'Descrição: ' + elemento.descriptionArea + '\n' 
          })
          createLi.innerText = `Nome da vaga: ${percorrerVagas}`
     }
}
function register() {
     const ul = document.querySelector('.ul')
     const createLi = document.createElement('li')
     createLi.id = 'list-vagas' + identifier++
     createLi.className = 'list-vagas'

     const createInputName = document.createElement('input')
     createInputName.type = 'text'
     createInputName.id = 'inputName'
     createInputName.className = 'inputName'
     createInputName.placeholder = 'Nome da vaga'

     const date = document.createElement('input')
     date.type = 'text'
     date.id = 'dateLimit'
     date.className = 'inputDate'
     date.placeholder = 'Data limite da vaga'

     const description = document.createElement('textarea')
     description.cols = '30   '
     description.rows = '5'
     description.placeholder = 'Descrição da vaga'
     description.className = 'descriptionArea'

     const line = document.createElement('div')
     line.id = 'line'

     const btnAdd = document.createElement('button')
     btnAdd.id = 'btnAdd'
     btnAdd.type = 'button'
     btnAdd.innerText = 'Salvar Vaga'

     ul.appendChild(createLi)
     createLi.append(createInputName, date, description, btnAdd, line)
     document.querySelector('#btnAdd').addEventListener('click', saveVacancy)
}
function saveVacancy() {
     const name = document.querySelector('#inputName').value
     const dateLimit = document.querySelector('#dateLimit').value
     const descriptionArea = document.querySelector('.descriptionArea').value
     const confirmation = confirm(`Deseja salvar as informações a baixo?
Nome: ${name}
Data Limite: ${dateLimit}
Descrição: ${descriptionArea}`)
     if(name == '' || dateLimit == '' || descriptionArea == ''){
          alert('Preencha todos os campos')
     }else if (confirmation) {
          const vaga = {
               name,
               dateLimit,
               descriptionArea,
               index: vacancys.length + 1
          }
          vacancys.push(vaga)
          alert('Vaga criada e disponível na lista de vagas!!')

          document.querySelector('#inputName').value = ''
          document.querySelector('#dateLimit').value =''
          document.querySelector('.descriptionArea').value =''
     }
          
     }
