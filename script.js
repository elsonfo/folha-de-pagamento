document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('payrollForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calculatePayroll();
    });

    // Adicionar um funcionário inicial ao carregar a página
    addEmployee();
});

function addEmployee() {
    const container = document.getElementById('employeeEntries');
    const index = container.children.length + 1;
    const div = document.createElement('div');

    div.innerHTML = `
        <label>Funcionário ${index}: </label>
        <input type="text" id="name${index}" placeholder="Nome">
        <input type="number" id="hours${index}" placeholder="Horas trabalhadas" value="0">
        <input type="number" id="rate${index}" placeholder="Taxa por hora" value="0">
        <input type="number" id="bonus${index}" placeholder="Bônus" value="0">
        <input type="number" id="deductions${index}" placeholder="Descontos" value="0">
    `;
    container.appendChild(div);
}

function calculatePayroll() {
    const entries = document.getElementById('employeeEntries').children;
    let resultsHTML = "";
    for (let i = 0; i < entries.length; i++) {
        const name = document.getElementById(`name${i+1}`).value;
        const hours = parseFloat(document.getElementById(`hours${i+1}`).value);
        const rate = parseFloat(document.getElementById(`rate${i+1}`).value);
        const bonus = parseFloat(document.getElementById(`bonus${i+1}`).value);
        const deductions = parseFloat(document.getElementById(`deductions${i+1}`).value);

        const salary = hours * rate + bonus - deductions;
        resultsHTML += `<p>${name}: R$ ${salary.toFixed(2)}</p>`;
    }
    document.getElementById('results').innerHTML = resultsHTML;
}

function printReport() {
    window.print();
}