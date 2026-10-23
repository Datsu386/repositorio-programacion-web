const datos = [
  { id: 1, nombre: "Teclado", precio: 450, stock: 5, detalles: { rating: 4.8 } },
  { id: 2, nombre: "Mouse", precio: 200, stock: 0, descuento: null, detalles: { rating: 4.2 } },
  { id: 3, nombre: "Monitor", precio: 3200, stock: 2, descuento: 200, detalles: { rating: 4.9 } },
  { id: 4, nombre: "Cable HDMI", precio: 90, stock: 20 },
  { id: 5, nombre: "Audífonos", precio: 650, stock: 12, descuento: 50, detalles: { rating: 4.5 } }
];

const filtrados = datos.filter(({ precio }) => precio < 500);

const total = datos.reduce((acc, producto) => {
  const descuentoAplicado = producto.descuento ?? 0;
  return acc + (producto.precio - descuentoAplicado);
}, 0);

const promedio = total / datos.length;

const ordenados = [...datos].sort((a, b) => {
  const ratingA = a.detalles?.rating ?? 0;
  const ratingB = b.detalles?.rating ?? 0;
  return ratingB - ratingA;
});

console.log({ filtrados, total, promedio, ordenados });
console.log(datos);