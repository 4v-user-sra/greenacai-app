export interface SlideItem {
  id: number;
  slug: string;
  tag: string;
  title: string;
  subtitle?: string;
}

export const slidesList: SlideItem[] = [
  { id: 1, slug: 'capa', tag: 'Abertura', title: 'Green Açaí • Apresentação Executiva' },
  { id: 2, slug: 'diagnostico', tag: 'Diagnóstico', title: 'Realidade do Tráfego & Rebalizamento de Metas' },
  { id: 3, slug: 'acao-imediata', tag: 'Pivot de Canais', title: 'Pausa do WhatsApp & Foco no Delivery' },
  { id: 4, slug: 'cardapio-digital', tag: 'Cardápio Saipos', title: 'Engenharia de Conversão no Cardápio Digital' },
  { id: 5, slug: 'criativos-contingencia', tag: 'Mídia & Conteúdo', title: 'Criativos com Preço & Contingência para Dias Frios' },
  { id: 6, slug: 'ativacao-lago', tag: 'Branding & Comunidade', title: 'Lago Igapó, Público Infantil e Arenas' },
  { id: 7, slug: 'proximos-passos', tag: 'Plano de Ação', title: 'Planilha de Próximos Passos & Balizamento' }
];

export const cardapioSalesData = {
  period: "01/08 a 26/09",
  totalVolume: 4060,
  totalRevenue: 119703.05,
  rawTopItems: [
    { name: "Açaí Grande", qty: 735, revenue: 27426.00, share: 18.103, category: "acai" },
    { name: "Pastel de queijo", qty: 416, revenue: 6656.00, share: 10.246, category: "pastel" },
    { name: "Casadinho Grande", qty: 372, revenue: 12920.00, share: 9.163, category: "casadinho" },
    { name: "Açaí Médio", qty: 341, revenue: 10403.00, share: 8.399, category: "acai" },
    { name: "Pastel de frango", qty: 231, revenue: 1845.69, share: 5.690, category: "pastel" },
    { name: "Combo Green de Açaí", qty: 178, revenue: 10508.20, share: 4.384, category: "combo" },
    { name: "Casadinho Médio", qty: 174, revenue: 4724.00, share: 4.286, category: "casadinho" },
    { name: "1 Litro de Açaí", qty: 170, revenue: 7633.00, share: 4.187, category: "acai" },
    { name: "Pastel de carne com queijo", qty: 138, revenue: 2484.00, share: 3.399, category: "pastel" },
    { name: "Diversos - 2 Casadinhos Grandes (480ml)", qty: 112, revenue: 4480.00, share: 2.759, category: "combo" },
    { name: "Diversos - Coxinha de frango com requeijão", qty: 77, revenue: 1934.00, share: 1.897, category: "salgado" },
    { name: "Pastel de pizza", qty: 66, revenue: 1188.00, share: 1.626, category: "pastel" },
    { name: "Pastel de carne", qty: 65, revenue: 1040.00, share: 1.601, category: "pastel" },
    { name: "Diversos - Combo Sofá de Casa", qty: 63, revenue: 1883.70, share: 1.552, category: "combo" },
    { name: "Salada de frutas frescas", qty: 52, revenue: 1529.50, share: 1.281, category: "saudavel" },
    { name: "Pastel de frango com requeijão", qty: 46, revenue: 828.00, share: 1.133, category: "pastel" },
    { name: "Açaí Pequeno", qty: 43, revenue: 1077.00, share: 1.059, category: "acai" },
    { name: "Coca-Cola sem Açúcar Sleek 220ml", qty: 43, revenue: 172.00, share: 1.059, category: "bebida" },
    { name: "Milk Shake de Morango", qty: 39, revenue: 916.00, share: 0.961, category: "shake" }
  ],
  consolidatedArchitecture: [
    {
      title: "Açaí Tradicional",
      description: "Unificação de Açaí Grande (735 un), Médio (341 un) e Pequeno (43 un). O cliente escolhe o tamanho (P, M, G) e os adicionais por dentro.",
      totalSales: 1119,
      revenueGenerated: 38906.00,
      benefit: "Reduz 3 produtos repetidos para 1 título limpo e atrativo."
    },
    {
      title: "Pastel Crocante",
      description: "Unificação de Queijo (416 un), Frango (231 un), Carne c/ Queijo (138 un), Pizza (66 un), Carne (65 un) e Frango c/ Requeijão (46 un).",
      totalSales: 962,
      revenueGenerated: 14041.69,
      benefit: "Reduz 6 produtos soltos para 1 cardápio limpo com escolha de recheio por dentro."
    },
    {
      title: "Casadinho (Açaí + Cupuaçu)",
      description: "Unificação de Casadinho Grande (372 un) e Casadinho Médio (174 un) com escolha de tamanho e adicionais por dentro.",
      totalSales: 546,
      revenueGenerated: 17644.00,
      benefit: "Destaque do segundo campeão de receita de forma objetiva."
    },
    {
      title: "Combos Campeões de Ticket Alto",
      description: "Combo Green de Açaí (178 un), 2 Casadinhos Grandes (112 un) e Combo Sofá de Casa (63 un) posicionados no topo do cardápio.",
      totalSales: 353,
      revenueGenerated: 16871.90,
      benefit: "Eleva o Ticket Médio médio do delivery para a faixa de R$ 65+."
    },
    {
      title: "1 Litro de Açaí & Potes",
      description: "Pote de 1 Litro puro para consumo familiar (170 un vendidas / R$ 7.633 faturados).",
      totalSales: 170,
      revenueGenerated: 7633.00,
      benefit: "Mantém apenas o tamanho de maior rentabilidade, cortando potes intermediários sem saída."
    },
    {
      title: "Salgados Complementares & Saudáveis",
      description: "Coxinha de frango c/ requeijão (77 un) e Salada de frutas frescas (52 un) com fotos apetitosas.",
      totalSales: 129,
      revenueGenerated: 3463.50,
      benefit: "Opções de contingência e público fitness sem sobrecarregar o menu."
    }
  ]
};

export const slidesData = {
  slide1: {
    badge: "KICKOFF & BALIZAMENTO ESTRATÉGICO 2026",
    headline: "Ações Estratégicas - Green Açaí",
    subheadline: "Otimização de tráfego pago, reformulação do cardápio digital, plano de contingência para sazonalidade e ativação de comunidade no Lago Igapó.",
    productHighlight: "Açaí de Fabricação Própria (Sem Açúcar Adicionado & Linha Zero)",
    location: "Lago Igapó – Londrina / PR",
    presenters: "Andreas Rocha Slonzo & Emanuele Cena (Time V4 Company)",
    audience: "Taka & Viviane (Proprietários Green Açaí)"
  },
  
  slide2: {
    tag: "DIAGNÓSTICO & TRANSPARÊNCIA",
    title: "Entendendo os Números: Por que Rebalizar a Meta de Mídia?",
    subtitle: "Demonstrativo matemático da capacidade do investimento atual (R$ 1.000/mês em Meta Ads) e o plano progressivo para escalar o faturamento de forma sustentável.",
    initialExpectation: "R$ 10.000 de Faturamento com R$ 1.000 de Investimento",
    realMetrics: {
      grossInvestment: 1000,
      taxPercent: 12,
      netInvestment: 880,
      avgTicket: 50,
      requiredSales: 200,
      targetCPA: 4.40,
      currentAvgCPA: 45.00
    },
    takeaway: "Investir R$ 880 líquidos exigiria um CPA irreal de R$ 4,40 por venda. Precisamos rebalizar expectativas e subir a verba de mídia em degraus conforme o cardápio for otimizado."
  },

  slide3: {
    tag: "DECISÃO ESTRATÉGICA IMEDIATA",
    title: "Pausa do WhatsApp & Concentração 100% no Delivery Direto",
    subtitle: "Pausamos imediatamente a campanha de mensagens via WhatsApp para conter desperdício de verba e canalizar todo o orçamento no site de pedidos.",
    reasons: [
      {
        title: "Atendimento Complexo no Food",
        desc: "Exige equipe dedicada respondendo em segundos. O consumidor de açaí quer clicar, ver o preço, escolher adicionais e concluir sem conversa.",
        icon: "MessageSquareX",
        status: "Pausado"
      },
      {
        title: "Baixa Taxa de Conversão",
        desc: "O bot gerou apenas 1 conversa com zero pedidos concluídos, consumindo saldo sem retorno direto de vendas.",
        icon: "AlertTriangle",
        status: "Custo Ineficiente"
      },
      {
        title: "Foco Total no Cardápio Digital (Cypos/Saipos)",
        desc: "Jornada sem atrito: o cliente entra no link, escolhe o tamanho do copo, seleciona os acompanhamentos e finaliza a compra com pagamento direto.",
        icon: "CheckCircle2",
        status: "Estratégia Principal"
      }
    ]
  },

  slide4: {
    tag: "ENGENHARIA DE CONVERSÃO MOBILE & DADOS SAIPOS",
    title: "Otimização do Cardápio Digital com Base nos Produtos Campeões",
    subtitle: "Análise dos dados reais de saída da Saipos (01/08 a 26/09: 4.060 itens e R$ 119.703,05): enxugamento drástico do menu, unificação de opções por dentro do produto e fotos atrativas.",
    improvements: [
      {
        title: "Manter Apenas os Campeões de Venda",
        detail: "Eliminar 100% dos itens sem saída. O cardápio exibirá exclusivamente os produtos validados pelos dados reais da Saipos."
      },
      {
        title: "Variações e Tamanhos DENTRO do Produto",
        detail: "Títulos limpos sem tamanho no nome (ex: 'Açaí Tradicional', 'Pastel Crocante'). O cliente escolhe tamanhos (P, M, G), adicionais e recheios por dentro do produto."
      },
      {
        title: "Fotos Reais Focadas no Produto Campeão",
        detail: "Imagens que comunicam exatamente o item de maior saída, despertando desejo imediato no clique com apoio do novo social media."
      },
      {
        title: "Promoções Programadas & Validação de Plataforma",
        detail: "Testar promoções programadas no Saipos para combos e, caso haja limitação técnica, avaliar migração estratégica de plataforma."
      }
    ]
  },

  slide5: {
    tag: "MÍDIA & PRODUÇÃO DE CONTEÚDO",
    title: "Criativos com Preço Estampado & Contingência de Dias Frios",
    subtitle: "Estratégia de anúncios focada em clareza de valor e combate direto à sazonalidade de chuvas e queda de temperatura.",
    strategies: [
      {
        title: "Anúncios com Preço & Copo Estampados",
        desc: "Visual direto e claro (Açaí R$ 18, R$ 25). O cliente de delivery precisa saber o valor antes de clicar.",
        type: "Campanha Principal de Vendas"
      },
      {
        title: "Anúncios de Contingência (Dias Frios/Chuvosos)",
        desc: "Ativação de criativos de salgados quentes (Pastel de queijo por R$ 14, coxinhas, fondue) para sustentar o faturamento quando o clima esfria.",
        type: "Plano de Proteção do Caixa"
      },
      {
        title: "Vídeos do Taka + Social Media",
        desc: "Aproveitar o carisma do Taka em vídeos estilo 'review' e bastidores da fábrica de açaí de Londrina.",
        type: "Branding & Retenção"
      }
    ]
  },

  slide6: {
    tag: "BRANDING E COMUNIDADE LOCAL",
    title: "Ativação Presencial no Lago Igapó & Público Infantil",
    subtitle: "Estratégias para explorar a localização privilegiada da loja e transformar a marca no ponto de encontro de saúde e família de Londrina.",
    pillars: [
      {
        title: "Ações no Lago Igapó (Corredores)",
        desc: "Degustação de açaí em mini-copos para a galera do 'Corre de Terça' e eventos esportivos locais."
      },
      {
        title: "Público Infantil (4 a 12 anos)",
        desc: "O maior promotor do Green Açaí. Crianças trazem pais, avós e tios para a loja. Foco em experiência e itens kids."
      },
      {
        title: "Expansão B2B & Arenas de Beach Tennis",
        desc: "Modelo de quiosque modular em contêineres dentro de arenas esportivas e clubes de raquete."
      }
    ]
  },

  slide7: {
    tag: "PLANILHA DE TAREFAS & ALINHAMENTO",
    title: "Próximas Etapas Alinhadas",
    subtitle: "Plano de trabalho prático e colaborativo com o stakeholder para execução das otimizações de cardápio, mídia e rito quinzenal.",
    tasks: [
      {
        id: 1,
        task: "Reestruturação do Cardápio Digital: Separar e enxugar pelos melhores produtos campeões de venda.",
        owner: "V4 Company + Stakeholder (Taka & Viviane)",
        deadline: "Próximos 3 dias",
        status: "Em Andamento",
        note: "Operação conjunta na plataforma Saipos/Cypos para enxugar itens e agrupar variações",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
      },
      {
        id: 2,
        task: "Atualização das Imagens e Descrições de cada produto mantido no cardápio.",
        owner: "Time Green Açaí + V4 Company",
        deadline: "Esta semana",
        status: "Planejado",
        note: "Fotos profissionais em alta resolução com textos atrativos e foco em conversão mobile",
        badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
      },
      {
        id: 3,
        task: "Produção dos Novos Criativos Estáticos e em Vídeo expondo o preço de forma clara.",
        owner: "Emanuele Cena (Manu) / V4 + Social Media",
        deadline: "Próxima semana",
        status: "Planejado",
        note: "Artes com copos/pastéis com valor explícito + reels de bastidores e review gravados com o Taka",
        badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
      },
      {
        id: 4,
        task: "Configuração dos Criativos de Contingência de Frio & Chuva (Pastéis Quentes e Salgados).",
        owner: "Time V4 Company",
        deadline: "Próxima semana",
        status: "Planejado",
        note: "Anúncios pré-configurados para ativação imediata em quedas de temperatura",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
      },
      {
        id: 5,
        task: "Confirmação e manutenção do rito de reuniões de Check-in Quinzenais.",
        owner: "Andreas Rocha (V4) & Taka / Viviane",
        deadline: "Recorrente (Quinzenal)",
        status: "Confirmado",
        note: "Acompanhamento contínuo dos números de pedidos, CPA, faturamento e balizamento da esteira",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      }
    ]
  }
};

export const speakerNotesGuide = [
  {
    slide: 1,
    tip: "Comece valorizando a trajetória de 12 anos da Green Açaí e a força da fabricação própria no Lago Igapó. Reforce: nosso objetivo é alinhar os próximos passos com total clareza e transparência."
  },
  {
    slide: 2,
    tip: "Explique com calma e sem sobressaltos a matemática do investimento: R$ 1k bruto vira R$ 880 líquidos. Para 10k de vendas com ticket de R$ 50, precisaria de 200 pedidos com CPA de R$ 4,40. Mostre o simulador de escala gradual de verba!"
  },
  {
    slide: 3,
    tip: "Apresente a pausa do WhatsApp como uma vitória imediata de economia de verba: 'WhatsApp em food precisa de equipe em tempo real. O cliente de açaí quer entrar no site, ver o preço, escolher adicionais e fechar rápido'."
  },
  {
    slide: 4,
    tip: "Mostre os dados reais da Saipos (4.060 itens / R$ 119,7k): 'Analisamos exatamente o que vende. Vamos manter somente os produtos campeões, agrupando tamanhos e sabores por dentro para o cardápio ficar limpo, rápido e fácil de comprar no celular!'."
  },
  {
    slide: 5,
    tip: "Mostre os criativos com PREÇO e o plano de frio! 'Londrina tem sazonalidade climática. Quando esfriar ou chover, já deixamos rodando os anúncios do pastel de queijo (R$ 14) e produtos quentes'."
  },
  {
    slide: 6,
    tip: "Elogie o Taka na gravação de conteúdos e valorize o público infantil (4-12 anos): 'A criança traz os pais, avós e tios. E no Lago Igapó podemos fazer degustação para a galera que corre na terça'."
  },
  {
    slide: 7,
    tip: "Mostre a planilha de tarefas exata que foi combinada. Destaque o que JÁ FOI REALIZADO (pausa do WhatsApp) e pegue a validação do Taka e da Viviane para o próximo ciclo de 07/10."
  }
];
