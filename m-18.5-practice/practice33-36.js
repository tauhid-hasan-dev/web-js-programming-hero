/* practice 36 */
const arrayTopics = ["variable", "loop", "array", "conditionals"];

for (j = 0; j < 10; j++) {
    for (i = 0; i < arrayTopics.length; i++) {
        const topic = arrayTopics[i];
        console.log(topic);
    }
}

for (i = 0; i < arrayTopics.length; i++) {
    const topic = arrayTopics[i];
    /* console.log(topic); */
}

// practice 37
const arrayMobiles = ["Samsung", "Nokia", "Xiomi"];

for (i = 0; i < 1; i++) {
    /*  console.log(arrayMobiles); */
}

/* practice 38 */

for (i = 30; i >= 30 && i <= 86; i++) {
    if (i > 44) {
        break;
    }
    /* console.log(i); */
}

// practice 39

const books = [23, 300, 54, 678, 100, 67]

for (i = 0; i < books.length; i++) {
    let book = books[i]
    if (book > 200) {
        continue;
    }
    /*   console.log(book); */
}



