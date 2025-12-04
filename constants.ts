
import { Testimonial, FaqItem, ModuleItem, BonusItem, TargetAudienceItem } from './types';

// CONFIGURAÇÃO DO VÍDEO (VTURB)
// Instrução: No seu código de embed, procure por src="https://..."
// Copie o link completo e cole abaixo.
export const VTURB_SCRIPT_URL = "https://scripts.converteai.net/52f2a57d-7bc2-407c-ac71-cfb9b890f4db/players/68f28abf9200e602e93f7bdd/v4/player.js";

export const HERO_headline = "Descubra a TÉCNICA AMERICANA que ensina as crianças a ler até 5 vezes mais rápido, sem pressão!";
export const HERO_subheadline = "Com apenas 10 minutos por dia. Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma. Mesmo que ainda não reconheça letras ou sons. Funciona também com crianças com TDAH, Autismo ou dificuldades de foco.";
export const CTA_text = "Quero meu pequeno lendo rápido!";
export const PRICE_anchor = 377;
export const PRICE_current = 37;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "André Azevedo",
    content: "meus pequenos estão conseguindo ter uma evolução significativa com poucos minutos por dia. Obrigado",
    likes: 16,
    timeAgo: "1 h",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Ana Oliveira",
    content: "Minha filha começou a formar palavras com apenas duas semanas usando o kit. É incrível como ela evoluiu em tão pouco tempo!",
    likes: 10,
    timeAgo: "1 h",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Marisa Correia",
    content: "Acreditem em mim, essa é a melhor compra que vocês vão fazer este ano. Não percam a chance!",
    likes: 13,
    timeAgo: "2 h",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Breno Souza",
    content: "O método é simples de seguir, mesmo para nós que somos pais sem experiência em ensino. É muito gratificante ver nosso filho lendo suas primeiras palavras!",
    likes: 9,
    timeAgo: "2 h",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 5,
    name: "Camila Silva",
    content: "É incrível como algo tão simples pode fazer tanta diferença! Estou muito satisfeita com a minha compra 👌",
    likes: 19,
    timeAgo: "3 h",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Serve para crianças com Autismo ou TDAH?",
    answer: "Sim! O método funciona também com crianças com TDAH, Autismo ou dificuldades de foco, pois utiliza estímulos visuais e motores que prendem a atenção."
  },
  {
    question: "Como recebo o material?",
    answer: "Após a compra você recebe no e-mail o acesso a plataforma com arquivos em formato PDF para imprimir."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é VITALÍCIO. Você pode baixar e imprimir quantas vezes desejar, para sempre."
  },
  {
    question: "Serve para qual idade?",
    answer: "Ideal para crianças de 2 a 12 anos, respeitando o ritmo natural de cada uma, desde a pré-alfabetização até o reforço escolar."
  }
];

// --- ÁREA DE EDIÇÃO DE IMAGENS ---
export const MODULES: ModuleItem[] = [
  {
    title: "Nível 1: Palavras com 02 Sílabas",
    subtitle: "Iniciando a Jornada",
    description: "O primeiro passo para destravar a leitura com palavras simples e sons fáceis de assimilar.",
    imageUrl: "https://i.ibb.co/1vsrF3C/nivel1-capa.jpg", // Placeholder - substitua se necessário
    imageAlt: "Capa do Caderno Nível 1"
  },
  {
    title: "Nível 2: Palavras com 03 Sílabas",
    subtitle: "Expandindo o Vocabulário",
    description: "Avançando para estruturas um pouco mais complexas, fortalecendo a junção dos sons.",
    imageUrl: "https://i.ibb.co/KjqW4m5/nivel2-capa.jpg", // Placeholder
    imageAlt: "Capa do Caderno Nível 2"
  },
  {
    title: "Nível 3: Palavras com 04 Sílabas",
    subtitle: "Rumo à Fluência",
    description: "Consolidando a leitura com palavras longas e desafiadoras de forma natural.",
    imageUrl: "https://i.ibb.co/7Xz2g9d/nivel3-capa.jpg", // Placeholder
    imageAlt: "Capa do Caderno Nível 3"
  },
  {
    title: "Grafismo: Cursiva e Bastão",
    subtitle: "Coordenação Motora Fina",
    description: "Atividades essenciais para desenvolver a escrita bonita e legível em ambos os formatos.",
    imageUrl: "https://i.ibb.co/60qFz4s/grafismo-capa.jpg", // Placeholder
    imageAlt: "Caderno de Grafismo"
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "Caderno Alfabeto com Imagem",
    originalPrice: 37,
    description: "Associação visual poderosa para memorizar cada letra."
  },
  {
    title: "Caderno Sílabas",
    originalPrice: 47,
    description: "Reforço extra para a construção silábica."
  },
  {
    title: "Caderno Atividades Vogais",
    originalPrice: 57,
    description: "A base de todas as palavras, explorada a fundo."
  },
  {
    title: "Caderno Números e Quantidades",
    originalPrice: 39,
    description: "Introdução lúdica ao raciocínio lógico-matemático."
  }
];

// NOTE: Icons are passed as strings to avoid "cyclic structure" errors in JSON serialization
export const TARGET_AUDIENCE: TargetAudienceItem[] = [
  {
    id: 1,
    title: "Crianças em fase de alfabetização",
    description: "Ideal para crianças que estão dando os primeiros passos na leitura, o método oferece uma abordagem estruturada e intuitiva.",
    icon: "BookOpen"
  },
  {
    id: 2,
    title: "Pais e educadores",
    description: "Que buscam alternativas aos métodos tradicionais, fugindo da memorização forçada e trazendo aprendizado natural.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Crianças com dificuldade de leitura",
    description: "Suporte extra com atividades lúdicas que facilitam o entendimento dos sons e das palavras, fortalecendo a confiança.",
    icon: "BrainCircuit"
  },
  {
    id: 4,
    title: "Escolas que valorizam inovação",
    description: "Abordagem moderna baseada no método americano que gera resultados reais e duradouros.",
    icon: "School"
  }
];

export const NOTIFICATION_NAMES = [
  "Maria S.", "João P.", "Ana C.", "Pedro H.", 
  "Juliana M.", "Lucas R.", "Fernanda T.", "Rafael L.",
  "Patrícia B.", "Carlos E.", "Beatriz S.", "Gabriel M."
];

export const NOTIFICATION_LOCATIONS = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", 
  "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA", 
  "Brasília, DF", "Recife, PE", "Fortaleza, CE", "Manaus, AM"
];