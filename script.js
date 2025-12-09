document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const status = document.getElementById("status");

    if (nome === "" || email === "" || mensagem === "") {
        status.style.color = "red";
        status.textContent = "Preencha todos os campos obrigatórios!";
        return;
    }

    // Enviar para o EmailJS
    emailjs.send("service_siwwf0h", "template_x5ohbym", {
        name: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    })
    .then(() => {
        status.style.color = "green";
        status.textContent = "Enviado com sucesso! Verifique seu e-mail";
        document.getElementById("contactForm").reset();
    })
    .catch(() => {
        status.style.color = "red";
        status.textContent = "Erro ao enviar. Tenta de novo!";
    });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');

let index = 0;

// Muda o slide
function updateSlide() {
  const slideWidth = slides[0].clientWidth; 
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Avançar
function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

// Voltar
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

// Botões
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Automático (muda a cada 3 segundos)
setInterval(nextSlide, 3000);

// Atualiza caso a tela mude de tamanho (responsividade real)
window.addEventListener('resize', updateSlide);

