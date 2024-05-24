import { CardType } from "../components";

import card1 from "../assets/images/card-1.png"
import card2 from "../assets/images/card-2.png"
import card3 from "../assets/images/card-3.png"
import card4 from "../assets/images/card-4.png"
import card5 from "../assets/images/card-5.png"
import card6 from "../assets/images/card-6.png"
import card7 from "../assets/images/card-7.png"
import card8 from "../assets/images/card-8.png"

const cards:CardType[] = [
    {
        key: 1,
        title: 'Carbon Monoxide',
        description: 'Carbon monoxide (CO) is a colorless, odorless and tasteless gas that is less dense than air. It is highly toxic to animals. Its chemical formula is CO, that is, one carbon atom and one oxygen atom linked by a triple bond.',
        img: card1
    },
    {
        key: 2,
        title: 'Nitrogen Monoxide',
        description: 'Nitrogen monoxide (NO) is a colorless gas. The substance is a strong oxidant and reacts with combustible and reducing materials. In contact with air it reacts with oxygen transforming into nitrogen dioxide.',
        img: card2
    },
    {
        key: 3,
        title: 'Nitrogen Dioxide',
        description: 'Nitrogen Dioxide (NO₂) is a red-brown gas with a suffocating, irritating, particularly humid and characteristic odor. It is denser than air, so its vapors tend to remain at ground level.',
        img: card3
    },
    {
        key: 4,
        title: 'Ozone',
        description: 'Ozone (O₃) is an allotropic form of oxygen with the chemical formula O3. The odor of ozone is perceivable at atmospheric concentrations above 0.1 ppm.',
        img: card4
    },
    {
        key: 5,
        title: 'Sulfur Dioxide',
        description: 'Sulfur dioxide (So2) is a colorless gas, very soluble in water and toxic. It is released naturally by volcanic activity and is produced as a byproduct of copper mining and the burning of sulfur-containing fossil fuels.',
        img: card5
    },
    {
        key: 6,
        title: 'Particles <PM2.5',
        description: "Fine particles with a diameter <2.5 are very dangerous for our body. PM 2.5 is capable of penetrating deep into the lungs. It is partly of natural origin but above all from human activities of various kinds, industrial and otherwise.",
        img: card6
    },
    {
        key: 7,
        title: 'Particles <PM10',
        description: "PM<10 dust is a polluting particle present in the air we breathe. These particles can be both organic and inorganic and present in a solid or liquid state. They contain toxic properties such as sulfates, nitrates and metals.",
        img: card7
    },
    {
        key: 8,
        title: 'Nitrogen Trihydride',
        description: "Ammonia, called nitrogen trihydride (NH3), is a nitrogen compound that appears as a colorless, toxic gas with a pungent and characteristic odor. It is very soluble in water to which it gives a clear basicity.",
        img: card8
    },
]

export default cards