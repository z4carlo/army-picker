const commanders = [
    {
      type: 'group', name: 'Neutral', items: [
      { name: "Ramsay Snow", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-RAMSAY-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-RAMSAY.png", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Reek.png"}, neutral: true },
      { name: "Roose Bolton", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-ROOSE-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-ROOSE.png", attachment2: "None", neutral: true },
      { name: "Vargo Hoat", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-VARGO-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-VARGO.png", attachment2: "None", neutral: true },
      { name: "Daario Naharis", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-DAARIO-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-DAARIO.png", attachment2: "None", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
      { name: "Gregor Clegane", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Gregor-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-THEMTN.png", attachment2: "None" },
      { name: "Jaime Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Jaime-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-JAMIE-SLAYER.png", attachment2: "None" },
      { name: "Joffrey Baratheon", cost: 6, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Joffrey-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-JOFFREY.png", attachment2: "None" },
      { name: "The High Sparrow", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-TheHighSparrow-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-SPARROW.png"},
      { name: "Tyrion Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tyrion-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-TYRION.png", attachment2: "None" },
      { name: "Tywin Lannister", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tywin-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-TYWIN.png", attachment2: "None" }
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
      { name: "Brynden Tully", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-TULLY.png", attachment2: "None" },
      { name: "Howland Reed", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-HowlandReed.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-HOWLAND-REED.png" },
      { name: "Eddard Stark", cost: 7, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-Eddard-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-EDDARD.png", attachment2: "None" },
      { name: "Greatjon Umber", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-GREATJON-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-GREATJON.png", attachment2: "None" },
      { name: "Robb Stark", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ROBB-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-ROBB.png", attachment2: "None" },
      { name: "Rodrik Cassel", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-RodrikCassel-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-RODRIK.png", attachment2: "None" },
      { name: "Brynden Tully", cost: 0, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-Mounted-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-TULLY.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Nights Watch', items: [
      { name: "Alliser Thorne", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Thorne-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-THORNE.png", attachment2: "None" },
      { name: "Othell Yarwyck", cost: 0, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Yarwyck-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-YARWYCK.png" },
      { name: "Donal Noye", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Noye-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-NOYE.png", attachment2: "None" },
      { name: "Jeor Mormont", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Jeor-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-JEOR.png", attachment2: "None" },
      { name: "Jon Snow", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Snow-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-JON.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Free Folk', items: [
      { name: "Harma", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-TULLY.png", attachment2: "None" },
      { name: "Mance Rayder", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-HowlandReed.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-HOWLAND-REED.png" },
      { name: "Rattleshirt", cost: 8, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-Eddard-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-EDDARD.png", attachment2: "None" },
      { name: "Styr", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ATCH-C-GREATJON.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-GREATJON.png", attachment2: "None" },
      { name: "The Weeper", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ROBB-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-ROBB.png", attachment2: "None" },
      { name: "Tormund Giantsbane", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ROBB-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-ROBB.png", attachment2: "None" },
      ]
    },
  ]

  export default commanders;