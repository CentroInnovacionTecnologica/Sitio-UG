// productos/data/catalogo.ts
import { Categoria } from '../models/catalogo.model';

export const CATALOGO: Categoria[] = [

  // SECCIÓN DE ROPA
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
            nombre: 'Uniforme Escolar Niño',
            imagen: '/assets/uniformes-escolares/UniformeNiño.png',
            descripcion: 'Conjunto de saco, camisa, corbata y pantalón con bordado del logo institucional.',
            sinonimos: [
              'uniforme', 'uniforme escolar', 'uniforme niño', 'uniforme varonil',
              'conjunto escolar', 'saco', 'camisa', 'camisa manga larga',
              'corbata', 'pantalon', 'pantalones', 'traje escolar', 'colegio',
            ],
          },
          {
            nombre: 'Uniforme Escolar Niña',
            imagen: '/assets/uniformes-escolares/UniformeNiña.png',
            descripcion: 'Conjunto de saco, blusa, moño y falda tableada con bordado del logo institucional.',
            sinonimos: [
              'uniforme', 'uniforme escolar', 'uniforme niña', 'uniforme femenil',
              'conjunto escolar', 'saco', 'blusa', 'camisa', 'mono', 'corbata',
              'falda', 'falda tableada', 'falda a cuadros', 'tablones', 'tableada',
              'traje escolar', 'colegio',
            ],
          },
          {
            nombre: 'Uniforme Deportivo Azul Marino',
            imagen: '/assets/uniformes-escolares/UniformeDeportivo.png',
            descripcion: 'Conjunto de chamarra con cierre y pantalón deportivo con vivos laterales.',
            sinonimos: [
              'uniforme', 'uniforme escolar', 'uniforme deportivo', 'deportivo',
              'pants', 'pantalon deportivo', 'conjunto deportivo', 'chamarra',
              'chamarra deportiva', 'sudadera', 'chaqueta deportiva', 'ropa deportiva',
              'educacion fisica', 'deportes', 'colegio', 'azul', 'azul marino', 'marino',
            ],
          },
          {
            nombre: 'Uniforme Deportivo',
            imagen: '/assets/uniformes-escolares/UniformeVerde.png',
            descripcion: 'Conjunto de chamarra y pantalón deportivo con franjas laterales y logo bordado.',
            sinonimos: [
              'uniforme', 'uniforme escolar', 'uniforme deportivo', 'deportivo',
              'pants', 'pantalon deportivo', 'conjunto deportivo', 'chamarra',
              'chamarra deportiva', 'sudadera', 'chaqueta deportiva', 'ropa deportiva',
              'educacion fisica', 'deportes', 'colegio', 'verde', 'blanco', 'naranja',
            ],
          },
        ],
      },
      {
        slug: 'uniformes-industriales',
        nombre: 'Uniformes Industriales y Ropa de Trabajo',
        sinonimos: ['industrial', 'trabajo', 'overol', 'obrero', 'taller', 'operario', 'faena'],
        productos: [
          {
            nombre: 'Chaleco de Seguridad Amarillo',
            imagen: '/assets/uniformes-industriales/ChalecoAmarillo.png',
            descripcion: 'Chaleco multifuncional con bolsas y bandas reflejantes, bordado del logo institucional.',
            sinonimos: [
              'chaleco', 'chaleco de seguridad', 'chaleco reflejante', 'chaleco reflectante',
              'chaleco industrial', 'chaleco de trabajo', 'chaleco multifuncional',
              'chaleco de carga', 'alta visibilidad', 'reflejante', 'seguridad',
              'ropa de trabajo', 'amarillo',
            ],
          },
          {
            nombre: 'Chaleco de Seguridad Naranja',
            imagen: '/assets/uniformes-industriales/ChalecoNaranja.png',
            descripcion: 'Chaleco de malla de alta visibilidad con cintas reflejantes para uso industrial.',
            etiqueta: 'Varios Colores',
            sinonimos: [
              'chaleco', 'chaleco de seguridad', 'chaleco reflejante', 'chaleco reflectante',
              'chaleco industrial', 'chaleco de trabajo', 'chaleco de malla',
              'alta visibilidad', 'reflejante', 'seguridad', 'vialidad',
              'ropa de trabajo', 'naranja',
            ],
          },
          {
            nombre: 'Chaleco de Seguridad Verde',
            imagen: '/assets/uniformes-industriales/ChalecoVerde.png',
            descripcion: 'Chaleco multifuncional de alta visibilidad con bolsas y bandas reflejantes para uso industrial.',
            sinonimos: [
              'chaleco', 'chaleco de seguridad', 'chaleco reflejante', 'chaleco reflectante',
              'chaleco industrial', 'chaleco de trabajo', 'chaleco multifuncional',
              'chaleco de carga', 'alta visibilidad', 'reflejante', 'seguridad',
              'proteccion civil', 'vialidad', 'ropa de trabajo', 'verde', 'verde limon',
            ],
          }
        ],
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
        productos: [
          {
            nombre: 'Camisa Empresarial',
            imagen: '/assets/uniforme-empresarial/CamisaAmarilla.png',
            descripcion: 'Camisa de manga larga con broches y logo empresarial bordado.',
            sinonimos: [
              'camisa', 'blusa', 'camisa empresarial', 'camisa institucional',
              'camisa de trabajo', 'camisa manga larga', 'camisa vaquera', 'camisa con logo',
              'camisa bordada', 'playera de vestir', 'uniforme empresarial', 'branding',
              'amarillo', 'amarilla',
            ],
          },
          {
            nombre: 'Chaleco Empresarial',
            imagen: '/assets/uniforme-empresarial/ChalecoEXA.png',
            descripcion: 'Chaleco utilitario con múltiples bolsas y logo empresarial bordado.',
            sinonimos: [
              'chaleco', 'chaleco empresarial', 'chaleco institucional', 'chaleco de trabajo',
              'chaleco utilitario', 'chaleco reportero', 'chaleco con logo', 'chaleco bordado',
              'chaleco de bolsas', 'uniforme empresarial', 'branding', 'naranja',
            ],
          },
          {
            nombre: 'Chaleco Acolchado',
            imagen: '/assets/uniforme-empresarial/ChalecoRojo.png',
            descripcion: 'Chaleco acolchado tipo puffer con logos institucionales bordados.',
            fondo: '#e6e5e5',
            sinonimos: [
              'chaleco', 'chaleco acolchado', 'chaleco empresarial', 'chaleco institucional',
              'chaleco puffer', 'chaleco plumifero', 'chaleco termico', 'chaleco de frio',
              'chaleco con logo', 'chaleco bordado', 'uniforme empresarial', 'rojo',
            ],
          },
          {
            nombre: 'Chamarra Acolchada',
            imagen: '/assets/uniforme-empresarial/ChamarraNegra.png',
            descripcion: 'Chamarra acolchada tipo puffer con logos institucionales bordados.',
            fondo: '#e5e5e5',
            sinonimos: [
              'chamarra', 'chamarra acolchado', 'chamarra empresarial', 'chamarra institucional',
              'chamarra puffer', 'chamarra plumifero', 'chamarra termico', 'chamarra de frio',
              'chamarra con logo', 'chamarra bordado', 'uniforme empresarial', 'negro',
            ],
          },
        ],
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
        productos: [
          {
            nombre: 'Toga y Birrete de Graduación',
            imagen: '/assets/graduacion/Toga-ITD.png',
            descripcion: 'Conjunto de toga negra con birrete y borla, con ribetes en color institucional.',
            etiqueta: 'varios colores',
            sinonimos: [
              'toga', 'togas', 'birrete', 'birretes', 'toga y birrete',
              'gorro de graduacion', 'sombrero de graduacion', 'borla', 'borlas',
              'traje de graduacion', 'graduacion', 'titulacion', 'ceremonia',
              'negro', 'guinda',
            ],
          },
          {
            nombre: 'Conjunto de Toga, Birrete y Estola',
            imagen: '/assets/graduacion/Toga.png',
            descripcion: 'Conjunto de toga azul marino con birrete, borla y estola en dorado.',
            etiqueta: 'varios colores',
            sinonimos: [
              'toga', 'togas', 'birrete', 'birretes', 'estola', 'estolas',
              'toga y birrete', 'toga con estola', 'conjunto de graduacion',
              'gorro de graduacion', 'sombrero de graduacion', 'borla', 'borlas',
              'traje de graduacion', 'graduacion', 'titulacion', 'ceremonia',
              'azul', 'azul marino', 'marino', 'dorado', 'oro',
            ],
          },
          {
            nombre: 'Estola de Graduación',
            imagen: '/assets/graduacion/Estola-ITD.png',
            descripcion: 'Estola en color institucional con siglas y mascota bordadas.',
            etiqueta: 'Personalizable',
            sinonimos: [
              'estola', 'estolas', 'banda', 'banda de graduacion', 'estola de graduacion',
              'bufanda de graduacion', 'estola bordada', 'estola personalizada',
              'graduacion', 'titulacion', 'ceremonia', 'itd', 'guinda', 'vino',
            ],
          },
          {
            nombre: 'Estola de Graduación Personalizada',
            imagen: '/assets/graduacion/Estola-EST1.png',
            descripcion: 'Estola en color institucional con escudo y leyenda bordados a solicitud.',
            sinonimos: [
              'estola', 'estolas', 'banda', 'banda de graduacion', 'estola de graduacion',
              'bufanda de graduacion', 'estola bordada', 'estola personalizada',
              'escudo', 'logo bordado', 'graduacion', 'titulacion', 'ceremonia',
              'guinda', 'vino',
            ],
          },
        ],
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
            nombre: 'Chamarra Acolchada Negra',
            imagen: '/assets/chamarras-chalecos/Chamarra.png',
            descripcion: 'Chamarra acolchada tipo puffer con cuello alto, ligera y abrigadora para clima invernal.',
            fondo: '#e8e7e7',
            sinonimos: [
              'chamarra', 'chamarras', 'chamarra acolchada', 'chamarra puffer',
              'chamarra plumifero', 'chamarra termica', 'chamarra de frio',
              'chamarra invernal', 'chaqueta', 'chaqueta acolchada', 'abrigo',
              'invernal', 'negro', 'negra',
            ],
          },
          {
            nombre: 'Chaleco Acolchado',
            imagen: '/assets/chamarras-chalecos/Chaleco.png',
            descripcion: 'Chaleco acolchado tipo puffer, ligero y abrigador para clima invernal.',
            sinonimos: [
              'chaleco', 'chaleco acolchado', 'chaleco puffer', 'chaleco plumifero',
              'chaleco termico', 'chaleco de frio', 'chaleco invernal', 'chaleco sin mangas',
              'chamarra sin mangas', 'invernal', 'guinda', 'vino', 'rojo',
            ],
          },
          {
            nombre: 'Chaleco Softshell Azul Marino',
            imagen: '/assets/chamarras-chalecos/ChalecoAzul.png',
            descripcion: 'Chaleco softshell de corte recto con cierres, ideal para entretiempo.',
            sinonimos: [
              'chaleco', 'chaleco softshell', 'chaleco entretiempo', 'chaleco sin mangas',
              'chaleco de tela', 'chaleco ejecutivo', 'chamarra sin mangas',
              'entretiempo', 'azul', 'azul marino', 'marino',
            ],
          },
        ],
      },
    ],
  },

  // SECCIÓN DE ACCESORIOS
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    descripcion: 'Complementos personalizados para cada institución o empresa.',
    color: '#1d4ed8',
    sinonimos: ['accesorio', 'complemento', 'complementos'],
    subcategorias: [
      { slug: 'pantuflas', nombre: 'Pantuflas', sinonimos: ['pantufla', 'sandalia de casa', 'calzado casa'], productos: [] },
      {
        slug: 'cojines', nombre: 'Cojines', sinonimos: ['cojin', 'almohada', 'almohadon'],
        productos: [
          {
            nombre: 'Cojín Corazón Rojo',
            imagen: '/assets/cojines/CojinCorazon.png',
            descripcion: 'Cojín en forma de corazón con textura afelpada, suave y decorativo, ideal para regalo.',
            fondo: '#e8e7e7',
            sinonimos: [
              'cojin', 'cojin corazon', 'cojin de corazon', 'almohada corazon',
              'almohadon corazon', 'cojin rojo', 'cojin afelpado', 'cojin peludo',
              'cojin decorativo', 'cojin de regalo', 'cojin san valentin',
              'cojin amor', 'corazon', 'rojo',
            ],
          },
          {
            nombre: 'Cojín LOVE Blanco',
            imagen: '/assets/cojines/CojinLOVE.png',
            descripcion: 'Cojín rectangular blanco con la palabra "LOVE" bordada, textura suave y estilo romántico.',
            sinonimos: [
              'cojin', 'cojin love', 'cojin blanco', 'cojin rectangular',
              'almohada love', 'almohadon love', 'cojin con letras',
              'cojin bordado', 'cojin decorativo', 'cojin romantico',
              'cojin de regalo', 'cojin san valentin', 'cojin amor',
              'love', 'blanco',
            ],
          },
          {
            nombre: 'Cojín Corazón LOVE Floral',
            imagen: '/assets/cojines/CojinRojo.png',
            descripcion: 'Cojín en forma de corazón rojo con letras "LOVE" en aplicación de tela floral, suave y decorativo.',
            sinonimos: [
              'cojin', 'cojin corazon', 'cojin de corazon', 'cojin love',
              'almohada corazon', 'almohadon corazon', 'cojin rojo',
              'cojin floral', 'cojin con letras', 'cojin decorativo',
              'cojin romantico', 'cojin de regalo', 'cojin san valentin',
              'cojin amor', 'corazon', 'love', 'rojo',
            ],
          },
          {
            nombre: 'Cojín Emoji Amarillo',
            imagen: '/assets/cojines/CojinAmarillo.png',
            descripcion: 'Cojín redondo con diseño de emoji, ideal para regalo.',
            sinonimos: [
              'cojin', 'cojin emoji', 'cojin emoticon', 'cojin carita',
              'cojin amarillo', 'cojin redondo', 'almohada emoji',
              'almohadon emoji', 'cojin sonriente', 'cojin feliz',
              'cojin divertido', 'cojin decorativo', 'cojin de regalo',
              'emoji', 'emoticon', 'carita feliz', 'amarillo',
            ],
          },
        ],
      },
      { slug: 'cintos', nombre: 'Cintos', sinonimos: ['cinto', 'cinturon', 'faja'], productos: [] },
      { slug: 'birretes', nombre: 'Birretes', sinonimos: ['birrete', 'gorro graduacion', 'gorro toga'], productos: [] },
      { slug: 'cubre-trajes', nombre: 'Cubre-trajes', sinonimos: ['cubre traje', 'funda de traje', 'portatrajes'], productos: [] },
      { slug: 'bandas-reyna', nombre: 'Bandas de Reina', sinonimos: ['banda de reina', 'banda reina', 'certamen', 'reyna'], productos: [] },
    ],
  },

  // SECCIÓN DE BORDADO
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

  // SECCIÓN DE SERIGRAFÍA
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

  // SECCIÓN DE SUBLIMADO
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

  // SECCIÓN DE CORTE DE VINIL
  {
    slug: 'vinil',
    nombre: 'Corte de Vinil',
    descripcion: 'Cortes especiales y acabados complementarios.',
    color: '#0f766e',
    sinonimos: ['vinil', 'vinilo', 'corte', 'transfer', 'textil', 'vinil textil', 'corte vinil'],
    subcategorias: [],
  },
];