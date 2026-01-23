const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Iniciando geração do currículo PDF...\n');

  const templatePath = path.join(__dirname, 'template.html');
  const outputDir = path.join(__dirname, 'gerados');
  const outputPath = path.join(outputDir, 'Felipe_Nunes_2026.pdf');

  // Verificar se o template existe
  if (!fs.existsSync(templatePath)) {
    console.error('Erro: Template HTML não encontrado em:', templatePath);
    process.exit(1);
  }

  // Criar pasta de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('Pasta criada:', outputDir);
  }

  try {
    console.log('Iniciando navegador...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Carregar o template HTML
    console.log('Carregando template HTML...');
    const templateUrl = `file://${templatePath}`;
    await page.goto(templateUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Aguardar carregamento das fontes
    await page.evaluateHandle('document.fonts.ready');

    console.log('Gerando PDF...');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    await browser.close();

    // Verificar se o PDF foi gerado
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      console.log('\n=================================');
      console.log('PDF gerado com sucesso!');
      console.log('=================================');
      console.log('Arquivo:', outputPath);
      console.log('Tamanho:', (stats.size / 1024).toFixed(2), 'KB');
      console.log('=================================\n');
    } else {
      console.error('Erro: PDF não foi gerado');
      process.exit(1);
    }

  } catch (error) {
    console.error('Erro ao gerar PDF:', error.message);
    process.exit(1);
  }
}

// Executar
generatePDF();
