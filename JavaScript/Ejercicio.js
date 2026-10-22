function esNumeroValido(valor) {
  if (valor === null || valor === undefined) return false;
  if (typeof valor === "string" && valor.trim() === "") return false;
  const n = Number(valor);
  return Number.isFinite(n);
}

function calcularIMC(peso, altura) {
  if (!esNumeroValido(peso) || Number(peso) <= 0) {
    throw new Error("El peso debe ser un número mayor que 0 (kg).");
  }
  if (!esNumeroValido(altura) || Number(altura) <= 0) {
    throw new Error("La altura debe ser un número mayor que 0 (metros).");
  }
  return Number(peso) / Number(altura) ** 2;
}

function clasificarIMC(imc) {
  if (imc < 18.5) return "bajo peso";
  if (imc < 25) return "normal";
  if (imc < 30) return "sobrepeso";
  return "obesidad";
}

function fizzBuzz(n) {
  if (!esNumeroValido(n)) {
    throw new Error("n debe ser un número (no puede estar vacío ni ser NaN).");
  }
  const num = Number(n);
  if (!Number.isInteger(num)) {
    throw new Error("n no puede tener decimales.");
  }
  if (num <= 0) {
    throw new Error("n debe ser un entero mayor que 0.");
  }

  const resultado = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) resultado.push("FizzBuzz");
    else if (i % 3 === 0) resultado.push("Fizz");
    else if (i % 5 === 0) resultado.push("Buzz");
    else resultado.push(i);
  }
  return resultado;
}

function probar(titulo, fn) {
  try {
    console.log(`${titulo}: ${fn()}`);
  } catch (e) {
    console.log(`${titulo}: ❌ ${e.message}`);
  }
}

console.log("=== A. IMC ===");
probar("70 kg, 1.75 m", () => {
  const imc = calcularIMC(70, 1.75);
  return `IMC ${imc.toFixed(1)} → ${clasificarIMC(imc)}`;
});
probar("50 kg, 1.80 m", () => {
  const imc = calcularIMC(50, 1.8);
  return `IMC ${imc.toFixed(1)} → ${clasificarIMC(imc)}`;
});
probar("95 kg, 1.70 m", () => {
  const imc = calcularIMC(95, 1.7);
  return `IMC ${imc.toFixed(1)} → ${clasificarIMC(imc)}`;
});
probar("peso 0", () => calcularIMC(0, 1.7));
probar("altura 'abc'", () => calcularIMC(70, "abc"));
probar("peso vacío", () => calcularIMC("", 1.7));

console.log("\n=== B. FizzBuzz ===");
probar("n = 15", () => fizzBuzz(15).join(", "));
probar("n = ''", () => fizzBuzz(""));
probar("n = NaN", () => fizzBuzz(NaN));
probar("n = -5", () => fizzBuzz(-5));
probar("n = 0", () => fizzBuzz(0));
probar("n = 3.5", () => fizzBuzz(3.5));