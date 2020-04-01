const attachments = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Bolton Flayer", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None", neutral: true },
        { name: "Stormcrow Lieutenant", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None", neutral: true },
        { name: "Dreadfort Captain", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None", neutral: true },
        { name: "Brienne", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
        { name: "Bronn", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
        { name: "Daario Naharis", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
        { name: "Jaqen H'ghar", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
        { name: "Roose Bolton", cost: 2, type: "Infantry", unique: true , imgFile: "", attachment2: "None", neutral: true },
        { name: "Ramsay Snow", cost: 3, type: "Infantry", unique: true, imgFile: "", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: ""}, neutral: true },
        { name: "Vargo Hoat", cost: 3, type: "Infantry", unique: true, imgFile: "", attachment2: "None", neutral: true },
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Preston Greenfield", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20112f.jpg", attachment2: "None" },
       { name: "Meryn Trant", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20109f.jpg", attachment2: "None" },
       { name: "Arys Oakheart", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20110f.jpg", attachment2: "None" },
       { name: "Champion of Faith", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/20113f.jpg", attachment2: "None" },
       { name: "Guard Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/20102f.jpg", attachment2: "None" },
       { name: "Assault Veteran", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/20101f.jpg", attachment2: "None" },
       { name: "Boros Blount", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20111f.jpg", attachment2: "None" },
       { name: "Jamie Lannister", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Lannister/20117f.jpg", attachment2: "None" },
       { name: "Mandon Moore", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20108f.jpg", attachment2: "None" },
       { name: "Sandor Clegane", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20103f.jpg", attachment2: "None" },
       { name: "Jamie Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20107f.jpg", attachment2: "None" },
       { name: "Tyrion Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20120f.jpg", attachment2: "None" },
       { name: "Barristan Selmy", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20106f.jpg", attachment2: "None" },
       { name: "Gregor Clegane", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/20114f.jpg", attachment2: "None" },
       { name: "Gregor Clegane", cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Lannister/20118f.jpg", attachment2: "None" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Warden", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Meera Reed", cost: 1, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Rickon Stark", cost: 1, type: "Infantry", unique: true, imgFile: "", attachment2: {name: "Osha", cost: 0, type: "Infantry", unique: true, imgFile: ""} },
        { name: "Sworn Sword Captain", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Umber Champion", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Bran Stark", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Brynden Tully", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Jojen Reed", cost: 2, type: "Infantry", unique: true , imgFile: "", attachment2: "None" },
        { name: "Syrio Forel", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Brynden Tully", cost: 3, type: "Cavalry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Greatjon Umber", cost: 3, type: "Infantry", unique: true , imgFile: "", attachment2: "None" },
        { name: "Maege Mormont", cost: 3, type: "Infantry", unique: true , imgFile: "", attachment2: "None" },
        { name: "Robb Stark", cost: 3, type: "Infantry", unique: true , imgFile: "", attachment2: "None" },
      ]
    },
  ]

  export default attachments;