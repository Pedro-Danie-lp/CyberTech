document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada!");   

const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Mensagem enviada!");
            form.reset();
        });
    }
})  ;