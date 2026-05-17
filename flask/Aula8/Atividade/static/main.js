/**
 * main.js — Painel de Consultas Médicas
 * Arquivo fornecido. NÃO MODIFICAR.
 */

document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('form-consulta');
    const botao      = document.getElementById('btn-buscar');
    const btnText    = botao ? botao.querySelector('.btn-text') : null;
    const input      = document.getElementById('especialidade');

    // Feedback visual ao submeter
    if (formulario && botao) {
        formulario.addEventListener('submit', function () {
            if (!input || !input.value.trim()) return;
            botao.classList.add('loading');
            botao.disabled = true;
            if (btnText) btnText.textContent = 'Buscando...';
        });
    }

    // Auto-foco no campo
    if (input) input.focus();

    // Capitaliza a primeira letra de cada palavra automaticamente
    if (input) {
        input.addEventListener('blur', function () {
            this.value = this.value
                .toLowerCase()
                .replace(/\b\w/g, c => c.toUpperCase());
        });
    }

});

// Função chamada pelos chips de sugestão
function preencherBusca(especialidade) {
    const input = document.getElementById('especialidade');
    if (input) {
        input.value = especialidade;
        input.focus();
    }
}
