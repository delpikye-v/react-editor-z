export declare function useDebounceCallback<T extends (...args: any[]) => void>(callback: T, delay: number): (...args: Parameters<T>) => void;
export declare function useMounted(): () => boolean;
