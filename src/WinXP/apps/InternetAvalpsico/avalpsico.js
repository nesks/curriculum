import React, { useState } from 'react';
import styled from 'styled-components';

const Avalpsico = () => {
  const [showIframe, setShowIframe] = useState(true);

  const openOfficialSite = () => {
    window.open('https://avalpsico.com/', '_blank');
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderContent>
          <HeaderTextContainer>
            <HeaderTitle>AvalPsico</HeaderTitle>
            <HeaderSubtitle>Experiência como Freelancer - Correções e Performance</HeaderSubtitle>
          </HeaderTextContainer>
          <FreelancerBadge>FREELANCER</FreelancerBadge>
        </HeaderContent>
      </Header>

      <ContentWrapper>
        {/* Sidebar com informações */}
        <Sidebar>
          <Section>
            <SectionTitle>Sobre a Empresa</SectionTitle>
            <SectionContent>
              Plataforma web que automatiza a correção e interpretação de testes psicológicos para psicólogos licenciados no Brasil.
              <StatsBox>
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Usuários</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>20+</StatNumber>
                  <StatLabel>Testes</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>4.9</StatNumber>
                  <StatLabel>Avaliação</StatLabel>
                </StatItem>
              </StatsBox>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Período</SectionTitle>
            <SectionContent>
              <PeriodBox>
                <PeriodIcon>&#128197;</PeriodIcon>
                <PeriodText>
                  <strong>Maio - Julho 2025</strong>
                  <br />
                  <span>3 meses como Freelancer</span>
                </PeriodText>
              </PeriodBox>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Minha Contribuição</SectionTitle>
            <SectionContent>
              <ContributionList>
                <ContributionItem>
                  <Bullet>&#9658;</Bullet>
                  <ContributionText>
                    <strong>Correção de Bugs</strong>
                    <br />
                    <small>Identificação e resolução de problemas no sistema</small>
                  </ContributionText>
                </ContributionItem>
                <ContributionItem>
                  <Bullet>&#9658;</Bullet>
                  <ContributionText>
                    <strong>Melhoria de Performance</strong>
                    <br />
                    <small>Otimização de queries e tempo de resposta</small>
                  </ContributionText>
                </ContributionItem>
                <ContributionItem>
                  <Bullet>&#9658;</Bullet>
                  <ContributionText>
                    <strong>Manutenção do Sistema</strong>
                    <br />
                    <small>Suporte e melhorias contínuas</small>
                  </ContributionText>
                </ContributionItem>
              </ContributionList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Stack Utilizada</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#FF2D20">Laravel</TechBadge>
                <TechBadge bg="#4FC08D">PHP</TechBadge>
                <TechBadge bg="#336791">MySQL</TechBadge>
              </TechContainer>
              <TechDescription>
                Arquitetura monolítica em Laravel
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Sobre o Produto</SectionTitle>
            <SectionContent>
              <FeatureList>
                <FeatureItem><FeatureIcon>&#9679;</FeatureIcon> Correção automatizada de testes psicológicos</FeatureItem>
                <FeatureItem><FeatureIcon>&#9679;</FeatureIcon> Aprovado pelo SATEPSI</FeatureItem>
                <FeatureItem><FeatureIcon>&#9679;</FeatureIcon> Geração de laudos (CNH, Porte de Arma)</FeatureItem>
                <FeatureItem><FeatureIcon>&#9679;</FeatureIcon> Redução de 90% no tempo de correção</FeatureItem>
              </FeatureList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Testes Disponíveis</SectionTitle>
            <SectionContent>
              <TestsGrid>
                <TestCategory>
                  <TestCategoryTitle>Personalidade</TestCategoryTitle>
                  <TestList>Pfister, Zulliger, Palográfico</TestList>
                </TestCategory>
                <TestCategory>
                  <TestCategoryTitle>Inteligência</TestCategoryTitle>
                  <TestList>WAIS-III, WISC-IV, Beta-III, R-1</TestList>
                </TestCategory>
                <TestCategory>
                  <TestCategoryTitle>Atenção</TestCategoryTitle>
                  <TestList>AC-15, BPA, CTA, Teaco-2</TestList>
                </TestCategory>
              </TestsGrid>
            </SectionContent>
          </Section>
        </Sidebar>

        {/* Área principal com iframe */}
        <MainContent>
          <IframeHeader>
            <IframeTitle>avalpsico.com</IframeTitle>
            <ButtonGroup>
              <ActionButton onClick={() => setShowIframe(!showIframe)}>
                {showIframe ? '[ - ] Minimizar' : '[ + ] Expandir'}
              </ActionButton>
              <ActionButton primary onClick={openOfficialSite}>
                Abrir em Nova Aba ↗
              </ActionButton>
            </ButtonGroup>
          </IframeHeader>

          {showIframe && (
            <IframeContainer>
              <StyledIframe
                src="https://avalpsico.com/"
                title="AvalPsico - Site Oficial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </IframeContainer>
          )}

          {!showIframe && (
            <MinimizedBox onClick={() => setShowIframe(true)}>
              <MinimizedText>Clique para expandir o site</MinimizedText>
            </MinimizedBox>
          )}
        </MainContent>
      </ContentWrapper>

      {/* Footer */}
      <Footer>
        <FooterText>Felipe Sousa Nunes • Freelancer • Maio-Julho 2025 • Laravel</FooterText>
      </Footer>
    </Container>
  );
};

// Styled Components - Tema Verde/Teal (Saúde)
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #c0c0c0;
  display: flex;
  flex-direction: column;
  font-family: 'Tahoma', 'Segoe UI', Arial, sans-serif;
  font-size: 12px;
`;

const Header = styled.div`
  background: linear-gradient(180deg, #0d9488 0%, #14b8a6 100%);
  padding: 12px 15px;
  border-bottom: 2px solid #0f766e;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
`;

const HeaderSubtitle = styled.div`
  color: #ccfbf1;
  font-size: 11px;
  margin-top: 3px;
`;

const FreelancerBadge = styled.div`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #1a1a1a;
  padding: 5px 12px;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 280px;
  min-width: 280px;
  background: #ece9d8;
  border-right: 2px solid #aca899;
  overflow-y: auto;
  padding: 10px;
`;

const Section = styled.div`
  background: #ffffff;
  border: 1px solid #808080;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  margin-bottom: 10px;
  box-shadow: 1px 1px 0 #808080;
`;

const SectionTitle = styled.div`
  background: linear-gradient(180deg, #0f766e 0%, #0d9488 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
  padding: 4px 8px;
`;

const SectionContent = styled.div`
  padding: 8px;
  color: #333333;
  font-size: 11px;
  line-height: 1.5;
`;

const StatsBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding: 8px;
  background: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 3px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #0d9488;
`;

const StatLabel = styled.div`
  font-size: 9px;
  color: #666666;
`;

const PeriodBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: #fef3c7;
  border: 1px solid #fcd34d;
  border-radius: 3px;
`;

const PeriodIcon = styled.span`
  font-size: 20px;
`;

const PeriodText = styled.div`
  font-size: 11px;
  color: #92400e;

  span {
    font-size: 10px;
    color: #a16207;
  }
`;

const ContributionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContributionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 6px;
  background: #f9fafb;
  border-left: 3px solid #0d9488;
`;

const Bullet = styled.span`
  color: #0d9488;
  font-size: 10px;
  margin-top: 2px;
`;

const ContributionText = styled.div`
  font-size: 10px;

  small {
    color: #666666;
  }
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
  font-size: 10px;
  font-weight: bold;
  border: 1px outset #ffffff;
`;

const TechDescription = styled.div`
  color: #666666;
  font-size: 10px;
  font-style: italic;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
`;

const FeatureIcon = styled.span`
  color: #0d9488;
  font-size: 6px;
`;

const TestsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TestCategory = styled.div`
  padding: 6px;
  background: #f5f5f5;
  border: 1px inset #e0e0e0;
`;

const TestCategoryTitle = styled.div`
  color: #0f766e;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 2px;
`;

const TestList = styled.div`
  color: #666666;
  font-size: 9px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #808080;
  padding: 10px;
`;

const IframeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #0f766e 0%, #0d9488 100%);
  padding: 6px 10px;
  border: 2px outset #c0c0c0;
  margin-bottom: 2px;
`;

const IframeTitle = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: ${props => props.primary ?
    'linear-gradient(180deg, #f0f0f0 0%, #c0c0c0 100%)' :
    'linear-gradient(180deg, #f0f0f0 0%, #d4d0c8 100%)'};
  border: 2px outset #ffffff;
  padding: 3px 10px;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 11px;
  cursor: pointer;
  color: #000000;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};

  &:hover {
    background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
  }

  &:active {
    border-style: inset;
  }
`;

const IframeContainer = styled.div`
  flex: 1;
  border: 2px inset #808080;
  background: #ffffff;
  min-height: 300px;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const MinimizedBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border: 2px inset #808080;
  cursor: pointer;

  &:hover {
    background: #e8e8e8;
  }
`;

const MinimizedText = styled.span`
  color: #808080;
  font-size: 12px;
`;

const Footer = styled.div`
  background: #ece9d8;
  border-top: 2px solid #ffffff;
  padding: 6px 10px;
  text-align: center;
`;

const FooterText = styled.span`
  color: #666666;
  font-size: 10px;
`;

export default Avalpsico;
