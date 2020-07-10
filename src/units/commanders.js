const commanders = [
  {
    type: 'group', name: 'Neutral', items: [
    { name: "Ramsay Snow", subName: "The Bastard of Bolton", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-RAMSAY-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-RAMSAY.png", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Reek.png"}, neutral: true },
    { name: "Roose Bolton", subName: "Lord of the Dreadfort", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-ROOSE-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-ROOSE.png", attachment2: "None", neutral: true },
    { name: "Vargo Hoat", subName: "The Goat of Harrenhal", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-VARGO-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-VARGO.png", attachment2: "None", neutral: true },
    { name: "Daario Naharis", subName: "Stormcrow Captain", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Commander-Cards/NEUTRAL-DAARIO-C.png", token: "./Images/Neutral/Tokens/ASOIAF-NEUTRAL-DAARIO.png", attachment2: "None", neutral: true }
    ]
  },
  {
    type: 'group', name: 'Lannister', items: [
    { name: "Gregor Clegane", subName: "The Mountain", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Gregor-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-THEMTN.png", attachment2: "None" },
    { name: "Jaime Lannister", subName: "The Kingslayer", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Jaime-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-JAMIE-SLAYER.png", attachment2: "None" },
    { name: "Joffrey Baratheon", subName: "First of His Name", cost: 6, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Joffrey-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-JOFFREY.png", attachment2: "None" },
    { name: "The High Sparrow", subName: "Father of the Faithful", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-TheHighSparrow-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-SPARROW.png"},
    { name: "Tyrion Lannister", subName: "Halfman", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tyrion-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-TYRION.png", attachment2: "None" },
    { name: "Tywin Lannister", subName: "Lord of Casterly Rock", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Commander-Cards/LAN-Tywin-C.png", token: "./Images/Lannister/Tokens/ASOIAF-LANNISTER-ATCH-C-TYWIN.png", attachment2: "None" }
    ]
  },
  {
    type: 'group', name: 'Stark', items: [
    { name: "Brynden Tully", subName: "The Blackfish", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-TULLY.png", attachment2: "None" },
    { name: "Howland Reed", subName: "Lord of the Crannogs", cost: 0, type: "NCU", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-HowlandReed.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-HOWLAND-REED.png" },
    { name: "Eddard Stark", subName: "Lord of Winterfell", cost: 7, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-Eddard-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-EDDARD.png", attachment2: "None" },
    { name: "Greatjon Umber", subName: "Lord of Last Hearth", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-GREATJON-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-GREATJON.png", attachment2: "None" },
    { name: "Robb Stark", subName: "The Wolf Lord", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-ROBB-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-ATCH-C-ROBB.png", attachment2: "None" },
    { name: "Rodrik Cassel", subName: "Master-at-Arms", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-RodrikCassel-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-RODRIK.png", attachment2: "None" },
    { name: "Brynden Tully", subName: "Outrider Commander", KS: true, cost: 0, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Commander-Cards/STARK-BryndenTully-Mounted-C.png", token: "./Images/Stark/Tokens/ASOIAF-STARK-C-TULLY.png", attachment2: "None" },
    ]
  },
  {
    type: 'group', name: 'Nights Watch', items: [
    { name: "Alliser Thorne", subName: "Master-at-Arms", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Thorne-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-THORNE.png", attachment2: "None" },
    { name: "Othell Yarwyck", subName: "First Builder", cost: 0, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Yarwyck-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-YARWYCK.png" },
    { name: "Donal Noye", subName: "Defender of Castle Black", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Noye-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-NOYE.png", attachment2: "None" },
    { name: "Jeor Mormont", subName: "997th Lord Commander", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Jeor-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-JEOR.png", attachment2: "None" },
    { name: "Jon Snow", subName: "998th Lord Commander", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Commander-Cards/NW-Snow-C.png", token: "./Images/NightsWatch/Tokens/ASOIAF-NW-JON.png", attachment2: "None" },
    ]
  },
  {
    type: 'group', name: 'Free Folk', items: [
    { name: "Harma", subName: "Vanguard Commander", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Harma-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-HARMA.png", attachment2: {name: "Harma's Bannerman", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Bannerman-A.png"} },
    { name: "Mance Rayder", subName: "King Beyond the Wall", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Mance-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-C-RAYDER.png", attachment2: "None" },
    { name: "Rattleshirt", subName: "The Lord of Bones", cost: 8, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Rattle-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-RATTLESHIRT.png", attachment2: "None" },
    { name: "Styr", subName: "Magnar Of Thenn", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Styr-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-STYR.png", attachment2: "None" },
    { name: "The Weeper", subName: "Horrific Butcher", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Weeper-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-WEEPER.png", attachment2: "None" },
    { name: "Tormund Giantsbane", subName: "Thunderfist", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Commander-Cards/Tormund-C.png", token: "./Images/FreeFolk/Tokens/ASOIAF-FF-C-TORMUND.png", attachment2: "None" },
    ]
  },
  {
    type: 'group', name: 'Baratheon', items: [
    { name: "Andrew Estermont", subName: "First of The King's Men", Loyalty: "Stannis Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Axell Florent", subName: "First of the Queen's Men", Loyalty: "Stannis Baratheon", cost: 0, type: "NCU", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Cortnay Penrose", subName: "Castellan of Storm's End", Loyalty: "Renly Baratheon", cost: 0, type: "NCU", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Davos Seaworth", subName: "Hero of Blackwater", Loyalty: "Stannis Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Eldon Estermont", subName: "Lord of Greenstone", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Loras Tyrell", subName: "The Knight of Flowers", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Renly Baratheon", subName: "The Charismatic Heir", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Renly Baratheon", subName: "Lord Paramount of the Stormlands", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Stannis Baratheon", subName: "The Rightful Heir", Loyalty: "Stannis Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Stannis Baratheon", subName: "The One True King", Loyalty: "Stannis Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    ]
  },
  {
    type: 'group', name: 'Targaryen', items: [
    { name: "Barristan Selmy", subName: "Barristan The Bold", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None"},
    { name: "Belwas", subName: "The Strong", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Grey Worm", subName: "Unsullied Commander", cost: 0, type: "Infantry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Jorah Mormont", subName: "Westerosi Tactician", cost: 0, type: "Cavalry", unique: true, imgFile: "", token: "", attachment2: "None" },
    { name: "Khal Drogo", subName: "The Great Khal", cost: 0, type: "Cavalry", unique: true, imgFile: "", token: "", attachment2: "None" },
    ]
  },
]

  export default commanders;