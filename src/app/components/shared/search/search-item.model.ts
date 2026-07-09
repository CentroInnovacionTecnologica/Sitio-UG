export interface SearchItem {
    titulo: string;
    seccion: string;
    tipo: 'categoria' | 'subcategoria' | 'producto';
    routerLink: any[];
    fragment?: string;
    color?: string;
    terminos: string;
}