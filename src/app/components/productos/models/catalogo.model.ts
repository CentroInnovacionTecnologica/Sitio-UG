// productos/models/catalogo.model.ts
export interface Producto {
  nombre: string;
  imagen?: string;
  descripcion?: string;
  etiqueta?: string;
  sinonimos?: string[];
  fondo?: string;
}

export interface Hijo {
  slug: string;
  nombre: string;
  sinonimos?: string[];
}

export interface Subcategoria {
  slug: string;
  nombre: string;
  productos: Producto[];
  hijos?: Hijo[];
  sinonimos?: string[];
}

export interface Categoria {
  slug: string;
  nombre: string;
  descripcion?: string;
  color?: string;
  subcategorias: Subcategoria[];
  sinonimos?: string[];
}