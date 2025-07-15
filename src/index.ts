import products from "./products.json";
class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(n: string) {
    super(n);
    products.forEach((producto) => {
      this.addProduct({
        id: producto.id,
        name: producto.name,
        price: producto.price,
      });
    });
  }
  addProduct(product: Product): void {
    const exists = this.cosas.some((p) => p.id === product.id);
    if (!exists) {
      this.cosas.push(product);
    }
  }
  getProduct(id: number): Product {
    return this.cosas.find((p) => p.id === id);
  }
  removeProduct(id: number): void {
    this.cosas = this.cosas.filter((p) => p.id !== id);
  }
  getSortedByPrice(order: string): Product[] {
    if (order === "asc") {
      this.cosas.sort((a, b) => a.price - b.price);
      return this.cosas;
    }
    if (order === "desc") {
      this.cosas.sort((a, b) => b.price - a.price);
      return this.cosas;
    } else {
      console.log(
        'Los parametros a ingresar deberian ser "asc" para ascendente y "desc" para descendente.'
      );
      return [];
    }
  }
}

export { ListaDeProductos, Product };
