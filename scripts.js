// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const input = document.getElementById("add")
const list = document.getElementById("list")
const footer = document.querySelector("main footer")
const error = document.getElementById("erro")

// Manipulando o input "add" para receber somente texto(letras).
input.addEventListener("input", () => {

    const regex = /^[A-Za-zÀ-ÿ\s]*$/;
    
    if (!regex.test(input.value)) {
        error.style.display = "block";
        // remove caracteres inválidos
        input.value = input.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
    } else {
        error.style.display = "none";
    }
});

const errorItem = footer.querySelector(".error-item");

// errorItem.innerHTML = "";

    const excluir = document.createElement("button")
    // excluir.innerHTML = "";
    excluir.classList.add("btn-excluir")
    excluir.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z" fill="white"/>
    </svg>
    `;
    
    
    excluir.addEventListener("click", (event) => {
        event.preventDefault();
        footer.remove();
    })
    
    errorItem.appendChild(excluir);

// Capturando o evento de submit do formulário.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valor = input.value.trim();

    if (valor !== "") {
        const li = document.createElement("li");
        li.classList.add("box-item");

        // Cria o checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Container do checkbox e do label
        const conteudo = document.createElement("div");
        conteudo.classList.add("content");

        // Cria o texto da que vai ser inserido na lista
        const label = document.createElement("label")
        label.textContent = valor;

        li.appendChild(checkbox);
        li.appendChild(label);

        list.appendChild(li)

        const botaoRemover = document.createElement("button")
        botaoRemover.innerHTML = `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.16666L12.5869 10.8501C12.4813 12.5576 12.4285 13.4114 12.0005 14.0253C11.7889 14.3287 11.5165 14.5849 11.2005 14.7773C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7766C4.46987 14.5838 4.19733 14.3272 3.98579 14.0232C3.55792 13.4084 3.5063 12.5534 3.40307 10.8435L3 4.16666" stroke="#6B6671" stroke-linecap="round"/>
<path d="M2 4.16668H14M10.7038 4.16668L10.2487 3.22783C9.9464 2.60418 9.7952 2.29236 9.53447 2.09788C9.47667 2.05474 9.4154 2.01637 9.35133 1.98314C9.0626 1.83334 8.71607 1.83334 8.023 1.83334C7.31253 1.83334 6.95733 1.83334 6.66379 1.98942C6.59873 2.02402 6.53665 2.06394 6.47819 2.10879C6.21443 2.31114 6.06709 2.63438 5.77241 3.28085L5.36861 4.16668" stroke="#6B6671" stroke-linecap="round"/>
<path d="M6.33337 11.5V7.5" stroke="#6B6671" stroke-linecap="round"/>
<path d="M9.66663 11.5V7.5" stroke="#6B6671" stroke-linecap="round"/>
</svg>
`
;

        botaoRemover.addEventListener("click", (event) => {
            event.preventDefault();
            li.remove();

            if (!document.body.contains(footer)) {
                document.querySelector("main").appendChild(footer);
            }

            try {
            footer.classList.add("show-result")
        } catch (error) {
            console.log(error)
            alert("Não foi possível excluir o item")
        }
        });
        

        li.appendChild(conteudo);
        li.appendChild(botaoRemover);
        

            
            
        list.appendChild(li);
        input.value = "";
        input.focus();


} else {
    alert("Digite algo para começar a lista");
}

    }
)