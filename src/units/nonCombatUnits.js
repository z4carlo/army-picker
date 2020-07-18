const nonCombatUnits = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Lord Varys", subName: "The Spider", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/30403f.jpg", neutral: true },
        { name: "Petyr Baelish", subName: "Littlefinger", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/30402f.jpg", neutral: true },
        { name: "Tycho Nestoris", subName: "Iron Banker", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/30406f.jpg", neutral: true },
        { name: "Jaqen H'ghar", subName: "Follower of The Red God", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/30405f.jpg", neutral: true },
        { name: "Walder Frey", subName: "Lord of The Crossing", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Neutral/NCU/30407f.jpg", neutral: true }
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Pycelle", subName: "Grand Maester", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/30102f.jpg", thumb: "./Images/Lannister/Thumb/P-30102b.png" },
       { name: "Cersei Lannister", subName: "Queen Regent", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/30105f.jpg", thumb: "./Images/Lannister/Thumb/P-30105b.png" },
       { name: "Joffrey Baratheon", subName: "Lord of The Seven Kingdoms", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/30106f.jpg", thumb: "./Images/Lannister/Thumb/P-30106b.png" },
       { name: "Tyrion Lannister", subName: "The Imp", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/30104f.jpg", thumb: "./Images/Lannister/Thumb/P-30104b.png" },
       { name: "Tywin Lannister", subName: "The Great Lion", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Lannister/NCU-Cards/30101f.jpg", thumb: "./Images/Lannister/Thumb/P-30101b.png" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Arya Stark", subName: "The Wolf Girl", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/30206f.jpg" },
        { name: "Sansa Stark", subName: "Little Bird", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/30202f.jpg" },
        { name: "Catelyn Stark", subName: "Lady of Winterfell", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/30201f.jpg" },
        { name: "Eddard Stark", subName: "Warden of the North", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/30204f.jpg" },
        { name: "Rodrik Cassel", subName: "Combat Veteran", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Stark/NCU-Cards/30205f.jpg" },
      ]
     },
     {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Craster", subName: "Ally of Convenience", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30303f.jpg" },
        { name: "Aemon", subName: "Maester of Castle Black", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Aemon.png" },
        { name: "Bowen Marsh", subName: "First Steward", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Marsh.png" },
        { name: "Donal Noye", subName: "Expert Blacksmith", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Noye.png" },
        { name: "Jeor Mormont", subName: "The Old Bear", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-Jeor.png" },
        { name: "Qhorin Halfhand", subName: "Unwavering Ranger", cost: 4, type: "NCU", unique: true, imgFile: "./Images/NightsWatch/NCU/NW-NCU-HalfHand.png" },
      ]
     },
     {
      type: 'group', name: 'Free Folk', items: [
        { name: "Craster", subName: "Ally of Convenience", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30303f.jpg" },
        { name: "Lady Val", subName: "The Wildling Princess", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30301f.jpg" },
        { name: "Ygritte", subName: "Kissed by Fire", cost: 3, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30305f.jpg" },
        { name: "Mance Rayder", subName: "Artful Tactician", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30302f.jpg" },
        { name: "Styr", subName: "Iron-Fisted Tyrant", cost: 4, type: "NCU", unique: true, imgFile: "./Images/FreeFolk/NCU/30304f.jpg" },
      ]
     },
     {
      type: 'group', name: 'Baratheon', items: [
        { name: "Axell Florent", subName: "Hand of the Queen", Loyalty: "Stannis Baratheon", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30606f.jpg" },
        { name: "Eldon Estermont", subName: "Lord of Greenstone", Loyalty: "Renly Baratheon", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30610f.jpg" },
        { name: "Shyra Errol", subName: "Lady of Haystack Hall", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30602f.jpg" },
        { name: "Alester Florent", subName: "Lord of Blightwater", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30601f.jpg" },
        { name: "Davos Seaworth", subName: "Hand of The True King", Loyalty: "Stannis Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30604f.jpg" },
        { name: "Margaery Tyrell", subName: "Little Rose", Loyalty: "Renly Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30608f.jpg" },
        { name: "Selyse and Shireen", subName: "Queen and Princess", Loyalty: "Stannis Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30605f.jpg" },
        { name: "Melisandre", subName: "The Red Woman", Loyalty: "Stannis Baratheon", cost: 5, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30603f.jpg" },
        { name: "Olenna Tyrell", subName: "Queen of Thorns", Loyalty: "Renly Baratheon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Baratheon/NCU/30609f.jpg" },
      ]
     },
     {
      type: 'group', name: 'Targaryen', items: [
        { name: "Illyrio Mopatis", subName: "Magister of Pentos", cost: 3, type: "NCU", unique: true, imgFile: "./Images/Targaryen/NCU/30702f.jpg" },
        { name: "Barristan Selmy", subName: "Advisor To The Dragon", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Targaryen/NCU/30704f.jpg" },
        { name: "Daenerys Targaryen", subName: "Khaleesi", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Targaryen/NCU/30701f.jpg" },
        { name: "Pyat Pree", subName: "Warlock of Qarth", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Targaryen/NCU/30703f.jpg" },
        { name: "Xaro Xhoan Daxos", subName: "Merchant Prince of Qarth", cost: 4, type: "NCU", unique: true, imgFile: "./Images/Targaryen/NCU/30705f.jpg" },
      ]
     },
  ]

  export default nonCombatUnits;