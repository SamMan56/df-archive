declare module '@bbob/html' {
    export default function toHTML(
        source: string, 
        preset: any, 
        options?: {
            skipParse: boolean,
            parser: Function,
            render: Function,
            data: any
        }
    ): string;
}