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
     },
     {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Craster", cost: 3, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-CRASTER.png" },
        { name: "Aemon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Aemon.png" },
        { name: "Bowen Marsh", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Marsh.png" },
        { name: "Donal Noye", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Noye.png" },
        { name: "Jeor Mormont", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Jeor.png" },
        { name: "Qhorin Halfhand", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-HalfHand.png" },
      ]
     },
     {
      type: 'group', name: 'Free Folk', items: [
        { name: "Craster", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Craster-NCU.png" },
        { name: "Lady Val", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/VAL-NCU.png" },
        { name: "Ygritte", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Ygritte-NCU.png" },
        { name: "Mance Rayder", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Mance-NCU.png" },
        { name: "Styr", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Styr-NCU.png" },
      ]
     },
  ]

  export default nonCombatUnits;