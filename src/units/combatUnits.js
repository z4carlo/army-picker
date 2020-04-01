const combatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "House Bolton Cutthroats", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Stormcrow Mercenaries", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Bloody Mummer Skirmishers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Stormcrow Archers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "House Bolton Bastard's Girls", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "House bolton Flayed Men", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "" },
      ]
    },
    {
      type: 'group', name: 'Lannister', items: [
        { name: "Gregor Clegane", cost: 4, attachment: "None", type: "Cavalry", unique: true, imgFile: "./Images/Lannister/10107f.jpg" },
        { name: "Lannister Guardsmen", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10101f.jpg" },
        { name: "Poor Fellows", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10109f.jpg" },
        { name: "Mountains Men", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10103f.jpg" },
        { name: "Lannister Halberdiers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10102f.jpg" },
        { name: "Lannister Crossbowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10106f.jpg" },
        { name: "Pyromancers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/10104f.jpg" },
        //  { name: "The Warrior's Sons", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Test1.jpg" },
        { name: "Knights of Castely Rock", cost: 8, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Lannister/10105f.jpg" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Trackers", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Stark Sworn Swords", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "House Tully Sworn Sheild", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Stark Bowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "House Umber Beserkers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "House Umber Great Axes", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "" },
        { name: "Stark outriders", cost: 7, attachment: "None", type: "Cavalry", unique: false, imgFile: "" },
        { name: "House Tully Cavaliers", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "" },
    ]
   }
  ]

  export default combatUnits;