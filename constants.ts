import { Play, VideoItem, GalleryImage } from './types';

export const THEATRE_CREDITS: Play[] = [
  {
    id: 'novica-rebelde',
    title: 'A Noviça Rebelde',
    year: '2024',
    role: 'Marta Von Trapp',
    director: 'Charles Möeller e Claudio Botelho',
    videoPlaceholderId: 101,
    videoSrc: '/Videos/no_palco/vid-novica.MP4',
    thumbnailSrc: '/thumbnail/peca/thumb-novica.JPG',
  },
  {
    id: 'baba-quase-perfeita',
    title: 'Uma Babá Quase Perfeita',
    year: '2024–2025',
    role: 'Natalie Hillard',
    details: 'Um jeitinho encantado de contar histórias e fazer todo mundo sorrir.',
    director: 'Tadeu Aguiar',
    videoPlaceholderId: 102,
    videoSrc: `${import.meta.env.BASE_URL}Videos/no_palco/vid-baba.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/peca/thumb-baba.PNG`,
  },
  {
    id: 'arca-dos-bichos',
    title: 'A Arca dos Bichos',
    year: '2025',
    role: 'Vaquinha e Cachorrinha',
    details: 'Personagens fofos, momentos mágicos e muita vontade de brincar no palco.',
    director: 'Renata Maia',
    videoPlaceholderId: 103,
    videoSrc: `${import.meta.env.BASE_URL}Videos/no_palco/vid-arcabichos.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/peca/thumb-arcabichos.JPG`,
  },
  {
    id: 'vira-lata',
    title: 'Vira-Lata',
    year: '2025',
    role: 'Safira',
    details: 'Cenas cheias de imaginação, alegria e diversão para todos os pequenos.',
    director: 'Renata Maia',
    videoPlaceholderId: 104,
    videoSrc: `${import.meta.env.BASE_URL}Videos/no_palco/vid-viralata.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/peca/thumb-viralata.JPG`,
  },
];

export const DANCE_VIDEOS: VideoItem[] = [
  {
    id: 'ballet-01',
    title: 'Ballet Clássico',
    category: 'Dance',
    description: 'Ballet com leveza, força e muita sensibilidade.',
    videoPlaceholderId: 201,
    videoSrc: `${import.meta.env.BASE_URL}Videos/ballet.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/thumb-ballet.PNG`,
  },
  {
    id: 'tap-01',
    title: 'Sapateado',
    category: 'Dance',
    description: 'Sapateado com técnica, presença e muita alegria.',
    videoPlaceholderId: 202,
    videoSrc: `${import.meta.env.BASE_URL}Videos/sapateado.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/thumb-sapateado.PNG`,
  },
];

export const MONOLOGUES: VideoItem[] = [
  {
    id: 'mono-mae',
    title: 'Monólogo Mãe',
    category: 'Novembro/2025',
    videoPlaceholderId: 301,
    videoSrc: `${import.meta.env.BASE_URL}Videos/monologos/monologo-mae.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/monologo/thumb-monologo-mae.PNG`,
  },
  {
    id: 'mono-nutri',
    title: 'Monólogo Nutricionista',
    category: 'Outubro/2025',
    videoPlaceholderId: 302,
    videoSrc: `${import.meta.env.BASE_URL}Videos/monologos/monologo-nutri.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/monologo/thumb-monologo-nutri.PNG`,
    objectPosition: 'left 20px center',
  },
  {
    id: 'mono-gaveta',
    title: 'Monólogo Gaveta',
    category: 'Outubro/2025',
    videoPlaceholderId: 303,
    videoSrc: `${import.meta.env.BASE_URL}Videos/monologos/monologo-gaveta.MP4`,
    thumbnailSrc: `${import.meta.env.BASE_URL}thumbnail/monologo/thumb-monologo-gaveta.PNG`,
    objectPosition: 'left 20px center',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', src: `${import.meta.env.BASE_URL}Book/book-img1.JPG`, alt: 'Malu Miranda Book', category: '\u200B' },
  { id: 'g2', src: `${import.meta.env.BASE_URL}Book/book-img2.JPG`, alt: 'Malu Miranda Book', category: '\u200B' },
  { id: 'g4', src: `${import.meta.env.BASE_URL}Book/book-img4.JPEG`, alt: 'Malu Miranda Book', category: '\u200B' },
  { id: 'g5', src: `${import.meta.env.BASE_URL}Book/book-img5.JPG`, alt: 'Malu Miranda Book', category: '\u200B' },
  { id: 'g6', src: `${import.meta.env.BASE_URL}Book/book-img6.JPEG`, alt: 'Malu Miranda Book', category: '\u200B' },
  { id: 'g7', src: `${import.meta.env.BASE_URL}Book/book-img7.JPG`, alt: 'Malu Miranda Book', category: '\u200B' },
];