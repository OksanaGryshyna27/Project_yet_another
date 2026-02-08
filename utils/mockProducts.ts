type Product = Record<string, any>;

export function createMockProducts(original: Product[], count: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const base = original[i % original.length];   // берём реальный продукт как шаблон
    products.push({
      ...base,
      id: `mock-${i + 1}`,
      name: `Mock Product ${i + 1}`,
    });
  }

  return products;
}