const combatUnits = [
  {
    type: 'group', name: 'Neutral', items: [
      { name: "House Bolton Cutthroats", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10401f.jpg", neutral: true },
      { name: "Stormcrow Mercenaries", cost: 5, adaptive: true, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10406f.jpg", neutral: true },
      { name: "Bloody Mummer Skirmishers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10405f.jpg", neutral: true },
      { name: "Stormcrow Archers", cost: 6, adaptive: true, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10407f.jpg", neutral: true },
      { name: "House Bolton Bastard's Girls", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10402f.jpg", neutral: true },
      { name: "House Bolton Blackguards", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10404f.jpg", neutral: true },
      { name: "Bloody Mummer Zorse Riders", cost: 7, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10408f.jpg", neutral: true },
      { name: "House bolton Flayed Men", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/10403f.jpg", neutral: true },
    ]
  },
  {
    type: 'group', name: 'Lannister', items: [
      { name: "Gregor Clegane", KS: true, cost: 4, attachment: "None", type: "Solo", unique: true, imgFile: "./Images/Lannister/CombatUnit-Cards/10107f.jpg", thumb: "./Images/Lannister/Thumb/P-10107b.png" },
      { name: "Lannister Guardsmen", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10101f.jpg" },
      { name: "Poor Fellows", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10109f.jpg", thumb: "./Images/Lannister/Thumb/P-10109b.png" },
      { name: "Kingsguard", cost: 6, attachment: "None", type: "Infantry", unique: true, imgFile: "./Images/Lannister/CombatUnit-Cards/10110f.jpg", thumb: "./Images/Lannister/Thumb/P-10110b.png"},
      { name: "Mountains Men", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10103f.jpg" },
      { name: "Lannister Halberdiers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10102f.jpg" },
      { name: "Lannister Crossbowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10106f.jpg", thumb: "./Images/Lannister/Thumb/P-10106b.png" },
      { name: "Pyromancers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10104f.jpg", thumb: "./Images/Lannister/Thumb/P-10104b.png" },
      { name: "The Warrior's Sons", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10108f.jpg", thumb: "./Images/Lannister/Thumb/P-10108b.png" },
      { name: "Knights of Castely Rock", cost: 8, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/10105f.jpg", thumb: "./Images/Lannister/Thumb/P-10105b.png" },
    ]
  },
  {
    type: 'group', name: 'Stark', items: [
      { name: "Crannogman Trackers", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10209f.jpg" },
      { name: "Stark Sworn Swords", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10201f.jpg" },
      { name: "House Tully Sworn Sheild", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10206f.jpg" },
      { name: "Stark Bowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10205f.jpg" },
      { name: "House Umber Beserkers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10203f.jpg" },
      { name: "House Umber Greataxes", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10208f.jpg" },
      { name: "Eddard's Honor Guard", cost: 7, type: "Infantry", attachment: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/10212f.jpg"},
      { name: "Stark outriders", cost: 7, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10202f.jpg" },
      { name: "House Tully Cavaliers", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/10213f.jpg" },
    ]
  },
  {
    type: 'group', name: 'Nights Watch', items: [
      { name: "Conscripts", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10509f.jpg" },
      { name: "Builder Crossbowmen", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10508f.jpg" },
      { name: "Sworn Brothers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10502f.jpg" },
      { name: "Ranger Hunters", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10503f.jpg.png" },
      { name: "Veterans of the Watch", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10501f.jpg" },
      { name: "Ranger Trackers", cost: 6, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10505f.jpg" },
      { name: "Builder Scorpion Crew", cost: 7, attachment: "None", type: "War Machine", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10506f.jpg" },
      { name: "Builder Stone Throwers", cost: 10, attachment: "None", type: "War Machine", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10507f.jpg" }, 
    ]
  },
  {
    type: 'group', name: 'FreeFolk', items: [
      { name: "Free Folk Raiders", cost: 3, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10303f.jpg" },
      { name: "Free Folk Trappers", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10302f.jpg" },
      { name: "Spearwives", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10304f.jpg" },
      { name: "Cave Dweller Savages", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10305f.jpg" },
      { name: "Followers of Bone", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10307f.jpg" },
      { name: "Thenn Warriors", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10308f.jpg" },
      { name: "Savage Giant", cost: 7, attachment: "None", type: "Solo", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10301f.jpg" },
      // { name: "Bonelords Chosen", cost: 10, attachment: { name: "Rattleshirt", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Rattleshirt-A.png", attachment2: "None" }, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10311f.jpg" },   
    ]
  },
  {
    type: 'group', name: 'Baratheon', items: [
      { name: "Baratheon Wardens", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Baratheon/CombatUnit-Cards/10602f.jpg" },
      { name: "Baratheon Sentinels", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Baratheon/CombatUnit-Cards/10603f.jpg" },
      { name: "Rose Knights", Loyalty: "Renly Baratheon", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Baratheon/CombatUnit-Cards/" },
      { name: "R'hllor Faithful", Loyalty: "Stannis Baratheon", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Baratheon/CombatUnit-Cards/" },
      { name: "Stag Knights", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Baratheon/CombatUnit-Cards/10601f.jpg" },
    ]
  },
  {
    type: 'group', name: 'Targaryen', items: [
      { name: "Jorah Mormont", cost: 3, attachment: "None", type: "Solo", unique: true, imgFile: "./Images/Targaryen/CombatUnit-Cards/10704f.jpg" },
      { name: "Dothraki Outriders", cost: 6, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Targaryen/CombatUnit-Cards/10702f.jpg" },
      { name: "Dothraki Screamers", cost: 6, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Targaryen/CombatUnit-Cards/10701f.jpg" },
      { name: "Unsullied Swordmasters", cost: 9, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Targaryen/CombatUnit-Cards/10705f.jpg" }, 
      { name: "Dothraki Veterans", cost: 10, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Targaryen/CombatUnit-Cards/10703f.jpg" },
    ]
  },
]

  export default combatUnits;