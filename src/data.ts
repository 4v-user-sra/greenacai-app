export interface SlideItem {
  id: number;
  slug: string;
  tag: string;
  title: string;
  subtitle?: string;
}

export const slidesList: SlideItem[] = [
  { id: 1, slug: 'capa', tag: 'Abertura', title: 'Ações Estratégicas - Green Açaí' },
  { id: 2, slug: 'performance-trafego', tag: 'Performance Tráfego', title: 'Performance de Mídia & Funil do Cardápio (01/09 a 27/10)' },
  { id: 3, slug: 'cardapio-campeoes', tag: 'Produtos Campeões', title: 'Otimização com Base nos Campeões (Saipos)' },
  { id: 4, slug: 'diretrizes-cardapio', tag: 'Diretrizes Cardápio', title: 'Diretrizes Operacionais de Otimização do Cardápio' },
  { id: 5, slug: 'criativos-novos', tag: 'Criativos com Preço', title: 'Novos Criativos com Preço Estampado' },
  { id: 6, slug: 'proximos-passos', tag: 'Próximas Etapas', title: 'Próximas Etapas Alinhadas' }
];

export const trafficComparisonData = {
  previousPeriod: {
    period: "01/10/2026 a 14/10/2026",
    label: "Período Anterior (Estrutura Antiga)",
    campaignName: "[LF] [V4] [ONTIME] [VENDAS - DELIVERY] [14/07]",
    spent: 344.25,
    impressions: 35894,
    reach: 14313,
    clicks: 225,
    cpc: 1.53,
    ctr: 0.63,
    landingPageViews: 173,
    addToCart: 17,
    checkouts: 8,
    purchases: 2,
    conversionValue: 121.00,
    roas: 0.35,
    status: "Encerrada",
    statusColor: "text-zinc-400 bg-zinc-800/50 border-zinc-700",
    summary: "Tráfego mais caro e menor engajamento criativo. Gerava cliques a R$ 1,53 com CTR de 0,63%. Retornou apenas R$ 121 em vendas para R$ 344 gastos (ROAS 0,35x)."
  },
  newPeriod: {
    period: "15/10/2026 a 27/10/2026",
    label: "Período com Implementações V4 (Campanha Manu)",
    campaignName: "V4 | MANU | VENDAS | DELIVERY",
    spent: 254.26,
    impressions: 28658,
    reach: 11218,
    clicks: 491,
    cpc: 0.52,
    ctr: 1.71,
    landingPageViews: 404,
    addToCart: 6,
    purchases: 0,
    conversionValue: 0.00,
    roas: 0.00,
    status: "Pausada Preventivamente",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    summary: "Forte ganho de atratividade: CTR quase triplicou (+173%) e o CPC despencou 66% (de R$ 1,53 para R$ 0,52). Mais de 404 pessoas levadas ao cardápio com menos verba investida. Pausada para não queimar caixa enquanto o cardápio não for ajustado."
  },
  activeBrandingCampaign: {
    period: "15/10/2026 a 27/10/2026 (Ativa Agora)",
    label: "Campanha Ativa: Foco em Experiência & Presença de Marca",
    campaignName: "V4 | MANU | RECONHECIMENTO",
    budget: "R$ 12,00 / dia",
    spent: 11.13,
    impressions: 10054,
    reach: 9768,
    cpm: 1.14,
    status: "Ativa (R$ 12/dia)",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    objective: "Experiência de Marca no Lago Igapó / Londrina",
    rationale: "Como não estamos focando em retorno de venda imediato — para não gastar o dinheiro do cliente à toa com um cardápio ainda não otimizado —, mantemos essa campanha rodando para gerar lembrança de marca e experiência local com custo mínimo (R$ 1,14 a cada 1.000 pessoas alcançadas)."
  },
  kpiComparison: [
    {
      metric: "Custo por Clique (CPC)",
      previous: "R$ 1,53",
      current: "R$ 0,52",
      change: "-66%",
      improved: true,
      insight: "Redução drástica no custo de aquisição do tráfego."
    },
    {
      metric: "Taxa de Cliques (CTR)",
      previous: "0,63%",
      current: "1,71%",
      change: "+173%",
      improved: true,
      insight: "Criativo muito mais atrativo para o consumidor de Londrina."
    },
    {
      metric: "Volume de Cliques no Link",
      previous: "225 cliques",
      current: "491 cliques",
      change: "+118%",
      improved: true,
      insight: "Mais do que o dobro de cliques com menos verba gasta."
    },
    {
      metric: "Acessos ao Cardápio Digital",
      previous: "173 visitas",
      current: "404 visitas",
      change: "+133%",
      improved: true,
      insight: "Mais de 400 clientes levados diretamente para a compra."
    }
  ],
  financialConclusion: {
    totalSpentPeriods: 609.64,
    totalRevenueTracked: 121.00,
    overallDeficit: -488.64,
    takeaway: "Transparência Total: Ambos os períodos tiveram retorno financeiro negativo (no primeiro período foram R$ 344 gastos para R$ 121 retornados; no segundo, as 404 visitas dispersaram no cardápio desestruturado). No entanto, as melhorias operacionais nos indicadores de mídia (CPC de R$ 0,52 e CTR de 1,71%) comprovam que a atração foi corrigida com sucesso. O único gargalo pendente para destravar o retorno financeiro é a otimização do cardápio digital."
  }
};

export const cardapioSalesData = {
  period: "01/09/2026 a 31/10/2026",
  totalVolume: 14829,
  totalRevenue: 324604.55,
  totalCategories: 63,
  totalRegisteredProducts: 314,
  channels: "Entrega, Retirada, Salão e Ficha",
  rawTopItems: [
    { name: "AMENDOIM DOCE - EXTERNA", qty: 1301, revenue: 4553.50, share: 8.773, category: "outros" },
    { name: "AÇAÍ M (330ml)", qty: 1186, revenue: 34161.00, share: 7.998, category: "acai" },
    { name: "Pastel Especial", qty: 899, revenue: 14390.00, share: 6.062, category: "pastel" },
    { name: "Pastel Simples", qty: 716, revenue: 10024.00, share: 4.828, category: "pastel" },
    { name: "ÁGUA 500ML", qty: 615, revenue: 3075.00, share: 4.147, category: "bebida" },
    { name: "AÇAÍ G (550ml)", qty: 594, revenue: 21363.00, share: 4.006, category: "acai" },
    { name: "AÇAÍ P (240ml)", qty: 573, revenue: 13063.00, share: 3.864, category: "acai" },
    { name: "Açaí Grande", qty: 568, revenue: 21149.00, share: 3.830, category: "acai" },
    { name: "Água de Coco", qty: 536, revenue: 6968.00, share: 3.615, category: "bebida" },
    { name: "CASADINHO M (330ml)", qty: 484, revenue: 12244.00, share: 3.264, category: "casadinho" },
    { name: "Diversos - Açaí", qty: 356, revenue: 10292.00, share: 2.401, category: "acai" },
    { name: "Açaí Médio", qty: 339, revenue: 10271.00, share: 2.286, category: "acai" },
    { name: "CASADINHO G (550ml)", qty: 320, revenue: 10645.00, share: 2.158, category: "casadinho" },
    { name: "Casadinho Grande", qty: 283, revenue: 9953.00, share: 1.908, category: "casadinho" },
    { name: "Pastel de frango", qty: 278, revenue: 2230.22, share: 1.875, category: "pastel" },
    { name: "POTE 1L AÇAÍ - EXTERNA", qty: 238, revenue: 5236.00, share: 1.605, category: "acai" },
    { name: "Pastel de carne com queijo", qty: 233, revenue: 4197.00, share: 1.571, category: "pastel" },
    { name: "Pastel de queijo", qty: 230, revenue: 3680.00, share: 1.551, category: "pastel" },
    { name: "CASADINHO P (240ml)", qty: 210, revenue: 4300.00, share: 1.416, category: "casadinho" },
    { name: "ÁGUA C/ GÁS 500ML", qty: 181, revenue: 905.00, share: 1.221, category: "bebida" },
    { name: "Diversos - Casadinho", qty: 152, revenue: 3933.00, share: 1.025, category: "casadinho" },
    { name: "Combo Green de Açaí", qty: 149, revenue: 8901.10, share: 1.005, category: "combo" },
    { name: "1 Litro de Açaí", qty: 138, revenue: 6196.20, share: 0.931, category: "acai" },
    { name: "Casadinho Médio", qty: 124, revenue: 3546.00, share: 0.836, category: "casadinho" },
    { name: "Salada de Frutas Médio", qty: 85, revenue: 1932.00, share: 0.573, category: "saudavel" },
    { name: "Milk Chocolove 300ml", qty: 85, revenue: 1700.00, share: 0.573, category: "shake" }
  ],
  consolidatedArchitecture: [
    {
      title: "Açaí Tradicional (Copos P, M, G)",
      description: "Unificação de AÇAÍ M (1.186 un), Açaí Grande (568 un), AÇAÍ G (594 un), AÇAÍ P (573 un), Açaí Médio (339 un) e Diversos Açaí (356 un).",
      totalSales: 3616,
      revenueGenerated: 110299.00,
      benefit: "Reduz 6 produtos repetidos que concorrem entre si no menu para 1 único produto limpo com escolha interna de tamanho (P 240ml, M 330ml, G 550ml)."
    },
    {
      title: "Casadinho (Açaí + Cupuaçu)",
      description: "Unificação de CASADINHO M (484 un), CASADINHO G (320 un), Casadinho Grande (283 un), CASADINHO P (210 un), Diversos (152 un) e Médio (124 un).",
      totalSales: 1573,
      revenueGenerated: 44621.00,
      benefit: "Segundo maior faturamento da casa (R$ 44,6k), hoje fragmentado em 6 cadastros soltos no cardápio."
    },
    {
      title: "Pastéis (Especiais, Simples & Crocantes)",
      description: "Unificação de Pastel Especial (899 un), Pastel Simples (716 un), Frango (278 un), Carne c/ Queijo (233 un) e Queijo (230 un).",
      totalSales: 2356,
      revenueGenerated: 34521.22,
      benefit: "Mais de 2.300 pastéis vendidos. Unifica em categorias claras com seleção de recheios por dentro."
    },
    {
      title: "Pote 1 Litro (Família / Fábrica)",
      description: "Unificação de Pote 1L Externa (238 un) e 1 Litro de Açaí (138 un) puro para consumo doméstico.",
      totalSales: 376,
      revenueGenerated: 11432.20,
      benefit: "Faturamento expressivo de R$ 11,4k garantido por uma embalagem de alta saída e fácil logística."
    },
    {
      title: "Hidratação & Bebidas (Água & Coco)",
      description: "Água 500ml (615 un), Água de Coco (536 un) e Água com Gás 500ml (181 un).",
      totalSales: 1332,
      revenueGenerated: 10948.00,
      benefit: "Venda complementar de conveniência de altíssima margem líquida para delivery e salão."
    },
    {
      title: "Combos de Alto Ticket (Combo Green)",
      description: "Combo Green de Açaí (149 un / R$ 8.901,10). Ticket médio unitário de R$ 59,73.",
      totalSales: 149,
      revenueGenerated: 8901.10,
      benefit: "Posicionado no topo para ancoragem de preço e elevação do ticket médio no delivery."
    }
  ]
};

export const cardapioOptimizationGuidelines = [
  {
    number: "01",
    tag: "LIMPEZA ESTRATÉGICA",
    title: "Enxugamento de Itens sem Saída",
    subtitle: "Eliminar a paralisia de escolha na tela do celular",
    problem: "Cardápio com mais de 24 itens espalhados, sucos e potes com quase zero vendas, forçando o cliente a rolar a tela infinitamente e desistir da compra.",
    solution: "Remover produtos de baixa rotação e focar 100% nos campeões de venda validados pelos R$ 324,6k da Saipos.",
    action: "Kaiky desativar no sistema Saipos/Cypos os itens redundantes."
  },
  {
    number: "02",
    tag: "ARQUITETURA DE PRODUTO",
    title: "Agrupamento de Variações DENTRO do Produto",
    subtitle: "Títulos limpos sem repetição de tamanho no menu",
    problem: "Açaí Grande, Médio e Pequeno cadastrados como 3 produtos isolados, além de cada sabor de pastel solto.",
    solution: "Criar um único produto 'Açaí Tradicional' e 'Açaí Zero'. Ao clicar, o cliente seleciona o tamanho (P, M, G), acompanhamentos e adicionais por dentro da página.",
    action: "Configurar variações e complementos internos no cardápio digital."
  },
  {
    number: "03",
    tag: "HIERARQUIA VISUAL",
    title: "Posicionamento Estratégico de Seções",
    subtitle: "Produtos campeões no topo absoluto da página",
    problem: "Itens com menor margem ou itens aleatórios aparecendo antes dos campeões de faturamento.",
    solution: "Ordem visual otimizada: 1º Açaí Tradicional & Combos de Alto Ticket, 2º Casadinho (Açaí + Cupuaçu), 3º Pote Família 1 Litro, 4º Pastéis Crocantes e Salgados.",
    action: "Reordenar as categorias para que o cliente veja imediatamente os líderes de venda."
  },
  {
    number: "04",
    tag: "FOTOGRAFIA & APETITE APPEAL",
    title: "Novas Fotos Reais de Alta Resolução",
    subtitle: "Fotos reais sem aspecto artificial ou de IA",
    problem: "Fotos antigas de potes com aspecto que parece inteligência artificial (apontado pela Viviane) ou imagens genéricas sem desejo.",
    solution: "Fotos reais captadas pelo Felipe Campezoni, com produto em primeiro plano, textura cremosa visível e fundo levemente desfocado para dar destaque.",
    action: "Felipe subir as fotos captadas no Drive e Kaiky atualizar no cardápio."
  },
  {
    number: "05",
    tag: "COPYWRITING DE CARDÁPIO",
    title: "Descrições Claras Entre Título e Preço",
    subtitle: "Informar qualidade e diferenciais da fabricação própria",
    problem: "Produtos sem descrição ou com textos incompletos sobre acompanhamentos e pureza da polpa.",
    solution: "Descrições objetivas destacando: 'Fabricação própria', 'Sem adição de açúcar', 'Xarope de guaraná selecionado' e ingredientes inclusos.",
    action: "Inserir os textos de descrição padronizados em cada produto mantido."
  }
];

export const slidesData = {
  slide1: {
    badge: "ALINHAMENTO ESTRATÉGICO • OUTUBRO 2026",
    headline: "Ações Estratégicas - Green Açaí",
    subheadline: "Performance real de tráfego pago, funil do cardápio digital, diretrizes de otimização operacional e plano de ação alinhado.",
    productHighlight: "Açaí de Fabricação Própria (Sem Açúcar Adicionado & Linha Zero)",
    location: "Lago Igapó – Londrina / PR",
    presenters: "Andreas Rocha Slonzo & Emanuele Cena (Time V4 Company)",
    audience: "Taka & Viviane (Proprietários Green Açaí)"
  },
  
  slide4: {
    tag: "PRODUTOS CAMPEÕES & DADOS SAIPOS",
    title: "Otimização com Base nos Produtos Campeões de Venda",
    subtitle: "Análise dos dados reais de saída da Saipos (14.829 itens e R$ 324.604,55 em vendas de 01/09 a 31/10): foco exclusivo nos campeões para enxugar as 63 categorias e 314 produtos cadastrados.",
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
        detail: "Imagens reais que comunicam exatamente o item de maior saída, despertando desejo imediato no clique com apoio do novo social media."
      },
      {
        title: "Destaque de Combos de Alto Ticket",
        detail: "Posicionar combos no topo para elevar o ticket médio do delivery para a faixa de R$ 65+."
      }
    ]
  },
  
  slide7: {
    tag: "PLANILHA DE TAREFAS & ALINHAMENTO",
    title: "Próximas Etapas Alinhadas",
    subtitle: "Plano de trabalho prático e colaborativo integrando Kaiky, Felipe Campezoni, Manu, Andreas, Taka e Viviane com prazos definidos.",
    tasks: [
      {
        id: 1,
        task: "Ajuste Operacional do Cardápio (Saipos/Cypos): Enxugar itens sem saída, agrupar tamanhos (P, M, G) por dentro e ordenar seções com campeões no topo.",
        owner: "Kaiky (Green Açaí) + Andreas (V4)",
        deadline: "28/10 a 29/10",
        status: "Em Andamento"
      },
      {
        id: 2,
        task: "Envio das Fotos Finais Reais no Drive: Subir no Drive compartilhado as novas fotos reais de copos, montagem e pastéis (sem aspecto IA).",
        owner: "Felipe Campezoni (Social Media)",
        deadline: "Até 28/10",
        status: "Planejado"
      },
      {
        id: 3,
        task: "Upload das Imagens & Novas Descrições no Cardápio: Inserir as fotos aprovadas e as descrições claras entre título e preço em cada produto mantido.",
        owner: "Kaiky (Green Açaí) + Time V4",
        deadline: "Até 30/10",
        status: "Planejado"
      },
      {
        id: 4,
        task: "Reativação da Campanha de Conversão com Criativo de Preço Estampado: Retomar a campanha de vendas com o anúncio vertical de preço visível (R$ 22,90).",
        owner: "Emanuele Cena (Manu / V4)",
        deadline: "02/11 (após cardápio pronto)",
        status: "Planejado"
      },
      {
        id: 5,
        task: "Reuniões Periódicas de Check-in Quinzenais: Alinhamento contínuo de métricas, CPA, faturamento e novos testes de mídia.",
        owner: "Andreas Rocha (V4) & Viviane / Taka",
        deadline: "Recorrente (Próximo: 10/11)",
        status: "Confirmado"
      }
    ]
  }
};

export const speakerNotesGuide = [
  {
    slide: 1,
    tip: "Abertura objetiva: 'Hoje vamos passar a limpo a performance real das campanhas de 01/09 a 27/10, mostrar onde está o gargalo de conversão e alinhar as etapas práticas de cardápio e criativos'."
  },
  {
    slide: 2,
    tip: "Apresente os números reais da Meta: 'Alcançamos 87 mil pessoas e geramos 840 visitas ao cardápio com um CPC de apenas R$ 0,52. O tráfego funciona! O gargalo está na conversão dentro do cardápio, por isso pausamos as vendas para não queimar verba enquanto ajustamos o menu'."
  },
  {
    slide: 3,
    tip: "Mostre os R$ 119,7k da Saipos: 'O cardápio não precisa inventar moda. Açaí Tradicional, Casadinho, Pote 1L e Pastel representam 90%+ das vendas. Vamos manter só eles e agrupar variações'."
  },
  {
    slide: 4,
    tip: "Explique os 5 pontos práticos alinhados com o Kaiky e Felipe no WhatsApp: enxugamento, agrupamento por dentro, seções campeãs no topo, fotos reais sem IA e descrições claras."
  },
  {
    slide: 5,
    tip: "Mostre o novo anúncio vertical com preço estampado: 'O cliente já clica sabendo o preço (R$ 22,90), o que qualifica o clique e reduz o custo por pedido'."
  },
  {
    slide: 6,
    tip: "Feche com a planilha de responsáveis: Kaiky ajustando a plataforma, Felipe subindo as fotos reais, Manu reativando o tráfego com o novo criativo e rito quinzenal confirmado!"
  }
];
