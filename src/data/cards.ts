import { CardType } from "../components";

import card1 from "../assets/images/card-1.png"
import card2 from "../assets/images/card-2.png"
import card3 from "../assets/images/card-3.png"
import card4 from "../assets/images/card-4.png"

const cards:CardType[] = [
    {
        key: 1,
        title: 'Methan',
        description: 'Methane (CH₄) is a simple hydrocarbon made up of one carbon and four hydrogen atoms. Its chemical formula is CH4, and is found in nature in the form of a gas.',
        img: card1
    },
    {
        key: 2,
        title: 'Carbon Monoxide',
        description: 'Carbon Monoxide (CO) is a colorless, odorless and tasteless gas. Its chemical formula is CO, that is, it is made up of a carbon atom and an oxygen atom linked with a triple bond.',
        img: card2
    },
    {
        key: 3,
        title: 'Ozone',
        description: 'Ozone (O₃) is an allotropic form of oxygen with the chemical formula O3. The odor of ozone is perceivable at atmospheric concentrations above 0.1 ppm.',
        img: card3
    },
    {
        key: 4,
        title: 'Nitrogen Dioxide',
        description: 'Nitrogen Dioxide (NO₂) is a red-brown gas with a suffocating, irritating, particularly humid and characteristic odor. It is denser than air, so its vapors tend to remain at ground level.',
        img: card4
    }
]

export default cards