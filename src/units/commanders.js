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
      { name: "Gregor Clegane", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Gregor-C.png", attachment2: "None" },
      { name: "Jamie Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Jamie-C.png", attachment2: "None" },
      { name: "Joffrey Baratheon", cost: 6, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Joffrey-C.png", attachment2: "None" },
      { name: "The High Sparrow", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-TheHighSparrow-C.png" },
      { name: "Tyrion Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tyrion-C.png", attachment2: "None" },
      { name: "Tywin Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tywin-C.png", attachment2: "None" }
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
      { name: "Brynden Tully", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-C.png", attachment2: "None" },
      { name: "Howland Reed", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-HowlandReed.png" },
      { name: "Eddard Stark", cost: 7, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-Eddard-C.png", attachment2: "None" },
      { name: "Greatjon Umber", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-GREATJON-C.png", attachment2: "None" },
      { name: "Robb Stark", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ROBB-C.png", attachment2: "None" },
      { name: "Rodrik Cassel", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-RodrikCassel-C.png", attachment2: "None" },
      { name: "Brynden Tully", cost: 0, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-Mounted-C.png", attachment2: "None" },
      ]
    },
  ]

  export default commanders;