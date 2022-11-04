export interface IActionRequest {
    date: string;
    name: string;
    title: string;
    description: string;
    imagePath: string;
}

export interface IActionResponse extends IActionRequest {
    id: number;
}