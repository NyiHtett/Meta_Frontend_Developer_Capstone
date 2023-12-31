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
                icon: Ham,
            },
            {
                name: "HotDog",
                icon: HotDog
            },
            {
                name: "Noodle",
                icon: Noodle
            },
            {
                name: "Egg Fry",
                icon: EggFry
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
                icon: Avocado
            },
            {
                name: "Banana",
                icon: Banana
            },
            {
                name: "Citrus",
                icon: Citrus
            },
            {
                name: "Coconut",
                icon: Coconut
            },
            {
                name: "Water",
                icon: Water
            },
            {
                name: "Pome",
                icon: Pome
            },
            {
                name: "Orange",
                icon: Orange
            },
        ]
    },
    {
        id: 3,
        name: "Pastry",
        icon: Pie
    },
    {
        id: 4,
        name: "Seafood",
        icon: octopus
    }
]