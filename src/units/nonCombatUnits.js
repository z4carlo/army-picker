const nonCombatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Lord Varys", cost: 4, type: "NCU", unique: true, imgFile: "", neutral: true },
        { name: "Petyr Baelish", cost: 4, type: "NCU", unique: true, imgFile: "", neutral: true },
        { name: "Tycho Nestoris", cost: 4, type: "NCU", unique: true, imgFile: "", neutral: true },
        { name: "Jaqen H'ghar", cost: 5, type: "NCU", unique: true, imgFile: "", neutral: true },
        { name: "Walder Frey", cost: 5, type: "NCU", unique: true, imgFile: "", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Pycelle", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Lannister/30102f.jpg" },
       { name: "Cersei Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/30105f.jpg" },
       { name: "Joffrey Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/30106f.jpg" },
       { name: "Tyrion Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/30104f.jpg" },
       { name: "Tywin Lannister", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/30101f.jpg" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Arya Stark", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Sansa Stark", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Catelyn Stark", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Eddard Stark", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Rodrik Cassel", cost: 4, type: "NCU", unique: true, imgFile: "" },
      ]
     }
  ]

  export default nonCombatUnits;