// productos/data/catalogo.ts
import { Categoria } from '../models/catalogo.model';

export const CATALOGO: Categoria[] = [
  {
    slug: 'ropa',
    nombre: 'Ropa',
    descripcion: 'Uniformes y prendas confeccionadas para todos los sectores.',
    color: '#b81430',
    sinonimos: ['prendas', 'vestimenta', 'uniformes', 'confeccion'],
    subcategorias: [
      {
        slug: 'uniformes-escolares',
        nombre: 'Uniformes Escolares',
        sinonimos: ['escolar', 'escuela', 'colegio', 'estudiante', 'primaria', 'secundaria'],
        productos: [
          {
            nombre: 'Camisa escolar manga larga',
            imagen: '/assets/uniformes-escolares/UniformeNiño.png',
            descripcion: 'Tela resistente, bordado de logo institucional.',
            etiqueta: 'Más vendido',
            sinonimos: ['camisa', 'blusa', 'playera de vestir', 'manga larga'],
          },
          {
            nombre: 'Pantalón escolar',
            imagen: 'assets/uniformes-escolares/UniformeNiña.png',
            descripcion: 'Corte recto, disponible en varios colores.',
            sinonimos: ['pantalon', 'pants', 'pantalones'],
          },
          {
            nombre: 'Falda tableada',
            imagen: 'assets/productos/ropa/uniformes-escolares/03.jpg',
            descripcion: 'Pliegues fijos, dobladillo reforzado.',
            sinonimos: ['falda', 'faldas', 'tablones', 'tableada'],
          },
          {
            nombre: 'Chaleco institucional',
            imagen: 'assets/productos/ropa/uniformes-escolares/04.jpg',
            etiqueta: 'Nuevo',
            sinonimos: ['chaleco', 'chalecos', 'chalequito'],
          },
        ],
      },
      {
        slug: 'uniformes-industriales',
        nombre: 'Uniformes Industriales y Ropa de Trabajo',
        sinonimos: ['industrial', 'trabajo', 'overol', 'obrero', 'taller', 'operario', 'faena'],
        productos: [],
      },
      {
        slug: 'hospitalaria',
        nombre: 'Hospitalaria',
        sinonimos: ['hospital', 'medico', 'enfermeria', 'filipina', 'quirurgico', 'scrub', 'pijama medica'],
        productos: [],
      },
      {
        slug: 'hoteleria',
        nombre: 'Hotelería',
        sinonimos: ['hotel', 'restaurante', 'mesero', 'recepcion', 'cocina', 'gastronomia'],
        productos: [],
      },
      {
        slug: 'blancos',
        nombre: 'Blancos',
        sinonimos: ['sabanas', 'toallas', 'manteleria', 'ropa de cama', 'edredon'],
        productos: [],
      },
      {
        slug: 'empresarial-institucional',
        nombre: 'Uniforme Empresarial e Institucional',
        sinonimos: ['empresa', 'oficina', 'corporativo', 'institucional', 'ejecutivo'],
        productos: [],
      },
      {
        slug: 'vestuario-folklorico',
        nombre: 'Vestuario Folklórico',
        sinonimos: ['folklor', 'folclor', 'regional', 'baile', 'danza', 'tipico', 'ballet'],
        productos: [],
      },
      {
        slug: 'disfraces',
        nombre: 'Disfraces',
        sinonimos: ['disfraz', 'cosplay', 'botarga', 'caracterizacion'],
        productos: [],
      },
      {
        slug: 'bandas-guerra-escolta',
        nombre: 'Bandas de Guerra y Escolta',
        sinonimos: ['banda de guerra', 'escolta', 'marcha', 'ceremonial'],
        productos: [
          {
            nombre: 'Uniforme Banda de Guerra',
            imagen: '/assets/banda-guerra/BandaGuerra1.png',
            descripcion: 'Casaca de gala en tela resistente con bordado del logo institucional.',
            sinonimos: [
              'banda', 'banda de guerra', 'casaca', 'casaca de gala',
              'uniforme de gala', 'traje de banda', 'traje de guerra',
            ],
          },
          {
            nombre: 'Uniforme Banda de Guerra',
            imagen: '/assets/banda-guerra/BandaGuerra2.png',
            descripcion: 'Corte recto de líneas clásicas, disponible en varios colores.',
            sinonimos: [
              'banda', 'banda de guerra', 'casaca', 'casaca de gala',
              'uniforme de gala', 'traje de banda', 'traje de guerra',
            ],
          },
          {
            nombre: 'Uniforme Escolta Niño',
            imagen: '/assets/banda-guerra/Escolta1.png',
            descripcion: 'Uniforme formal de escolta con detalles dorados y cordón de gala.',
            sinonimos: [
              'escolta', 'escolta niño', 'escolta hombre', 'escolta varonil',
              'uniforme de escolta', 'traje de escolta', 'cordon de gala',
              'guardia de honor', 'abanderado', 'gala', 'azul marino', 'marino',
            ],
          },
          {
            nombre: 'Uniforme Escolta Niña',
            imagen: '/assets/banda-guerra/Escolta2.png',
            descripcion: 'Uniforme de escolta de corte entallado con charreteras y acabados dorados.',
            sinonimos: [
              'escolta', 'escolta niña', 'escolta mujer', 'escolta femenil',
              'uniforme de escolta', 'traje de escolta', 'charreteras',
              'guardia de honor', 'abanderada', 'gala', 'rojo', 'entallado',
            ],
          },
        ],
      },
      {
        slug: 'togas-graduacion',
        nombre: 'Togas y Accesorios de Graduación',
        sinonimos: ['toga', 'togas', 'graduacion', 'birrete', 'generacion', 'egresado'],
        productos: [],
      },
      {
        slug: 'chamarras-chalecos',
        nombre: 'Chamarras y Chalecos',
        sinonimos: ['chamarra', 'chaleco', 'casaca', 'abrigo', 'chaqueta', 'chamarras', 'chalecos'],
        hijos: [
          { slug: 'invernal', nombre: 'Invernal', sinonimos: ['invierno', 'frio', 'termica'] },
          { slug: 'entretiempo', nombre: 'Entretiempo', sinonimos: ['media estacion', 'ligera'] },
          { slug: 'campana', nombre: 'Campaña', sinonimos: ['campana', 'promocional', 'evento'] },
        ],
        productos: [
          {
            nombre: 'Uniforme Banda de Guerra',
            imagen: '/assets/chamarras-chalecos/Chaleco.png',
            descripcion: 'Casaca de gala en tela resistente con bordado del logo institucional.',
            sinonimos: [
              'banda', 'banda de guerra', 'casaca', 'casaca de gala',
              'uniforme de gala', 'traje de banda', 'traje de guerra',
            ],
          },
          {
            nombre: 'Uniforme Banda de Guerra',
            imagen: '/assets/chamarras-chalecos/ChalecoAzul.png',
            descripcion: 'Corte recto de líneas clásicas, disponible en varios colores.',
            sinonimos: [
              'banda', 'banda de guerra', 'casaca', 'casaca de gala',
              'uniforme de gala', 'traje de banda', 'traje de guerra',
            ],
          },
          {
            nombre: 'Uniforme Escolta Niño',
            imagen: '/assets/chamarras-chalecos/Chaleco.png',
            descripcion: 'Uniforme formal de escolta con detalles dorados y cordón de gala.',
            sinonimos: [
              'escolta', 'escolta niño', 'escolta hombre', 'escolta varonil',
              'uniforme de escolta', 'traje de escolta', 'cordon de gala',
              'guardia de honor', 'abanderado', 'gala', 'azul marino', 'marino',
            ],
          },
          {
            nombre: 'Uniforme Escolta Niña',
            imagen: '/assets/chamarras-chalecos/Chaleco.png',
            descripcion: 'Uniforme de escolta de corte entallado con charreteras y acabados dorados.',
            sinonimos: [
              'escolta', 'escolta niña', 'escolta mujer', 'escolta femenil',
              'uniforme de escolta', 'traje de escolta', 'charreteras',
              'guardia de honor', 'abanderada', 'gala', 'rojo', 'entallado',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    descripcion: 'Complementos personalizados para cada institución o empresa.',
    color: '#1d4ed8',
    sinonimos: ['accesorio', 'complemento', 'complementos'],
    subcategorias: [
      { slug: 'pantuflas', nombre: 'Pantuflas', sinonimos: ['pantufla', 'sandalia de casa', 'calzado casa'], productos: [] },
      { slug: 'cojines', nombre: 'Cojines', sinonimos: ['cojin', 'almohada', 'almohadon'], productos: [] },
      { slug: 'cintos', nombre: 'Cintos', sinonimos: ['cinto', 'cinturon', 'faja'], productos: [] },
      { slug: 'birretes', nombre: 'Birretes', sinonimos: ['birrete', 'gorro graduacion', 'gorro toga'], productos: [] },
      { slug: 'cubre-trajes', nombre: 'Cubre-trajes', sinonimos: ['cubre traje', 'funda de traje', 'portatrajes'], productos: [] },
      { slug: 'bandas-reyna', nombre: 'Bandas de Reina', sinonimos: ['banda de reina', 'banda reina', 'certamen', 'reyna'], productos: [] },
    ],
  },
  {
    slug: 'bordado',
    nombre: 'Bordado',
    descripcion: 'Digitalización, punchado y bordado directo en prenda y plano.',
    color: '#047857',
    sinonimos: ['bordar', 'bordados', 'logo bordado', 'insignia'],
    subcategorias: [
      {
        slug: 'bordado-directo',
        nombre: 'Bordado Directo en Gorra y Prenda Armada',
        sinonimos: ['bordado gorra', 'bordado prenda', 'bordado directo'],
        productos: [
          {
            nombre: 'Logo bordado en gorra',
            imagen: 'assets/productos/bordado/bordado-directo/01.jpg',
            descripcion: 'Bordado de alta densidad sobre gorra estructurada.',
            sinonimos: ['gorra bordada', 'cachucha bordada', 'logo gorra'],
          },
          {
            nombre: 'Bordado en polo institucional',
            imagen: 'assets/productos/bordado/bordado-directo/02.jpg',
            sinonimos: ['polo bordado', 'playera bordada', 'camisa bordada'],
          },
        ],
      },
      { slug: 'digitalizacion-punchado', nombre: 'Digitalización y Punchado de Logotipos y Letras', sinonimos: ['digitalizacion', 'punchado', 'ponchado', 'vectorizar logo'], productos: [] },
      { slug: 'bordado-plano', nombre: 'Bordado en Plano hasta 2x2 mts', sinonimos: ['bordado plano', 'cuadro bordado', 'gran bordado'], productos: [] },
      { slug: 'maquila-bordado', nombre: 'Capacidad de Maquila en Bordado Plano y Prenda Armada', sinonimos: ['maquila bordado', 'produccion bordado', 'maquilado'], productos: [] },
    ],
  },
  {
    slug: 'serigrafia',
    nombre: 'Serigrafía',
    descripcion: 'Impresión en gorras, prendas, banderines y promocionales.',
    color: '#b45309',
    sinonimos: ['serigrafia', 'estampado', 'screen', 'impresion textil', 'serigrafiado'],
    subcategorias: [
      { slug: 'gorras', nombre: 'Gorras', sinonimos: ['gorra', 'cachucha', 'gorras estampadas'], productos: [] },
      { slug: 'prenda-armada', nombre: 'Prenda Armada', sinonimos: ['playera estampada', 'camiseta', 'prenda estampada'], productos: [] },
      { slug: 'banderines', nombre: 'Banderines', sinonimos: ['banderin', 'banderas', 'gallardete'], productos: [] },
      { slug: 'promocionales', nombre: 'Promocionales', sinonimos: ['promocional', 'publicidad', 'articulo publicitario'], productos: [] },
      { slug: 'personalizadores', nombre: 'Personalizadores', sinonimos: ['personalizador', 'personalizado', 'customizado'], productos: [] },
    ],
  },
  {
    slug: 'sublimado',
    nombre: 'Sublimado',
    descripcion: 'Personalización en gorras, termos, prendas y gran formato.',
    color: '#7c3aed',
    sinonimos: ['sublimado', 'sublimacion', 'impresion full color', 'sublimada'],
    subcategorias: [
      { slug: 'gorras', nombre: 'Gorras', sinonimos: ['gorra sublimada', 'cachucha sublimada'], productos: [] },
      { slug: 'prenda-armada', nombre: 'Prenda Armada', sinonimos: ['jersey', 'playera deportiva', 'prenda sublimada'], productos: [] },
      { slug: 'termos-tazas-vasos', nombre: 'Termos, Tazas y Vasos', sinonimos: ['termo', 'taza', 'vaso', 'mug', 'tarro'], productos: [] },
      { slug: 'maquila-gran-formato', nombre: 'Capacidad de Maquila en Gran Formato', sinonimos: ['gran formato', 'lona', 'maquila sublimado'], productos: [] },
    ],
  },
  {
    slug: 'vinil',
    nombre: 'Corte de Vinil',
    descripcion: 'Cortes especiales y acabados complementarios.',
    color: '#0f766e',
    sinonimos: ['vinil', 'vinilo', 'corte', 'transfer', 'textil', 'vinil textil', 'corte vinil'],
    subcategorias: [],
  },
];