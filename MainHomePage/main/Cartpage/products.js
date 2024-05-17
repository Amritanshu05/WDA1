const products = [
  {
    id: 1,
    name: " Equinox Tshirt",
    price: 500,
    image: "images/eqt.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 2,
    name: " Equinox Mug",
    price: 200,
    image: "images/Mug.jpeg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 3,
    name: " Equinox Cap",
    price: 100,
    image: "images/ec.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 4,
    name: " Equinox Sweatshirt",
    price: 700,
    image: "images/eqsw.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 5,
    name: " Enspire Hoodie",
    price: 700,
    image: "images/eh2.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 6,
    name: " Enspire Tshirt",
    price: 500,
    image: "images/et1.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 7,
    name: " Enspire Tshirt",
    price: 500,
    image: "images/et2.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 8,
    name: " Enspire Hoodie",
    price: 700,
    image: "images/eh1.png",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 9,
    name: " Utkrisht Hoodie",
    price: 700,
    image: "images/Utkrisht-6.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 10,
    name: "Utkrisht Hoodie",
    price: 200,
    image: "images/Utkrisht-1.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 11,
    name: "Utkrisht Hoodie",
    price: 100,
    image: "images/Utkrisht-3.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 12,
    name: "Utkrisht Hoodie",
    price: 700,
    image: "images/Utkrisht-5.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 13,
    name: "Gdsc Hoodie",
    price: 700,
    image: "images/Gdsc-1.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 14,
    name: "Gdsc Hoodie",
    price: 500,
    image: "images/Gdsc-3.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 15,
    name: "Gdsc Hoodie",
    price: 500,
    image: "images/Gdsc-4.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 16,
    name: "Gdsc Hoodie",
    price: 700,
    image: "images/Google.webp",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 17,
    name: " Eifer Hoodie",
    price: 500,
    image: "images/Eifer-1.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 18,
    name: " Eifer Hoodie",
    price: 200,
    image: "images/Eifer-4.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 19,
    name: "Eifer Hoodie",
    price: 100,
    image: "images/Eifer-7.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 20,
    name: " Eifer Hoodie",
    price: 700,
    image: "images/Eifer-9.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 21,
    name: "Afterdark Hoodie",
    price: 700,
    image: "images/Afterdark-1.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 22,
    name: "Afterdark Hoodie",
    price: 500,
    image: "images/Afterdark-3.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 23,
    name: "Afterdark Hoodie",
    price: 500,
    image: "images/Afterdark-6.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 24,
    name: "Afterdark Cup",
    price: 700,
    image: "images/Afterdark-cup.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 25,
    name: "Zephyr Hoodie",
    price: 700,
    image: "images/zephyr-1.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 26,
    name: "Zephyr Hoodie",
    price: 500,
    image: "images/zephyr-3.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 27,
    name: "Zephyr Hoodie",
    price: 500,
    image: "images/zephyr-5.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
  {
    id: 28,
    name: "Zephyr Hoodie",
    price: 700,
    image: "images/zephyr-7.jpg",
    description:
      "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric.",
  },
];
export default products;
