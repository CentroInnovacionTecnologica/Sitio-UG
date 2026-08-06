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
      {
        slug: 'pantuflas', nombre: 'Pantuflas', sinonimos: ['pantufla', 'sandalia de casa', 'calzado casa'],
        productos: [
          {
            nombre: 'Pantuflas Azul Turquesa',
            imagen: '/assets/pantunflas/PanAzul.png',
            descripcion: 'Pantuflas abiertas de peluche suave en color azul turquesa, cómodas y cálidas para estar en casa.',
            etiqueta: 'VARIOS COLORES',
            fondo: '#e8e7e7',
            sinonimos: [
              'pantuflas', 'pantunflas', 'pantufla', 'pantuflas peludas',
              'pantuflas de peluche', 'pantuflas suaves', 'pantuflas abiertas',
              'pantuflas de casa', 'chanclas de casa', 'zapatillas de casa',
              'babuchas', 'pantuflas azules', 'pantuflas turquesa',
              'azul', 'turquesa', 'azul turquesa',
            ],
          },
          {
            nombre: 'Pantuflas Moradas',
            imagen: '/assets/pantunflas/PanMoradas.png',
            descripcion: 'Pantuflas cerradas de peluche con textura en relieve, color morado, suaves y abrigadoras para el hogar.',
            etiqueta: 'VARIOS COLORES',
            sinonimos: [
              'pantuflas', 'pantunflas', 'pantufla', 'pantuflas peludas',
              'pantuflas de peluche', 'pantuflas suaves', 'pantuflas cerradas',
              'pantuflas de casa', 'chanclas de casa', 'zapatillas de casa',
              'babuchas', 'pantuflas moradas', 'pantuflas lila',
              'morado', 'morada', 'moradas', 'lila', 'violeta',
            ],
          },
          {
            nombre: 'Pantuflas Estampado Animal Print',
            imagen: '/assets/pantunflas/PanLeo.png',
            descripcion: 'Pantuflas abiertas con estampado de leopardo, suaves y elegantes para descansar en casa.',
            sinonimos: [
              'pantuflas', 'pantunflas', 'pantufla', 'pantuflas animal print',
              'pantuflas leopardo', 'pantuflas de leopardo', 'pantuflas estampadas',
              'pantuflas abiertas', 'pantuflas de peluche', 'pantuflas suaves',
              'pantuflas de casa', 'chanclas de casa', 'zapatillas de casa',
              'babuchas', 'animal print', 'leopardo', 'estampado animal',
              'cafe', 'beige',
            ],
          },
          {
            nombre: 'Pantuflas Rojas',
            imagen: '/assets/pantunflas/PanRojas.png',
            descripcion: 'Pantuflas cerradas de peluche suave en color rojo, cálidas y cómodas para el hogar.',
            etiqueta: 'VARIOS COLORES',
            sinonimos: [
              'pantuflas', 'pantunflas', 'pantufla', 'pantuflas peludas',
              'pantuflas de peluche', 'pantuflas suaves', 'pantuflas cerradas',
              'pantuflas de casa', 'chanclas de casa', 'zapatillas de casa',
              'babuchas', 'pantuflas rojas', 'rojo', 'roja', 'rojas',
            ],
          },
        ],
      },
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
      {
        slug: 'birretes', nombre: 'Birretes', sinonimos: ['birrete', 'gorro graduacion', 'gorro toga'],
        productos: [
          {
            nombre: 'Birrete de Graduación Negro',
            imagen: '/assets/birretes/BirreteNegro.png',
            descripcion: 'Birrete de graduación clásico en color negro con borla, ideal para ceremonias académicas.',
            etiqueta: 'VARIOS COLORES',
            fondo: '#e8e7e7',
            sinonimos: [
              'birrete', 'birretes', 'birrete de graduacion', 'gorro de graduacion',
              'toga y birrete', 'sombrero de graduacion', 'birrete academico',
              'birrete con borla', 'graduacion', 'birrete negro',
              'negro', 'negra',
            ],
          },
          {
            nombre: 'Birrete de Graduación Azul',
            imagen: '/assets/birretes/BirreteAzul.png',
            descripcion: 'Birrete de graduación en color azul rey con borla a juego, perfecto para eventos escolares y universitarios.',
            etiqueta: 'PERSONALIZABLES',
            sinonimos: [
              'birrete', 'birretes', 'birrete de graduacion', 'gorro de graduacion',
              'toga y birrete', 'sombrero de graduacion', 'birrete academico',
              'birrete con borla', 'graduacion', 'birrete azul',
              'azul', 'azul rey',
            ],
          },
          {
            nombre: 'Birrete de Graduación Guinda',
            imagen: '/assets/birretes/BirreteGuinda.png',
            descripcion: 'Birrete de graduación en color guinda con borla a juego, ideal para ceremonias de titulación.',
            etiqueta: 'TODAS LAS TALLAS',
            sinonimos: [
              'birrete', 'birretes', 'birrete de graduacion', 'gorro de graduacion',
              'toga y birrete', 'sombrero de graduacion', 'birrete academico',
              'birrete con borla', 'graduacion', 'birrete guinda',
              'guinda', 'vino', 'rojo', 'vinotinto',
            ],
          },
          {
            nombre: 'Birrete de Graduación Verde',
            imagen: '/assets/birretes/BirreteVerde.png',
            descripcion: 'Birrete de graduación en color verde con borla, elegante para ceremonias académicas.',
            sinonimos: [
              'birrete', 'birretes', 'birrete de graduacion', 'gorro de graduacion',
              'toga y birrete', 'sombrero de graduacion', 'birrete academico',
              'birrete con borla', 'graduacion', 'birrete verde',
              'verde',
            ],
          },
        ],
      },
      { slug: 'cubre-trajes', nombre: 'Cubre-trajes', sinonimos: ['cubre traje', 'funda de traje', 'portatrajes'], productos: [] },
      {
        slug: 'bandas-reyna', nombre: 'Bandas de Reina', sinonimos: ['banda de reina', 'banda reina', 'certamen', 'reyna'],
        productos: [
          {
            nombre: 'Banda de Reina Negra',
            imagen: '/assets/bandas-reina/BandaNegra.png',
            descripcion: 'Banda de reina en satén negro con letras doradas y acabado elegante, ideal para coronaciones y eventos.',
            etiqueta: 'VARIOS COLORES',
            fondo: '#e8e7e7',
            sinonimos: [
              'banda', 'bandas', 'banda de reina', 'banda reina', 'banda de coronacion',
              'banda de certamen', 'banda de belleza', 'banda satinada', 'banda personalizada',
              'reina', 'coronacion', 'certamen', 'banda negra',
              'negro', 'negra',
            ],
          },
          {
            nombre: 'Banda de Princesa Verde',
            imagen: '/assets/bandas-reina/BandaPrinc.png',
            descripcion: 'Banda de princesa en satén verde con borde dorado y letras doradas, perfecta para certámenes y celebraciones.',
            etiqueta: 'PERSONALIZABLES',
            sinonimos: [
              'banda', 'bandas', 'banda de princesa', 'banda princesa', 'banda de reina',
              'banda de coronacion', 'banda de certamen', 'banda de belleza',
              'banda satinada', 'banda personalizada', 'princesa', 'certamen',
              'banda verde', 'verde',
            ],
          },
          {
            nombre: 'Banda de Princesa Real Dorada',
            imagen: '/assets/bandas-reina/BandaReal.png',
            descripcion: 'Banda de princesa real en satén dorado con letras oscuras, elegante para coronaciones y eventos especiales.',
            etiqueta: 'TODAS LAS TALLAS',
            sinonimos: [
              'banda', 'bandas', 'banda de princesa real', 'banda princesa real',
              'banda de reina', 'banda de coronacion', 'banda de certamen',
              'banda de belleza', 'banda satinada', 'banda personalizada',
              'princesa real', 'coronacion', 'certamen', 'banda dorada',
              'dorado', 'dorada', 'oro', 'amarillo',
            ],
          },
          {
            nombre: 'Banda Miss Fotogenia Azul Marino',
            imagen: '/assets/bandas-reina/BandaAzul.png',
            descripcion: 'Banda Miss Fotogenia en satén azul marino con borde y letras doradas, ideal para certámenes de belleza.',
            sinonimos: [
              'banda', 'bandas', 'banda miss fotogenia', 'banda fotogenia',
              'banda de reina', 'banda de coronacion', 'banda de certamen',
              'banda de belleza', 'banda satinada', 'banda personalizada',
              'miss fotogenia', 'certamen', 'banda azul', 'banda azul marino',
              'azul', 'azul marino', 'marino',
            ],
          },
        ],
      },
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
            nombre: 'Gorra con frase bordada',
            imagen: 'assets/bordado-directo/GorraVerde.png',
            descripcion:
              'Bordado de alta densidad sobre gorra trucker de malla. Ideal para frases, nombres o logotipos con acabado en relieve.',
            etiqueta: 'PERSONALIZABLE',
            fondo: '#ebeaea',
            sinonimos: [
              'gorra bordada',
              'cachucha bordada',
              'gorra trucker',
              'gorra de malla',
              'gorra personalizada',
              'bordado de frase',
              'logo en gorra',
            ],
          },
          {
            nombre: 'Gorras bordadas para pareja',
            imagen: 'assets/bordado-directo/GorraNovios.png',
            descripcion:
              'Set de gorras estructuradas con nombre bordado en hilo metálico. Perfectas para regalos, aniversarios y eventos especiales.',
            etiqueta: 'PERSONALIZABLE',
            fondo: '#ebeaea',
            sinonimos: [
              'gorras de pareja', 'gorras para novios', 'gorras con nombre',
              'cachuchas bordadas', 'gorras personalizadas', 'regalo bordado',
              'set de gorras',
            ],
          },
          {
            nombre: 'Gorras bordadas para negocio',
            imagen: 'assets/bordado-directo/BabyB.png',
            descripcion:
              'Gorra para negocio con bordado especial para trabajo',
            etiqueta: 'PERSONALIZABLE',
            fondo: '#ebeaea',
            sinonimos: [
              'gorras de pareja', 'gorras para novios', 'gorras con nombre',
              'gorras para negocio', 'gorras para trabajo', 'cachuchas bordadas',
              'gorras personalizadas', 'regalo bordado', 'set de gorras',
            ],
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
      {
        slug: 'gorras', nombre: 'Gorras', sinonimos: ['gorra', 'cachucha', 'gorras estampadas'],
        productos: [
          {
            nombre: 'Gorra bicolor con apodo bordado',
            imagen: 'assets/gorras/GorraAzul.png',
            descripcion:
              'Bordado a color en alta densidad sobre frente sólido y malla transpirable.',
            etiqueta: 'PERSONALIZABLE',
            fondo: '#ededed',
            sinonimos: [
              'gorra bordada','cachucha bordada','gorra de malla','gorra bicolor',
              'gorra snapback','gorra personalizada','gorra con apodo',
              'gorra con frase','lettering bordado','bordado a color',
            ],
          },
          {
            nombre: 'Gorra bicolor para equipos y grupos',
            imagen: 'assets/gorras/GorraRoja.png',
            descripcion:
              'Nombres de equipo o apellidos bordados en hilo a color. Ideal por volumen.',
            etiqueta: 'PERSONALIZABLE',
            fondo: '#ededed',
            sinonimos: [
              'gorras para equipo','gorras por mayoreo','gorra bordada',
              'cachucha bordada','gorra de malla','gorra bicolor',
              'gorra snapback','gorra personalizada','gorra con nombre',
              'gorras familiares','bordado a color',
            ],
          },
        ],
      },
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
      {
        slug: 'termos-tazas-vasos', nombre: 'Termos, Tazas y Vasos', sinonimos: ['termo', 'taza', 'vaso', 'mug', 'tarro'],
        productos: [
          {
            nombre: 'Termo Personalizado para eventos',
            imagen: '/assets/termos/Termo.png',
            descripcion: 'Termo deportivo blanco de aluminio con mosquetón, personalizable con nombres y fecha, ideal para bodas y recuerdos.',
            etiqueta: 'VARIOS COLORES',
            fondo: '#e8e7e7',
            sinonimos: [
              'termo', 'termos', 'termo deportivo', 'termo de aluminio', 'termo personalizado',
              'botella', 'botella de agua', 'botella deportiva', 'cilindro', 'cantimplora',
              'termo con mosqueton', 'termo de boda', 'recuerdo de boda',
              'personalizado', 'boda', 'blanco',
            ],
          },
          {
            nombre: 'Tazas Personalizadas para Pareja',
            imagen: '/assets/termos/Tazas.png',
            descripcion: 'Set de tazas de cerámica blancas con diseño personalizable, ideales para parejas y regalos originales.',
            etiqueta: 'PERSONALIZABLES',
            fondo: '#e8e7e7',
            sinonimos: [
              'taza', 'tazas', 'taza personalizada', 'tazas personalizadas', 'taza de ceramica',
              'taza de cafe', 'mug', 'jarro', 'pocillo', 'taza de pareja',
              'tazas de pareja', 'taza de regalo', 'set de tazas',
              'personalizada', 'ceramica', 'blanco',
            ],
          },
          {
            nombre: 'Vasos con Popote Personalizados',
            imagen: '/assets/termos/Vaso.png',
            descripcion: 'Vasos transparentes con tapa y popote, personalizables con nombre o diseño, ideales para despedidas y eventos.',
            etiqueta: 'VARIOS COLORES',
            fondo: '#e8e7e7',
            sinonimos: [
              'vaso', 'vasos', 'vaso con popote', 'vaso con tapa', 'vaso personalizado',
              'vasos personalizados', 'botella', 'botella con popote', 'cilindro con popote',
              'vaso de despedida', 'bride to be', 'despedida de soltera',
              'personalizado', 'transparente',
            ],
          },
          {
            nombre: 'Termo para Empresa Personalizable',
            imagen: '/assets/termos/TermoAzul.png',
            descripcion: 'Termo de aluminio azul metálico, personalizable con logo o nombre de empresa, ideal para regalos corporativos y promocionales.',
            etiqueta: 'VARIOS COLORES',

            sinonimos: [
              'termo', 'termos', 'termo deportivo', 'termo de aluminio', 'termo personalizado',
              'termo empresarial', 'termo corporativo', 'termo promocional', 'termo con logo',
              'botella', 'botella de agua', 'botella deportiva', 'cilindro', 'cantimplora',
              'regalo corporativo', 'empresa', 'personalizado', 'azul', 'azul metalico',
            ],
          },
        ],
      },
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