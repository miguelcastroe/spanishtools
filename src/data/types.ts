export interface Tool {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  platform: string;
  category: string;
  rating: number;
}

export const platforms = [
  'Product Hunt',
  'There\'s an AI for That',
  'Futurepedia',
  'AI Tool Hunt',
  'TopAI.tools'
];

export const categories = [
  'Generación de Texto',
  'Procesamiento de Imágenes',
  'Asistentes Virtuales',
  'Análisis de Datos',
  'Educación',
  'Audio y Voz',
  'Desarrollo',
  'Marketing',
  'Diseño',
  'Productividad'
];