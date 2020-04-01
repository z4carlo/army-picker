const commanders = [
    {
      type: 'group', name: 'Neutral', items: [
      { name: "Ramsay Snow", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: ""}, neutral: true },
      { name: "Roose Bolton", cost: 0, type: "NCU", unique: true, imgFile: "", attachment2: "None", neutral: true },
      { name: "Vargo Hoat", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
      { name: "Daario Naharis", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
      { name: "Gregor Clegane", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20116f.jpg", attachment2: "None" },
      { name: "Jamie Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20115f.jpg", attachment2: "None" },
      // { name: "Joffrey Baratheon", cost: 6, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20121f.jpg", attachment2: "None" },
      { name: "The High Sparrow", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Lannister/30103f.jpg" },
      { name: "Tyrion Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20105f.jpg", attachment2: "None" },
      { name: "Tywin Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20104f.jpg", attachment2: "None" }
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
      { name: "Brynden Tully", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      { name: "Howland Reed", cost: 0, type: "NCU", unique: true, imgFile: "" },
      { name: "Eddard Stark", cost: 7, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      { name: "Greatjon Umber", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      { name: "Robb Stark", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      { name: "Rodrik Cassel", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      { name: "Brynden Tully", cost: 0, type: "Cavalry", unique: true, imgFile: "", attachment2: "None" },
      ]
    },
  ]

  export default commanders;