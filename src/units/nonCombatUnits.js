const nonCombatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Lord Varys", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Varys-NCU.png", neutral: true },
        { name: "Petyr Baelish", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Baelish-NCU.png", neutral: true },
        { name: "Tycho Nestoris", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Tycho-NCU.png", neutral: true },
        { name: "Jaqen H'ghar", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Jaqen-NCU.png", neutral: true },
        { name: "Walder Frey", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-WalderFrey-NCU.png", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Pycelle", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Pycelle-NCU.png" },
       { name: "Cersei Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Cersei-NCU.png" },
       { name: "Joffrey Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Joffrey-NCU.png" },
       { name: "Tyrion Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Tyrion-NCU.png" },
       { name: "Tywin Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Tywin-NCU.png" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Arya Stark", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Arya-NCU.png" },
        { name: "Sansa Stark", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Sansa.png" },
        { name: "Catelyn Stark", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Catelyn.png" },
        { name: "Eddard Stark", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-EddardStark-NCU.png" },
        { name: "Rodrik Cassel", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-RodrikCassel-NCU.png" },
      ]
     }
  ]

  export default nonCombatUnits;