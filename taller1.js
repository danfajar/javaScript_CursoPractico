//Cuadrado
function squarePerimeter (squareSide){
    return squareSide * 4;
}

function squareArea (squareSide){
    return squareSide * squareSide;
}

var squareSide = prompt("Ingresa el lado del Cuadrado: ");

console.group("Cuadrado");
console.log(`Los lados del Cuadrado son de: ${squareSide} cm`);
console.log(`El perimetro del Cuadrado es de:  ${squarePerimeter(squareSide)} cm`);
console.log (`El área del Cuadrado es: ${squareArea(squareSide)} cm^2`);
console.groupEnd();

// Triángulo
function trianglePerimeter (triSide1, triSide2, base){
    return triSide1 + triSide2 + base;
}

function triangleArea (base, height){
    return( base * height) / 2;
}

var triSide1 = parseFloat(prompt("Ingresa el lado 1 del Triangulo: "));
var triSide2 = parseFloat(prompt("Ingresa el lado 2 del Triangulo: "));
var base = parseFloat(prompt("Ingresa la Base del Triangulo: "));

//Semiperimetro del triamgulo: Te permite hallar las alturas de un triángulo mediante sus lados;
var semiperimeter = (triSide1 + triSide2 + base)/2
var height = (2/base) * Math.sqrt(semiperimeter*(semiperimeter - triSide1)*(semiperimeter- triSide2)*(semiperimeter-base))


console.group("Triangulo");
console.log(`Semiperimetro: ${semiperimeter}, altura: ${height}`);
console.log(`Los lados del Triangulo son de: ${triSide1} cm, ${triSide2} cm ${base} cm `);
console.log(`El perimetro del Triangulo es de:  ${trianglePerimeter(triSide1, triSide2, base)} cm`);
console.log(`La altura del Triangulo es: ${height} cm`);
console.log (`El área del Triángulo es: ${triangleArea (base, height)} cm^2`);
console.groupEnd();


