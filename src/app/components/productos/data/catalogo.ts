// productos/data/catalogo.ts
import { Categoria } from '../models/catalogo.model';

export const CATALOGO: Categoria[] = [
  {
    slug: 'ropa',
    nombre: 'Ropa',
    descripcion: 'Uniformes y prendas confeccionadas para todos los sectores.',
    color: '#b81430',
    subcategorias: [
      {
        slug: 'uniformes-escolares',
        nombre: 'Uniformes Escolares',
        // PATRÓN: copia esto en las demás subcategorías
        productos: [
          {
            nombre: 'Camisa escolar manga larga',
            imagen: 'assets/productos/ropa/uniformes-escolares/01.jpg',
            descripcion: 'Tela resistente, bordado de logo institucional.',
            etiqueta: 'Más vendido',
          },
          {
            nombre: 'Pantalón escolar',
            imagen: 'assets/productos/ropa/uniformes-escolares/02.jpg',
            descripcion: 'Corte recto, disponible en varios colores.',
          },
          {
            nombre: 'Falda tableada',
            imagen: 'assets/productos/ropa/uniformes-escolares/03.jpg',
            descripcion: 'Pliegues fijos, dobladillo reforzado.',
          },
          {
            nombre: 'Chaleco institucional',
            imagen: 'assets/productos/ropa/uniformes-escolares/04.jpg',
            etiqueta: 'Nuevo',
          },
        ],
      },
      { slug: 'uniformes-industriales', nombre: 'Uniformes Industriales y Ropa de Trabajo', productos: [] },
      { slug: 'hospitalaria', nombre: 'Hospitalaria', productos: [] },
      { slug: 'hoteleria', nombre: 'Hotelería', productos: [] },
      { slug: 'blancos', nombre: 'Blancos', productos: [] },
      { slug: 'empresarial-institucional', nombre: 'Uniforme Empresarial e Institucional', productos: [] },
      { slug: 'vestuario-folklorico', nombre: 'Vestuario Folklórico', productos: [] },
      { slug: 'disfraces', nombre: 'Disfraces', productos: [] },
      { slug: 'bandas-guerra-escolta', nombre: 'Bandas de Guerra y Escolta', productos: [] },
      { slug: 'togas-graduacion', nombre: 'Togas y Accesorios de Graduación', productos: [] },
      {
        slug: 'chamarras-chalecos',
        nombre: 'Chamarras y Chalecos',
        hijos: [
          { slug: 'invernal', nombre: 'Invernal' },
          { slug: 'entretiempo', nombre: 'Entretiempo' },
          { slug: 'campana', nombre: 'Campaña' },
        ],
        productos: [],
      },
    ],
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    descripcion: 'Complementos personalizados para cada institución o empresa.',
    color: '#1d4ed8',
    subcategorias: [
      { slug: 'pantuflas', nombre: 'Pantuflas', productos: [] },
      { slug: 'cojines', nombre: 'Cojines', productos: [] },
      { slug: 'cintos', nombre: 'Cintos', productos: [] },
      { slug: 'birretes', nombre: 'Birretes', productos: [] },
      { slug: 'cubre-trajes', nombre: 'Cubre-trajes', productos: [] },
      { slug: 'bandas-reyna', nombre: 'Bandas de Reina', productos: [] },
    ],
  },
  {
    slug: 'bordado',
    nombre: 'Bordado',
    descripcion: 'Digitalización, punchado y bordado directo en prenda y plano.',
    color: '#047857',
    subcategorias: [
      {
        slug: 'bordado-directo',
        nombre: 'Bordado Directo en Gorra y Prenda Armada',
        // ejemplo: aquí van fotos de trabajos realizados
        productos: [
          {
            nombre: 'Logo bordado en gorra',
            imagen: 'assets/productos/bordado/bordado-directo/01.jpg',
            descripcion: 'Bordado de alta densidad sobre gorra estructurada.',
          },
          {
            nombre: 'Bordado en polo institucional',
            imagen: 'assets/productos/bordado/bordado-directo/02.jpg',
          },
        ],
      },
      { slug: 'digitalizacion-punchado', nombre: 'Digitalización y Punchado de Logotipos y Letras', productos: [] },
      { slug: 'bordado-plano', nombre: 'Bordado en Plano hasta 2x2 mts', productos: [] },
      { slug: 'maquila-bordado', nombre: 'Capacidad de Maquila en Bordado Plano y Prenda Armada', productos: [] },
    ],
  },
  {
    slug: 'serigrafia',
    nombre: 'Serigrafía',
    descripcion: 'Impresión en gorras, prendas, banderines y promocionales.',
    color: '#b45309',
    subcategorias: [
      { slug: 'gorras', nombre: 'Gorras', productos: [] },
      { slug: 'prenda-armada', nombre: 'Prenda Armada', productos: [] },
      { slug: 'banderines', nombre: 'Banderines', productos: [] },
      { slug: 'promocionales', nombre: 'Promocionales', productos: [] },
      { slug: 'personalizadores', nombre: 'Personalizadores', productos: [] },
    ],
  },
  {
    slug: 'sublimado',
    nombre: 'Sublimado',
    descripcion: 'Personalización en gorras, termos, prendas y gran formato.',
    color: '#7c3aed',
    subcategorias: [
      { slug: 'gorras', nombre: 'Gorras', productos: [] },
      { slug: 'prenda-armada', nombre: 'Prenda Armada', productos: [] },
      { slug: 'termos-tazas-vasos', nombre: 'Termos, Tazas y Vasos', productos: [] },
      { slug: 'maquila-gran-formato', nombre: 'Capacidad de Maquila en Gran Formato', productos: [] },
    ],
  },
  {
    slug: 'vinil',
    nombre: 'Corte de Vinil',
    descripcion: 'Cortes especiales y acabados complementarios.',
    color: '#0f766e',
    subcategorias: [],
  },
];