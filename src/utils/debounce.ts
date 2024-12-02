export const debounce = (fn: (...args: unknown[]) => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (...args: unknown[]) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};
