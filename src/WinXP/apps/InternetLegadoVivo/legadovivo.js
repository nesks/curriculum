import React, { useState } from 'react';
import styled from 'styled-components';

const LegadoVivo = () => {
  const [showIframe, setShowIframe] = useState(true);
  const [activeTab, setActiveTab] = useState('visao');

  const openOfficialSite = () => {
    window.open('https://www.seulegadovivo.com.br/', '_blank');
  };

  const openAppStore = () => {
    window.open('https://apps.apple.com/br/app/legado-vivo/id6756851315', '_blank');
  };

  return (
    <Container>
      {/* Header Premium */}
      <Header>
        <HeaderContent>
          <LogoSection>
            <LogoIcon>&#8734;</LogoIcon>
            <HeaderTextContainer>
              <HeaderTitle>Legado Vivo</HeaderTitle>
              <HeaderSubtitle>Projeto Full-Stack End-to-End em Produção</HeaderSubtitle>
            </HeaderTextContainer>
          </LogoSection>
          <SeniorBadge>PROJETO SÊNIOR</SeniorBadge>
        </HeaderContent>
      </Header>

      <ContentWrapper>
        {/* Sidebar com informações detalhadas */}
        <Sidebar>
          <ProfileSection>
            <RoleTitle>Responsável End-to-End</RoleTitle>
            <RoleSubtitle>Ideação à Produção</RoleSubtitle>
          </ProfileSection>

          <Section>
            <SectionTitle>Sobre o Projeto</SectionTitle>
            <SectionContent>
              Aplicativo mobile multiplataforma (iOS e Android) para registro e envio de mensagens para o futuro.
              <HighlightBox>
                Conteúdo emocional tratado como informação sensível e de alto valor
              </HighlightBox>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Desafios Técnicos</SectionTitle>
            <SectionContent>
              <ChallengeList>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  Persistência de dados de longo prazo
                </ChallengeItem>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  Agendamento preciso de entregas
                </ChallengeItem>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  Sistema de pagamentos por créditos
                </ChallengeItem>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  Push notifications escaláveis
                </ChallengeItem>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  Segurança e criptografia (LGPD)
                </ChallengeItem>
                <ChallengeItem>
                  <ChallengeIcon>&#9679;</ChallengeIcon>
                  CI/CD e múltiplos ambientes
                </ChallengeItem>
              </ChallengeList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Stack - Frontend Mobile</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#61DAFB">React Native</TechBadge>
                <TechBadge bg="#000020">Expo</TechBadge>
                <TechBadge bg="#3178C6">TypeScript</TechBadge>
              </TechContainer>
              <TechDescription>
                Cross-platform com única base de código para iOS e Android
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Stack - Backend</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#339933">Node.js</TechBadge>
                <TechBadge bg="#3178C6">TypeScript</TechBadge>
                <TechBadge bg="#336791">PostgreSQL</TechBadge>
              </TechContainer>
              <TechDescription>
                APIs REST + Camada de serviços + Gateway de pagamento
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Infraestrutura & DevOps</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#2496ED">Docker</TechBadge>
                <TechBadge bg="#FF6C37">CI/CD</TechBadge>
                <TechBadge bg="#232F3E">Cloud</TechBadge>
              </TechContainer>
              <TechDescription>
                Ambientes: Dev, Staging, Produção | Monitoramento e logs
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Minha Contribuição</SectionTitle>
            <SectionContent>
              <ContributionList>
                <ContributionItem><Bullet>&#9658;</Bullet> Concepção da ideia e produto</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Arquitetura técnica completa</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Backend e Frontend (Full-Stack)</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Infraestrutura e CI/CD</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> UI/UX e fluxos de usuário</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Deploy e publicação nas lojas</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Regras de negócio e monetização</ContributionItem>
                <ContributionItem><Bullet>&#9658;</Bullet> Manutenção e evolução contínua</ContributionItem>
              </ContributionList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Status</SectionTitle>
            <SectionContent>
              <StatusContainer>
                <StatusItem available>
                  <StatusIcon></StatusIcon>
                  App Store (iOS)
                </StatusItem>
                <StatusItem pending>
                  <StatusIcon></StatusIcon>
                  Google Play (em breve)
                </StatusItem>
              </StatusContainer>
            </SectionContent>
          </Section>
        </Sidebar>

        {/* Área principal */}
        <MainContent>
          {/* Tabs de navegação */}
          <TabsContainer>
            <Tab active={activeTab === 'visao'} onClick={() => setActiveTab('visao')}>
              Visão Geral
            </Tab>
            <Tab active={activeTab === 'tecnico'} onClick={() => setActiveTab('tecnico')}>
              Detalhes Técnicos
            </Tab>
            <Tab active={activeTab === 'site'} onClick={() => setActiveTab('site')}>
              Site Oficial
            </Tab>
          </TabsContainer>

          {activeTab === 'visao' && (
            <TabContent>
              <ArticleSection>
                <ArticleTitle>Visão Geral do Projeto</ArticleTitle>
                <ArticleText>
                  O <strong>Legado Vivo</strong> é um aplicativo mobile multiplataforma criado para permitir que pessoas
                  registrem, armazenem e enviem mensagens para o futuro, tratando conteúdo emocional como informação
                  sensível e de alto valor.
                </ArticleText>
                <ArticleText>
                  O projeto foi pensado desde o início para operar com <strong>confiabilidade, segurança, escalabilidade
                  e automação</strong>, garantindo que mensagens criadas hoje sejam entregues corretamente mesmo após
                  longos períodos de tempo.
                </ArticleText>
              </ArticleSection>

              <ArticleSection>
                <ArticleTitle>Objetivo Principal</ArticleTitle>
                <ArticleText>
                  Oferecer uma plataforma confiável para preservação e entrega de mensagens ao longo do tempo, resolvendo
                  problemas técnicos e de produto como:
                </ArticleText>
                <ObjectiveList>
                  <ObjectiveItem>Garantir que mensagens sejam armazenadas com segurança por longos períodos</ObjectiveItem>
                  <ObjectiveItem>Controlar quando e para quem cada mensagem pode ser enviada</ObjectiveItem>
                  <ObjectiveItem>Criar experiência simples mesmo com regras de negócio complexas</ObjectiveItem>
                  <ObjectiveItem>Viabilizar monetização sustentável através de créditos</ObjectiveItem>
                  <ObjectiveItem>Garantir escalabilidade e manutenção no longo prazo</ObjectiveItem>
                </ObjectiveList>
              </ArticleSection>

              <ArticleSection>
                <ArticleTitle>Funcionalidades Principais</ArticleTitle>
                <FeatureGrid>
                  <FeatureCard>
                    <FeatureIcon>&#128272;</FeatureIcon>
                    <FeatureTitle>Autenticação Segura</FeatureTitle>
                    <FeatureDesc>Sistema completo de auth e autorização</FeatureDesc>
                  </FeatureCard>
                  <FeatureCard>
                    <FeatureIcon>&#128231;</FeatureIcon>
                    <FeatureTitle>Mensagens Agendadas</FeatureTitle>
                    <FeatureDesc>Criação, edição e agendamento de envio</FeatureDesc>
                  </FeatureCard>
                  <FeatureCard>
                    <FeatureIcon>&#128276;</FeatureIcon>
                    <FeatureTitle>Push Notifications</FeatureTitle>
                    <FeatureDesc>Notificações para eventos e engajamento</FeatureDesc>
                  </FeatureCard>
                  <FeatureCard>
                    <FeatureIcon>&#128179;</FeatureIcon>
                    <FeatureTitle>Sistema de Créditos</FeatureTitle>
                    <FeatureDesc>Pagamento integrado com gateway</FeatureDesc>
                  </FeatureCard>
                </FeatureGrid>
              </ArticleSection>

              <ButtonGroup>
                <PrimaryButton onClick={openAppStore}>
                   Baixar na App Store
                </PrimaryButton>
                <SecondaryButton onClick={openOfficialSite}>
                  Visitar Site Oficial
                </SecondaryButton>
              </ButtonGroup>
            </TabContent>
          )}

          {activeTab === 'tecnico' && (
            <TabContent>
              <ArticleSection>
                <ArticleTitle>Arquitetura Técnica</ArticleTitle>
                <ArticleText>
                  O sistema foi desenvolvido com foco em <strong>produto real, pronto para uso em produção</strong>,
                  e não apenas como prova de conceito. A arquitetura contempla:
                </ArticleText>
              </ArticleSection>

              <TechDetailGrid>
                <TechDetailCard>
                  <TechDetailTitle>Frontend Mobile</TechDetailTitle>
                  <TechDetailList>
                    <li>React Native com Expo</li>
                    <li>Componentes reutilizáveis</li>
                    <li>Gerenciamento de estado</li>
                    <li>Tratamento de erros e offline</li>
                    <li>Performance otimizada</li>
                  </TechDetailList>
                </TechDetailCard>

                <TechDetailCard>
                  <TechDetailTitle>Backend</TechDetailTitle>
                  <TechDetailList>
                    <li>Node.js com TypeScript</li>
                    <li>APIs REST estruturadas</li>
                    <li>Camada de serviços isolada</li>
                    <li>Validações e controle de acesso</li>
                    <li>Integrações externas</li>
                  </TechDetailList>
                </TechDetailCard>

                <TechDetailCard>
                  <TechDetailTitle>Banco de Dados</TechDetailTitle>
                  <TechDetailList>
                    <li>PostgreSQL</li>
                    <li>Modelagem relacional</li>
                    <li>Migrações versionadas</li>
                    <li>Queries otimizadas</li>
                    <li>Integridade de dados</li>
                  </TechDetailList>
                </TechDetailCard>

                <TechDetailCard>
                  <TechDetailTitle>DevOps</TechDetailTitle>
                  <TechDetailList>
                    <li>Docker containerizado</li>
                    <li>CI/CD automatizado</li>
                    <li>Ambientes separados</li>
                    <li>Monitoramento e logs</li>
                    <li>Deploy controlado</li>
                  </TechDetailList>
                </TechDetailCard>
              </TechDetailGrid>

              <ArticleSection>
                <ArticleTitle>Segurança e Compliance</ArticleTitle>
                <SecurityList>
                  <SecurityItem>
                    <SecurityIcon>&#128274;</SecurityIcon>
                    <SecurityText>
                      <strong>Criptografia avançada</strong> para proteção de dados sensíveis
                    </SecurityText>
                  </SecurityItem>
                  <SecurityItem>
                    <SecurityIcon>&#128203;</SecurityIcon>
                    <SecurityText>
                      <strong>Conformidade LGPD</strong> em todo o tratamento de dados
                    </SecurityText>
                  </SecurityItem>
                  <SecurityItem>
                    <SecurityIcon>&#127463;&#127479;</SecurityIcon>
                    <SecurityText>
                      <strong>Servidores 100% no Brasil</strong> para maior segurança jurídica
                    </SecurityText>
                  </SecurityItem>
                </SecurityList>
              </ArticleSection>
            </TabContent>
          )}

          {activeTab === 'site' && (
            <TabContent>
              <IframeHeader>
                <IframeTitle>seulegadovivo.com.br</IframeTitle>
                <IframeButtonGroup>
                  <IframeButton onClick={() => setShowIframe(!showIframe)}>
                    {showIframe ? '[ - ] Minimizar' : '[ + ] Expandir'}
                  </IframeButton>
                  <IframeButton onClick={openAppStore}>
                    App Store
                  </IframeButton>
                  <IframeButton primary onClick={openOfficialSite}>
                    Abrir em Nova Aba
                  </IframeButton>
                </IframeButtonGroup>
              </IframeHeader>

              {showIframe && (
                <IframeContainer>
                  <StyledIframe
                    src="https://www.seulegadovivo.com.br/"
                    title="Legado Vivo - Site Oficial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  />
                </IframeContainer>
              )}

              {!showIframe && (
                <MinimizedBox onClick={() => setShowIframe(true)}>
                  <MinimizedText>Clique para expandir o site</MinimizedText>
                </MinimizedBox>
              )}
            </TabContent>
          )}
        </MainContent>
      </ContentWrapper>

      {/* Footer */}
      <Footer>
        <FooterText>
          Felipe Sousa Nunes | Projeto End-to-End | React Native + Node.js + PostgreSQL + Docker
        </FooterText>
      </Footer>
    </Container>
  );
};

// Styled Components - Tema Dourado Premium
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  display: flex;
  flex-direction: column;
  font-family: 'Tahoma', 'Segoe UI', Arial, sans-serif;
  font-size: 12px;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  padding: 15px 20px;
  border-bottom: 2px solid #d4a825;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ffd700, #d4a825, #ffd700, transparent);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  font-size: 32px;
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  color: #ffd700;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  letter-spacing: 1px;
`;

const HeaderSubtitle = styled.div`
  color: #c0c0c0;
  font-size: 11px;
  margin-top: 2px;
`;

const SeniorBadge = styled.div`
  background: linear-gradient(135deg, #ffd700 0%, #d4a825 100%);
  color: #1a1a2e;
  padding: 6px 14px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 300px;
  min-width: 300px;
  background: linear-gradient(180deg, #16213e 0%, #1a1a2e 100%);
  border-right: 1px solid #d4a825;
  overflow-y: auto;
  padding: 0;

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid #d4a825;
  }
`;

const ProfileSection = styled.div`
  background: linear-gradient(135deg, #d4a825 0%, #b8860b 100%);
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ffd700;
`;

const RoleTitle = styled.div`
  color: #1a1a2e;
  font-size: 14px;
  font-weight: bold;
`;

const RoleSubtitle = styled.div`
  color: #1a1a2e;
  font-size: 10px;
  opacity: 0.8;
  margin-top: 2px;
`;

const Section = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 168, 37, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

const SectionTitle = styled.div`
  background: linear-gradient(90deg, rgba(212, 168, 37, 0.2) 0%, transparent 100%);
  color: #ffd700;
  font-weight: bold;
  font-size: 11px;
  padding: 6px 10px;
  border-bottom: 1px solid rgba(212, 168, 37, 0.3);
  letter-spacing: 0.5px;
`;

const SectionContent = styled.div`
  padding: 10px;
  color: #e0e0e0;
  font-size: 11px;
  line-height: 1.5;
`;

const HighlightBox = styled.div`
  margin-top: 8px;
  padding: 8px;
  background: rgba(255, 215, 0, 0.1);
  border-left: 3px solid #ffd700;
  color: #ffd700;
  font-size: 10px;
  font-style: italic;
`;

const ChallengeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ChallengeItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 10px;
`;

const ChallengeIcon = styled.span`
  color: #ffd700;
  font-size: 6px;
  margin-top: 4px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
`;

const TechBadge = styled.span`
  background: ${props => props.bg};
  color: #ffffff;
  padding: 3px 8px;
  font-size: 9px;
  font-weight: bold;
  border-radius: 2px;
`;

const TechDescription = styled.div`
  color: #a0a0a0;
  font-size: 9px;
  font-style: italic;
`;

const ContributionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContributionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
`;

const Bullet = styled.span`
  color: #ffd700;
  font-size: 8px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  background: ${props => props.available ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 193, 7, 0.1)'};
  border-radius: 3px;
  font-size: 10px;
  color: ${props => props.available ? '#22c55e' : '#ffc107'};
`;

const StatusIcon = styled.span`
  font-size: 12px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0f0f1a;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  background: #16213e;
  border-bottom: 1px solid #d4a825;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const Tab = styled.button`
  padding: 10px 20px;
  background: ${props => props.active ? 'linear-gradient(180deg, #d4a825 0%, #b8860b 100%)' : 'transparent'};
  color: ${props => props.active ? '#1a1a2e' : '#c0c0c0'};
  border: none;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 11px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(180deg, #d4a825 0%, #b8860b 100%)' : 'rgba(212, 168, 37, 0.1)'};
    color: ${props => props.active ? '#1a1a2e' : '#ffd700'};
  }

  @media (max-width: 480px) {
    flex: 1;
    text-align: center;
    padding: 8px 10px;
  }
`;

const TabContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const ArticleSection = styled.div`
  margin-bottom: 25px;
`;

const ArticleTitle = styled.h2`
  color: #ffd700;
  font-size: 16px;
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(212, 168, 37, 0.3);
`;

const ArticleText = styled.p`
  color: #d0d0d0;
  font-size: 12px;
  line-height: 1.7;
  margin: 0 0 12px 0;
`;

const ObjectiveList = styled.ul`
  color: #c0c0c0;
  font-size: 11px;
  line-height: 1.8;
  padding-left: 20px;
  margin: 10px 0;
`;

const ObjectiveItem = styled.li`
  margin-bottom: 6px;

  &::marker {
    color: #ffd700;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 168, 37, 0.2);
  border-radius: 6px;
  padding: 15px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 28px;
  margin-bottom: 8px;
`;

const FeatureTitle = styled.div`
  color: #ffd700;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const FeatureDesc = styled.div`
  color: #a0a0a0;
  font-size: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 25px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #ffd700 0%, #d4a825 100%);
  color: #1a1a2e;
  border: none;
  padding: 12px 24px;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #ffd700;
  border: 1px solid #d4a825;
  padding: 12px 24px;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: rgba(212, 168, 37, 0.1);
  }
`;

const TechDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TechDetailCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 168, 37, 0.2);
  border-radius: 6px;
  padding: 15px;
`;

const TechDetailTitle = styled.div`
  color: #ffd700;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(212, 168, 37, 0.2);
`;

const TechDetailList = styled.ul`
  color: #c0c0c0;
  font-size: 10px;
  line-height: 1.8;
  padding-left: 15px;
  margin: 0;
`;

const SecurityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`;

const SecurityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 168, 37, 0.15);
  border-radius: 4px;
`;

const SecurityIcon = styled.span`
  font-size: 20px;
`;

const SecurityText = styled.div`
  color: #d0d0d0;
  font-size: 11px;
`;

const IframeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #d4a825 0%, #b8860b 100%);
  padding: 8px 12px;
  border-radius: 4px 4px 0 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 12px;
  }
`;

const IframeTitle = styled.span`
  color: #1a1a2e;
  font-weight: bold;
  font-size: 11px;
`;

const IframeButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const IframeButton = styled.button`
  background: ${props => props.primary ?
    'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)' :
    'linear-gradient(180deg, #f0f0f0 0%, #d4d0c8 100%)'};
  border: 1px solid ${props => props.primary ? '#ffd700' : '#808080'};
  padding: 4px 12px;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 10px;
  cursor: pointer;
  color: ${props => props.primary ? '#ffd700' : '#000000'};
  font-weight: ${props => props.primary ? 'bold' : 'normal'};

  &:hover {
    opacity: 0.9;
  }
`;

const IframeContainer = styled.div`
  flex: 1;
  border: 1px solid rgba(212, 168, 37, 0.3);
  border-top: none;
  background: #ffffff;
  min-height: 400px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  min-height: 400px;
`;

const MinimizedBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #16213e;
  border: 1px solid rgba(212, 168, 37, 0.3);
  border-top: none;
  cursor: pointer;
  min-height: 200px;

  &:hover {
    background: #1a1a2e;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MinimizedText = styled.span`
  color: #d4a825;
  font-size: 12px;
`;

const Footer = styled.div`
  background: linear-gradient(180deg, #16213e 0%, #1a1a2e 100%);
  border-top: 1px solid #d4a825;
  padding: 8px 15px;
  text-align: center;
`;

const FooterText = styled.span`
  color: #a0a0a0;
  font-size: 10px;
`;

export default LegadoVivo;
