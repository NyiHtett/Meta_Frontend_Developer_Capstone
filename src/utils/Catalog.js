import fastFood from '../assets/CatalogLogos/frenchFries.png'
import fruit from '../assets/CatalogLogos/fruit.png'
import Pie from '../assets/CatalogLogos/Pie.png'
import octopus from '../assets/CatalogLogos/octopus.png'
import Ham from '../assets/CatalogLogos/Ham.png'
import HotDog from '../assets/CatalogLogos/Hotdog.png'
import Noodle from '../assets/CatalogLogos/Noodle.png'
import EggFry from '../assets/CatalogLogos/Egg Fry.png'
import Avocado from '../assets/CatalogLogos/Avocado.png'
import Banana from '../assets/CatalogLogos/Banana.png'
import Citrus from '../assets/CatalogLogos/Citrus.png'
import Coconut from '../assets/CatalogLogos/Coconut.png'
import Water from '../assets/CatalogLogos/Watermellon.png'
import Pome from '../assets/CatalogLogos/Pome.png'
import Orange from '../assets/CatalogLogos/Orange.png'
export const Catalog = [
    {
        id: 1,
        name: "Fast Food",
        icon: fastFood,
        list: [
            {
                name: "Hamburger",
                image: Ham,
                price: 5
            },
            {
                name: "Pizza",
                image: "https://img.icons8.com/3d-fluency/94/salami-pizza.png",
                price: 2
            },
            {
                name: "HotDog",
                image: HotDog,
                price: 2
            },
            {
                name: "Noodle",
                image: Noodle,
                price: 1
            },
            {
                name: "Egg Fry",
                image: EggFry,
                price: 0.5
            }
        ]
    },
    {
        id: 2,
        name: "Fruit",
        icon: fruit,
        list: [
            {
                name: "Avocado",
                image: Avocado,
                price: 2
            },
            {
                name: "Banana",
                image: Banana,
                price: 3
            },
            {
                name: "Citrus",
                image: Citrus,
                price: 4
            },
            {
                name: "Coconut",
                image: Coconut,
                price: 5
            },
            {
                name: "Watermellon",
                image: Water,
                price: 1
            },
            {
                name: "Pome",
                image: Pome,
                price: 1
            },
            {
                name: "Orange",
                image: Orange,
                price: 2
            },
            {
                name: "Vegetarian Food",
                image: "https://img.icons8.com/3d-fluency/94/vegetarian-food.png",
                price: 5
            },
        ]
    },
    {
        id: 3,
        name: "Pastry",
        icon: Pie,
        list: [
            {
                name: "Cupcake",
                image: "https://img.icons8.com/3d-fluency/94/cupcake.png",
                price: 8
            },
            {
                name: "Croissant",
                image: "https://img.icons8.com/isometric/94/croissant.png",
                price: 3
            },
            {
                name: "Doughnut",
                image: "https://img.icons8.com/3d-fluency/94/doughnut.png",
                price: 10
            }
        ]
    },
    {
        id: 4,
        name: "Seafood",
        icon: octopus,
        list: [
            {
                name: "Prawn",
                image: "https://img.icons8.com/3d-fluency/94/prawn.png",
                price: 10
            },
            {
                name: "Crab",
                image: "https://img.icons8.com/3d-fluency/94/crab.png",
                price: 10
            }
        ]
    }
]