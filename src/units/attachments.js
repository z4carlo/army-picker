const attachments = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Bolton Flayer", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/20408f.jpg", attachment2: "None", neutral: true },
        { name: "Stormcrow Lieutenant", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/20414f.jpg", attachment2: "None", neutral: true },
        { name: "Dreadfort Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/20401f.jpg", attachment2: "None", neutral: true },
        { name: "Brienne", subName: "Maiden of Tarth", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20406f.jpg", attachment2: "None", neutral: true },
        { name: "Bronn", subName: "The Sellsword", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20407f.jpg", attachment2: "None", neutral: true },
        { name: "Daario Naharis", subName: "Reckless Mercenary", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20412f.jpg", attachment2: "None", neutral: true },
        { name: "Jaqen H'ghar", subName: "Unnamed", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20413f.jpg", attachment2: "None", neutral: true },
        { name: "Roose Bolton", subName: "The Leech Lord", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Neutral/Attachment-Cards/20405f.jpg", attachment2: "None", neutral: true },
        { name: "Ramsay Snow",  subName: "Sadist", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20403f.jpg", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20404f.jpg"}, neutral: true },
        { name: "Vargo Hoat",  subName: "The Crippler", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/20410f.jpg", attachment2: "None", neutral: true },
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Preston Greenfield", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20112f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20112b.jpg", thumb: "./Images/Lannister/Thumb/P-20112b.png", attachment2: "None" },
       { name: "Meryn Trant", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20109f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20109b.jpg", thumb: "./Images/Lannister/Thumb/P-20109b.png", attachment2: "None" },
       { name: "Arys Oakheart", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20110f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20110b.jpg", thumb: "./Images/Lannister/Thumb/P-20110b.png", attachment2: "None" },
       { name: "Champion of Faith", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/20113f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20113b.jpg", thumb: "./Images/Lannister/Thumb/P-20113b.png", attachment2: "None" },
       { name: "Guard Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/20102f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20102b.jpg", thumb: "./Images/Lannister/Thumb/P-20102b.png", attachment2: "None" },
       { name: "Assault Veteran", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/20101f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20101b.jpg", thumb: "./Images/Lannister/Thumb/P-20101b.png", attachment2: "None" },
       { name: "Boros Blount", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20111f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20111b.jpg", thumb: "./Images/Lannister/Thumb/P-20111b.png", attachment2: "None" },
       { name: "Jaime Lannister", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Lannister/Attachment-Cards/20107f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20107b.jpg", thumb: "./Images/Lannister/Thumb/P-20107b.png", attachment2: "None" },
       { name: "Mandon Moore", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20108f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20108b.jpg", thumb: "./Images/Lannister/Thumb/P-20108b.png", attachment2: "None" },
       { name: "Sandor Clegane", subName: "The Hound", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20103f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20103b.jpg", thumb: "./Images/Lannister/Thumb/P-20103b.png", attachment2: "None" },
       { name: "Jaime Lannister", subName: "The Young Lion", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20117f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20117b.jpg", thumb: "./Images/Lannister/Thumb/P-20117b.png", attachment2: "None" },
       { name: "Tyrion Lannister",  subName: "The Giant of Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20120f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20120b.jpg", thumb: "./Images/Lannister/Thumb/P-20120b.png", attachment2: "None" },
       { name: "Barristan Selmy", subName: "Kingsguard", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20106f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20106b.jpg", thumb: "./Images/Lannister/Thumb/P-20106b.png", attachment2: "None" },
       { name: "Gregor Clegane", subName: "Lord Tywin's Mad Dog", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20114f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20114b.jpg", thumb: "./Images/Lannister/Thumb/P-20114b.png", attachment2: "None" },
       { name: "Gregor Clegane",  subName: "Mounted Behemoth", KS: true, cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/20118f.jpg", imgFile2: "./Images/Lannister/Attachment-Cards/20118f.jpg", thumb: "./Images/Lannister/Thumb/P-20118b.png", attachment2: "None" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Warden", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/20212f.jpg.png", attachment2: "None" },
        { name: "Meera Reed", subName: "Cunning Trapper", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20216f.jpg", attachment2: "None" },
        { name: "Rickon Stark", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20219f.jpg", attachment2: {name: "Osha", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20220f.jpg"} },
        { name: "Sworn Sword Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/20204f.jpg", attachment2: "None" },
        { name: "Umber Champion", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/20203f.jpg", attachment2: "None" },
        { name: "Bran and Hodor", subName: "Protector and Ward", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20207f.jpg", attachment2: "None" },
        { name: "Brynden Tully", subName: "Unyeilding Knight", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20209f.jpg", attachment2: "None" },
        { name: "Jojen Reed", subName: "Greensight", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/20217f.jpg", attachment2: "None" },
        { name: "Syrio Forel", subName: "First Blade of Bravos", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20218f.jpg", attachment2: "None" },
        { name: "Brynden Tully", subName: "Vanguard Infiltrator", cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/20214f.jpg", attachment2: "None" },
        { name: "Greatjon Umber", subName: "Fierce Bannerman", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/20205f.jpg", attachment2: "None" },
        { name: "Maege Mormont", subName: "The She-Bear", KS: true, cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/20213f.jpg", attachment2: "None" },
        { name: "Robb Stark", subName: "The Young Wolf", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/20206f.jpg", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Othell Yarwyck", subName: "Warmachine Specialist", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Yarwyck-A.png", attachment2: "None" },
        { name: "Watch Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-WatchCaptain.png", attachment2: "None" },
        { name: "Watch Recruiter", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-WatchRecruiter.png", attachment2: "None" },
        { name: "Alliser Thorne", subName: "Vindictive Overseer", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Thorne-A.png", attachment2: "None" },
        { name: "Grenn", subName: "Aurochs", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Grenn-A.png", attachment2: "None" },
        { name: "Pypar", subName: "Monkey", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Pypar-A.png", attachment2: "None" },
        { name: "Qhorin Halfhand", subName: "Grizzled Ranger", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Qhorin-A.png", attachment2: "None" },
        { name: "Jon Snow", subName: "Lord Snow", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Snow-A.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Free Folk', items: [
        { name: "Cave Dweller Alpha", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20305f.jpg", attachment2: "None" },
        { name: "Champion of Bone", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20314f.jpg", attachment2: "None" },
        { name: "Chosen of Styr", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20310f.jpg", attachment2: "None" },
        { name: "Harma", subName: "The Dogshead", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20318f.jpg", attachment2: {name: "Harma's Bannerman", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20319f.jpg"} },
        { name: "Jarl", subName: "Advance Raid Leader", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20323f.jpg", attachment2: "None" },
        { name: "Raid Leader", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20304f.jpg", attachment2: "None" },
        { name: "Skinchanger", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20307f.jpg", attachment2: "None" },
        { name: "Spearwife Matriarch", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/20306f.jpg", attachment2: "None" },
        { name: "Rattleshirt", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20316f.jpg", attachment2: "None" },
        { name: "The Weeper", subName: "Cruel Tyrant", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20321f.jpg", attachment2: "None" },
        { name: "Tormund Giantsbane", subName: "Tall-Talker, Horn-Blower, Breaker of Ice", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20302f.jpg", attachment2: "None" },
        { name: "Ygritte", subName: "Spearwife Archer", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/20322f.jpg", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Baratheon', items: [
        { name: "Brienne", subName: "The Blue", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20614f.jpg", attachment2: "None" },
        { name: "Master Warden", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Baratheon/Attachment-Cards/20604f.jpg", attachment2: "None" },
        { name: "Red Priestess", Loyalty: "Stannis Baratheon", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Andrew Estermont", subName: "True Loyalist", Loyalty: "Stannis Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20609f.jpg", attachment2: "None" },
        { name: "Cortnay Penrose", subName: "Reliable Castellan", Loyalty: "Renly Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20616f.jpg", attachment2: "None" },
        { name: "Davos Seaworth", subName: "Onion Knight", Loyalty: "Stannis Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20608f.jpg", attachment2: "None" },
        { name: "Devan Seaworth", subName: "King's Squire", Loyalty: "Stannis Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20606f.jpg", attachment2: "None" },
        { name: "Loras Tyrell", subName: "King's Squire", Loyalty: "Renly Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Baratheon/Attachment-Cards/20613f.jpg", attachment2: "None" },
        { name: "Stag Knight Noble", cost: 2, type: "Infantry", unique: false, imgFile: "./Images/Baratheon/Attachment-Cards/20603f.jpg", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Targaryen', items: [
        { name: "Jorah Mormont", subName: "The Andal", cost: 1, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Jorah Mormont", subName: "Penitent Betrayer", cost: 1, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Outrider Ko", cost: 1, type: "Cavalry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Screamer Ko", cost: 1, type: "Cavalry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Jorah Mormont", subName: "The Exiled Knight", cost: 2, type: "Cavalry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Belwas", subName: "Veteran Pit-Fighter", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Grey Worm", subName: "Freed By The Dragon", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Unsullied Officer", cost: 3, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
      ]
    },
  ]

  export default attachments;