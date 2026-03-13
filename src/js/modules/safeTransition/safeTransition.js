export const safeTransition = (callback) => {
    if(!document.startViewTransition) {
        callback();
        return;
    }

    document.startViewTransition(() => {
        callback();
    });
}