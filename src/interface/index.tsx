export interface Product{
    id: string,
    image: string,
    name: string,
    subtitle: string,
    price: string
}

export type typeToast = 'success' |'failure'

export interface IconAttributes {
    width?: string,
    height?: string,
    color?: string,
    stroke?: string
}