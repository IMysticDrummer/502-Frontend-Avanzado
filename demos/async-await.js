const foo = () => {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(2);
        }, 100);
    });
    return promise;
};

(async function () {
    let r = await foo();

    console.log(r);
})();
console.log(foo());