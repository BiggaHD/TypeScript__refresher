interface Product {
  description(
    name: string,
    priceRange: number,
    healthy: boolean,
    vegan: boolean,
    calories: number
  ): string;
}

class Food {
  constructor(
    public name: string,
    price: number,
    healthy: boolean,
    vegan: boolean,
    calories: number
  ) {}
  static description(
    name: string,
    priceRange: string,
    healthy: boolean,
    vegan: boolean,
    calories: number
  ): string {
    return `${name} is fairly ${priceRange}. It's ${
      healthy ? "healthy" : "not quite healthy"
    }, ${
      vegan ? "it's vegan" : "it is not vegan"
    }, and has ${calories} calories.`;
  }
}

const data = {
  name: "Buddha Bowl",
  priceRange: "expensive",
  healthy: true,
  vegan: true,
  calories: 750,
};

console.log(
  Food.description(
    data.name,
    data.priceRange,
    data.healthy,
    data.vegan,
    data.calories
  )
);
