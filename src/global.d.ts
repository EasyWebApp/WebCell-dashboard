declare module '*.css' {
    const map: Record<string, string>;
    export = map;
}
declare module '*.less' {
    const map: Record<string, string>;
    export = map;
}
declare module '*.gif' {
    const path: string;
    export default path;
}
declare module '*.png' {
    const path: string;
    export default path;
}
declare module '*.jpg' {
    const path: string;
    export default path;
}
declare module '*.jpeg' {
    const path: string;
    export default path;
}
declare module '*.svg' {
    const path: string;
    export default path;
}
declare module '*.webp' {
    const path: string;
    export default path;
}

declare module 'browser-unhandled-rejection' {
    export function auto(): any;
}
