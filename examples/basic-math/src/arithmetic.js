export const add = (a, b) => {
    return a + b;
};

export const subtract = (a = 0, b = 0) => {
    if(Array.isArray(a)){
        a = a.reduce((a, b) => {
            return a - b;
        })
    }

    return a - b;
};

export const multiply = (a, b) => {
    return a * b;
};

export const divide = (a, b) => {
    const result = a / b;

    if(result === Infinity) {
        return null;
    }

    return result;
};
