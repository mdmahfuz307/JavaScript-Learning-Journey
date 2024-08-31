function constExample() {
    const x = 10;
    console.log(x);
    if (true) {
        const x = 20;
        console.log(x);
    }
    console.log(x);
}

constExample()