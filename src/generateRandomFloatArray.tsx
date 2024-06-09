export const generateRandomFloatArray = (length: number, min: number, max: number) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        const randomFloat = Math.random() * (max - min) + min;
        arr.push(parseFloat(randomFloat.toFixed(2)));
    }
    return arr;
}