export type Category =
    | "all"
    | "landscape"
    | "portrait"
    | "street"
    | "nature"
    | "architecture";

export interface Photo {
    id: string;
    title: string;
    category: Exclude<Category, "all">;
    src: string;
    alt: string;
    width: number;
    height: number;
    location?: string;
    date?: string;
    featured?: boolean;
}