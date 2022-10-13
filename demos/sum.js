const sum = (...array) => {
    console.log(array.reduce((c, n) => c + n, 0));
};

sum(1, 2, 3, 4, 5);
