// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");


const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

let start = performance.now();
const reversed = story.split("").reverse().join("");

console.log(reversed);
console.log(`\nReversed took ${performance.now() - start} milliseconds to run \n`);

//Invertir mas eficiente con iteración
start = performance.now();
let reversed2 = "";

for (let i = story.length-1; i >= 0; i--) {
    reversed2 += story[i];
}

console.log(reversed2);
console.log(`\nReversed2 took ${performance.now() - start} milliseconds to run \n`);