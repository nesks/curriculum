import React, { useState } from 'react';


const About = () => {

    return(
  <div id="about">
  {/* About Section*/}
  <section className="bg-light py-5">
    <div className="container px-5">
      <div className="row gx-5 justify-content-center">
        <div className="col-xxl-8">
          <div className="text-center my-5">
            <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Atividades na empresa</span></h2>
            <p className="lead fw-light mb-4">Iniciei na Camp em outubro de 2021 como desenvolvedor full-stack.</p>
            <p className="text-muted">Ao ingressar na empresa fui alocado no projeto chamado Acampa. 
            <ul>
                            <li class="nav-item">Desenvolvimento do aplicativo móvel (principal atividade atualmente):
 Isso envolve escrever código para criar e manter nosso aplicativo do ACAMPA para plataformas com iOS e Android. Envolvido em todas as fases do desenvolvimento do aplicativo, desde a concepção até a implementação e testes.</li>
                            <li class="nav-item">Desenvolvimento do Backend do projeto (envolve o backend do painel e do aplicativo):
Responsável por criar e manter a lógica de funcionamento da parte do servidor da aplicação.
Implementar soluções eficientes para garantir o desempenho e a escalabilidade do backend.
Trabalhar em conjunto com a equipe para integrar novos recursos e funcionalidades ao backend.</li>
                            <li class="nav-item">Desenvolvimento do Frontend do Painel, Quando Necessário:
Colaborar com o desenvolvimento da interface do usuário quando houver demanda.
Utilizar tecnologias front-end como HTML, CSS e JavaScript para criar interfaces intuitivas e responsivas.
</li>
                            <li class="nav-item">Auxiliar com Demandas e Ajudar com Tarefas Onde Estão Tendo Dificuldades:
Oferecer suporte técnico aos membros da equipe em questões relacionadas ao desenvolvimento.
Identificar e resolver problemas técnicos, fornecendo orientação e assistência conforme necessário.
Colaborar ativamente em situações onde os colegas encontram dificuldades, promovendo um ambiente de trabalho colaborativo e de aprendizado mútuo.
                            </li>
                         </ul> 
</p>
            {/* <div className="d-flex justify-content-center fs-2 gap-4">
              <a className="text-gradient" href="#!"><i className="bi bi-twitter" /></a>
              <a className="text-gradient" href="#!"><i className="bi bi-linkedin" /></a>
              <a className="text-gradient" href="#!"><i className="bi bi-github" /></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};


export default About;