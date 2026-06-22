// productos/models/catalogo.model.ts
export interface Producto {
  nombre: string;
  imagen: string;        // ej. 'assets/productos/ropa/uniformes-escolares/01.jpg'
  descripcion?: string;
  etiqueta?: string;     // ej. 'Más vendido', 'Nuevo'
}

export interface Subcategoria {
  slug: string;
  nombre: string;
  descripcion?: string;
  hijos?: Subcategoria[];
  productos?: Producto[];
}

export interface Categoria {
  slug: string;
  nombre: string;
  descripcion: string;
  color: string;
  subcategorias: Subcategoria[];
}