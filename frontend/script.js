// --- SLIDESHOW ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // troca a cada 3 segundos
}

// --- LISTAR ANIMAIS ---
async function carregarAnimais() {
    try {
        const res = await fetch("http://localhost:8080/animais");
        const animais = await res.json();

        const lista = document.getElementById("listaAnimais");
        if (animais.length === 0) {
            lista.innerHTML = "<p>Nenhum animal cadastrado ainda.</p>";
            return;
        }

        let html = `
        <h3>Animais Cadastrados</h3>
        <table>
            <thead><tr>
                <th>ID</th><th>Nome</th><th>Espécie</th><th>Raça</th><th>Idade</th><th>Tutor</th>
            </tr></thead>
            <tbody>
        `;

        animais.forEach(a => {
            html += `
                <tr>
                    <td>${a.id}</td>
                    <td>${a.nome}</td>
                    <td>${a.especie}</td>
                    <td>${a.raca}</td>
                    <td>${a.idade}</td>
                    <td>${a.tutor}</td>
                </tr>`;
        });

        html += "</tbody></table>";
        lista.innerHTML = html;

    } catch (err) {
        console.error("Erro ao carregar animais:", err);
        document.getElementById("listaAnimais").innerHTML = "<p>Erro ao buscar animais.</p>";
    }
}

// --- CADASTRO DE ANIMAIS ---
document.getElementById("animalForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const animal = {
        nome: document.getElementById("nome").value,
        especie: document.getElementById("especie").value,
        raca: document.getElementById("raca").value,
        idade: parseInt(document.getElementById("idade").value),
        tutor: document.getElementById("tutor").value
    };

    try {
        const res = await fetch("http://localhost:8080/animais", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(animal)
        });

        if (res.ok) {
            alert("Animal cadastrado com sucesso!");
            document.getElementById("animalForm").reset();
            await carregarAnimais();
        } else {
            const erro = await res.json();
            alert("Erro: " + (erro.error || "Não foi possível cadastrar."));
        }
    } catch (error) {
        alert("Erro ao conectar com o servidor.");
        console.error(error);
    }
});

// --- REGISTRO DE SERVIÇO ---
document.getElementById("servicoForm")?.addEventListener("submit", async function (e) {
    e.preventDefault();

    const servico = {
        animalId: document.getElementById("animalId").value,
        tipo: document.getElementById("tipoServico").value,
        descricao: document.getElementById("descricao").value,
        data: document.getElementById("dataServico").value
    };

    try {
        await fetch("http://localhost:8080/servicos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(servico)
        });

        alert("Serviço registrado com sucesso!");
        document.getElementById("servicoForm").reset();
    } catch (error) {
        alert("Erro ao registrar serviço.");
        console.error(error);
    }
});

// --- CONSULTAR HISTÓRICO DE SERVIÇOS POR ANIMAL ---
document.getElementById("buscarHistorico")?.addEventListener("click", async function () {
    const idAnimal = document.getElementById("historicoAnimalId").value;

    try {
        const res = await fetch(`http://localhost:8080/animais/${idAnimal}/servicos`);
        const historico = await res.json();

        const historicoDiv = document.getElementById("historicoServicos");
        if (historico.length === 0) {
            historicoDiv.innerHTML = "<p>Nenhum serviço encontrado para este animal.</p>";
        } else {
            historicoDiv.innerHTML = "<h3>Histórico de Serviços:</h3>" + historico.map(s =>
                `<div class="card">
                    <strong>${s.tipo}</strong> - ${s.data}<br>
                    <small>${s.descricao}</small>
                </div>`
            ).join('');
        }
    } catch (error) {
        alert("Erro ao buscar histórico.");
        console.error(error);
    }
});

// --- INICIALIZAÇÃO ---
window.addEventListener("load", () => {
    carregarAnimais();
    if (slides.length > 0) showSlides();
});
