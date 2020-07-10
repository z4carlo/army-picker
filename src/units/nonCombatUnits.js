const nonCombatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Lord Varys", subName: "The Spider", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Varys-NCU.png", neutral: true },
        { name: "Petyr Baelish", subName: "Littlefinger", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Baelish-NCU.png", neutral: true },
        { name: "Tycho Nestoris", subName: "Iron Banker", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Tycho-NCU.png", neutral: true },
        { name: "Jaqen H'ghar", subName: "Follower of The Red God", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-Jaqen-NCU.png", neutral: true },
        { name: "Walder Frey", subName: "Lord of The Crossing", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/NEUTRAL-WalderFrey-NCU.png", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Pycelle", subName: "Grand Maester", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Pycelle-NCU.png" },
       { name: "Cersei Lannister", subName: "Queen Regent", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Cersei-NCU.png" },
       { name: "Joffrey Baratheon", subName: "Lord of The Seven Kingdoms", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Joffrey-NCU.png" },
       { name: "Tyrion Lannister", subName: "The Imp", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Tyrion-NCU.png" },
       { name: "Tywin Lannister", subName: "The Great Lion", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/LAN-Tywin-NCU.png" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Arya Stark", subName: "The Wolf Girl", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Arya-NCU.png" },
        { name: "Sansa Stark", subName: "Little Bird", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Sansa.png" },
        { name: "Catelyn Stark", subName: "Lady of Winterfell", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-Catelyn.png" },
        { name: "Eddard Stark", subName: "Warden of the North", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-EddardStark-NCU.png" },
        { name: "Rodrik Cassel", subName: "Combat Veteran", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/Stark-RodrikCassel-NCU.png" },
      ]
     },
     {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Craster", subName: "Ally of Convenience", cost: 3, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-CRASTER.png" },
        { name: "Aemon", subName: "Maester of Castle Black", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Aemon.png" },
        { name: "Bowen Marsh", subName: "First Steward", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Marsh.png" },
        { name: "Donal Noye", subName: "Expert Blacksmith", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Noye.png" },
        { name: "Jeor Mormont", subName: "The Old Bear", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Jeor.png" },
        { name: "Qhorin Halfhand", subName: "Unwavering Ranger", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-HalfHand.png" },
      ]
     },
     {
      type: 'group', name: 'Free Folk', items: [
        { name: "Craster", subName: "Ally of Convenience", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Craster-NCU.png" },
        { name: "Lady Val", subName: "The Wildling Princess", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/VAL-NCU.png" },
        { name: "Ygritte", subName: "Kissed by Fire", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Ygritte-NCU.png" },
        { name: "Mance Rayder", subName: "Artful Tactician", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Mance-NCU.png" },
        { name: "Styr", subName: "Iron-Fisted Tyrant", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/Styr-NCU.png" },
      ]
     },
     {
      type: 'group', name: 'Baratheon', items: [
        { name: "Axell Florent", subName: "Hand of the Queen", Loyalty: "Stannis Baratheon", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Eldon Estermont", subName: "Lord of Greenstone", Loyalty: "Renly Baratheon", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Shyra Errol", subName: "Lady of Haystack Hall", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Alester Florent", subName: "Lord of Blightwater", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Davos Seaworth", subName: "Hand of The True King", Loyalty: "Stannis Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Margaery Tyrell", subName: "Little Rose", Loyalty: "Renly Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Selyse and Shireen", subName: "Queen and Princess", Loyalty: "Stannis Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Melisandre", subName: "The Red Woman", Loyalty: "Stannis Baratheon", cost: 5, type: "NCU", unique: true, imgFile: "" },
        { name: "Olenna Tyrell", subName: "Queen of Thorns", Loyalty: "Renly Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "" },
      ]
     },
     {
      type: 'group', name: 'Targaryen', items: [
        { name: "Illyrio Mopatis", subName: "Magister of Pentos", cost: 3, type: "NCU", unique: true, imgFile: "" },
        { name: "Barristan Selmy", subName: "Advisor To The Dragon", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Daenerys Targaryen", subName: "Khaleesi", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Pyat Pree", subName: "Warlock of Qarth", cost: 4, type: "NCU", unique: true, imgFile: "" },
        { name: "Xaro Xhoan Daxos", subName: "Merchant Prince of Qarth", cost: 4, type: "NCU", unique: true, imgFile: "" },
      ]
     },
  ]

  export default nonCombatUnits;