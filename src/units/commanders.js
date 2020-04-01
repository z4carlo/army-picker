const commanders = [
    {
      type: 'group', name: 'Neutral', items: [
      { name: "Ramsay Snow", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Roose Bolton", cost: 0, type: "NCU", unique: true, imgFile: "" },
      { name: "Vargo Hoat", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Daario Naharis", cost: 0, type: "Infantry", unique: true, imgFile: "" }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
      { name: "Gregor Clegane", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20116f.jpg" },
      { name: "Jamie Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20115f.jpg" },
      // { name: "Joffrey Baratheon", cost: 6, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20121f.jpg" },
      { name: "The High Sparrow", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Lannister/30103f.jpg" },
      { name: "Tyrion Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20105f.jpg" },
      { name: "Tywin Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20104f.jpg" }
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
      { name: "Brynden Tully", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Howland Reed", cost: 0, type: "NCU", unique: true, imgFile: "" },
      { name: "Eddard Stark", cost: 7, type: "Infantry", unique: true, imgFile: "" },
      { name: "Greatjon Umber", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Robb Stark", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Rodrik Cassel", cost: 0, type: "Infantry", unique: true, imgFile: "" },
      { name: "Brynden Tully", cost: 0, type: "Cavalry", unique: true, imgFile: "" },
      ]
    },
  ]

  export default commanders;