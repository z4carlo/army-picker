const combatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "House Bolton Cutthroats", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-Cutthroats.png", neutral: true },
        { name: "Stormcrow Mercenaries", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-StormCrowMercenaries.png", neutral: true },
        { name: "Bloody Mummer Skirmishers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-MummerSkirmishers.png", neutral: true },
        { name: "Stormcrow Archers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-StormCrowArchers.png", neutral: true },
        { name: "House Bolton Bastard's Girls", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-BastardsGirls.png", neutral: true },
        { name: "House Bolton Blackguards", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-BlackGuards.png", neutral: true },
        { name: "Bloody Mummer Zorse Riders", cost: 7, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-ZorseRiders.png", neutral: true },
        { name: "House bolton Flayed Men", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Neutral/CombatUnit-Cards/NEUTRAL-CombatUnit-FlayedMen.png", neutral: true },
      ]
    },
    {
      type: 'group', name: 'Lannister', items: [
        { name: "Gregor Clegane", cost: 4, attachment: "None", type: "Cavalry", unique: true, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Gregor-Mounted.png" },
        { name: "Lannister Guardsmen", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-LannisterGuardsmen.png" },
        { name: "Poor Fellows", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-PoorFellows.png" },
        { name: "Mountains Men", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-MountainsMen.png" },
        { name: "Lannister Halberdiers", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Halberdiers.png" },
        { name: "Lannister Crossbowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Crossbowmen.png" },
        { name: "Pyromancers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Pyromancers.png" },
        { name: "The Warrior's Sons", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-WarriorSons.png" },
        { name: "Knights of Castely Rock", cost: 8, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-KOCR.png" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Trackers", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Crannogman-Trackers.png" },
        { name: "Stark Sworn Swords", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-SwornSwords.png" },
        { name: "House Tully Sworn Sheild", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-TullyShields.png" },
        { name: "Stark Bowmen", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Bowmen.png" },
        { name: "House Umber Beserkers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Beserkers.png" },
        { name: "House Umber Greataxes", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-GreatAxes.png" },
        { name: "Stark outriders", cost: 7, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Outriders.png" },
        { name: "House Tully Cavaliers", cost: 9, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Tully-Cavaliers.png" },
    ]
   },
   {
    type: 'group', name: 'Nights Watch', items: [
      { name: "Conscripts", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Conscripts.png" },
      { name: "Builder Crossbowmen", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Xbow.png" },
      { name: "Sworn Brothers", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-SwornBrothers.png" },
      { name: "Ranger Hunters", cost: 8, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-RangerHunters.png" },
      { name: "Veterans of the Watch", cost: 7, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Veterans.png" },
      { name: "Ranger Trackers", cost: 6, attachment: "None", type: "Cavalry", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-RangerTrackers.png" },
      { name: "Builder Scorpion Crew", cost: 7, attachment: "None", type: "War Machine", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Builder-ScorpionCrew.png" },
      { name: "Builder Stone Throwers", cost: 10, attachment: "None", type: "War Machine", unique: false, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Builder-StoneThrower.png" }, 
    ]
    },
    {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Free Folk Raiders", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Crannogman-Trackers.png" },
        { name: "Free Folk Trappers", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-SwornSwords.png" },
        { name: "Spearwives", cost: 4, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-TullyShields.png" },
        { name: "Cave Dweller Savages", cost: 5, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Bowmen.png" },
        { name: "Followers of Bone", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Beserkers.png" },
        { name: "Thenn Warriors", cost: 6, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Outriders.png" },
        { name: "Savage Giant", cost: 7, attachment: "None", type: "Monster", unique: false, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Outriders.png" },
        { name: "Bonelords Chosen", cost: 10, attachment: { name: "Rattleshirt", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" }, type: "Infantry", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Beserkers.png" },   
        ]
      },
  ]

  export default combatUnits;