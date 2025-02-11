document.addEventListener("DOMContentLoaded", function () {
    // Criação dinâmica dos modais e adição ao body
    const modalsHTML = `
      <div id="modalsContainer">
        ${createModal("termsModal", "Termos de Uso", "Aqui você pode adicionar os termos do site detalhadamente. Certifique-se de incluir as informações relevantes para seus usuários.")}
        ${createModal("privacyModal", "Política de Privacidade", "Sua privacidade é importante para nós. Explicamos aqui como coletamos e utilizamos seus dados pessoais.")}
        ${createModal("cookiesModal", "Política de Cookies", "Nós usamos cookies para melhorar a experiência do usuário. Saiba mais sobre como os utilizamos.")}
        ${createModal("licensesModal", "Licenças", "Informações sobre licenças utilizadas neste site e nos serviços oferecidos.")}
        ${createModal("securityModal", "Segurança", "Nossa plataforma adota medidas de segurança para garantir a proteção dos seus dados.")}
      </div>
    `;
  
    document.body.insertAdjacentHTML("beforeend", modalsHTML);
  
    // Adiciona eventos de fechamento ao clicar fora do modal
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
          closeModal(modal.id);
        }
      });
    });
  });
  
  // Função para criar um modal HTML
  function createModal(id, title, content) {
    return `
      <div id="${id}" class="modal hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg w-96">
          <h2 class="text-lg font-semibold">${title}</h2>
          <p class="mt-2 text-sm text-gray-600">${content}</p>
          <button onclick="closeModal('${id}')" class="mt-4 w-full bg-violet-500 text-white py-2 rounded-lg">Fechar</button>
        </div>
      </div>
    `;
  }
  
  // Função para abrir um modal
  function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
  }
  
  // Função para fechar um modal
  function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
  }
  