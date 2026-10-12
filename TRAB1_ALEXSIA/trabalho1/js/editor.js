
let menuItems = ['Home', 'Sobre', 'Contato'];


const form = document.querySelector('#menu-form');
const itemsContainer = document.querySelector('#items-container');
const btnAdd = document.querySelector('#btn-add-item');
const btnRemove = document.querySelector('#btn-remove-item');
const previewList = document.querySelector('#preview-list');
const previewImg = document.querySelector('#preview-image');


const bgColorInput = document.querySelector('#bg-color');
const itemColorInput = document.querySelector('#item-color');
const textColorInput = document.querySelector('#text-color');
const spacingInput = document.querySelector('#spacing');
const imgUrlInput = document.querySelector('#menu-image');

//para criar as caixinhas
function renderInputs() {
    itemsContainer.innerHTML = '';//para garantir que reinicie sem duplicacao
    menuItems.forEach((item, index) => {
        const wrapper = document.createElement('div');//cria as novas caixas
        const label = document.createElement('label');
        label.textContent = `Texto do Item ${index + 1}:`;
        
        const input = document.createElement('input');
        input.type = 'text';//to definindo qual vai ser o tipo do input
        input.value = item; //colocando o valor no array
        
       
        input.addEventListener('input', (e) => {//adicionando as mudanças em tempo real
            menuItems[index] = e.target.value;//adicionando na caixinha o texto digitado
            updatePreview();
            //guarda e atualiza
        });

        wrapper.appendChild(label);
        wrapper.appendChild(input);//adc os elementos na div
        itemsContainer.appendChild(wrapper);
    });
    updatePreview();
}


function updatePreview() {
  
    if (imgUrlInput.value.trim() !== '') {
        previewImg.src = imgUrlInput.value;//pega  url da imagem colocado no input
        previewImg.style.display = 'block';//deixando imagem visivel
    
    } else {
        previewImg.style.display = 'none';
    }

   
    previewList.style.backgroundColor = bgColorInput.value;
    previewList.style.gap = `${spacingInput.value}px`;

    previewList.innerHTML = '';//tiando os antigos 
    menuItems.forEach(text => {
        if(text.trim() === '') return; 
        const li = document.createElement('li');//cria a caixinha
        li.textContent = text;//aplica o texto
        li.style.backgroundColor = itemColorInput.value;//a cor 
        li.style.color = textColorInput.value;//cor do texto
        previewList.appendChild(li);//adc na ul que ja existe
    });
}


btnAdd.addEventListener('click', () => {//adc botao
    if (menuItems.length < 8) { 
        menuItems.push('Novo Item');//permite criar um novo botaão
        renderInputs();
    }
});

btnRemove.addEventListener('click', () => {//tirar botao
    if (menuItems.length > 1) { 
        menuItems.pop();
        renderInputs();
    }
});


[bgColorInput, itemColorInput, textColorInput, spacingInput, imgUrlInput].forEach(input => {
    input.addEventListener('input', updatePreview);//ta atualizando sempre que tenha uma mudança
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
});


renderInputs();//carrega as caixinhas padrão