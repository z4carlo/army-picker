const attachments = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Bolton Flayer", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-BoltonFlayer.png", attachment2: "None", neutral: true },
        { name: "Stormcrow Lieutenant", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-StormCrowLieutenant.png", attachment2: "None", neutral: true },
        { name: "Dreadfort Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-DreadfortCaptain.png", attachment2: "None", neutral: true },
        { name: "Brienne", subName: "Maiden of Tarth", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Brienne.png", attachment2: "None", neutral: true },
        { name: "Bronn", subName: "The Sellsword", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Bronn.png", attachment2: "None", neutral: true },
        { name: "Daario Naharis", subName: "Reckless Mercenary", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Daario-A.png", attachment2: "None", neutral: true },
        { name: "Jaqen H'ghar", subName: "Unnamed", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-JAQEN-A.png", attachment2: "None", neutral: true },
        { name: "Roose Bolton", subName: "The Leech Lord", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-ROOSE-A.png", attachment2: "None", neutral: true },
        { name: "Ramsay Snow",  subName: "Sadist", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Ramsay-A.png", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Reek.png"}, neutral: true },
        { name: "Vargo Hoat",  subName: "The Crippler", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-VargoHoat-A.png", attachment2: "None", neutral: true },
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Preston Greenfield", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-PrestonGreenfield.png", attachment2: "None" },
       { name: "Meryn Trant", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-MerynTrant.png", attachment2: "None" },
       { name: "Arys Oakheart", subName: "Kingsguard", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-ArysOakheart.png", attachment2: "None" },
       { name: "Champion of Faith", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-ChampionFaith.png", attachment2: "None" },
       { name: "Guard Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-GuardCaptain.png", attachment2: "None" },
       { name: "Assault Veteran", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-AssaultVet.png", attachment2: "None" },
       { name: "Boros Blount", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-BorosBlount.png", attachment2: "None" },
       { name: "Jaime Lannister", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Lannister/Attachment-Cards/LAN-JaimeLannister-KG.png", attachment2: "None" },
       { name: "Mandon Moore", subName: "Kingsguard", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-MandonMoore.png", attachment2: "None" },
       { name: "Sandor Clegane", subName: "The Hound", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-SandorClegane.png", attachment2: "None" },
       { name: "Jaime Lannister", subName: "The Young Lion", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-JaimeLannister-TYL.png", attachment2: "None" },
       { name: "Tyrion Lannister",  subName: "The Giant of Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-TyrionLannister.png", attachment2: "None" },
       { name: "Barristan Selmy", subName: "Kingsguard", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-BarristanSelmy.png", attachment2: "None" },
       { name: "Gregor Clegane", subName: "Lord Tywin's Mad Dog", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-GregorClegane.png", attachment2: "None" },
       { name: "Gregor Clegane",  subName: "Mounted Behemoth", KS: true, cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-Gregor-Mounted.png", attachment2: "None" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Warden", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-CrannogmanWarden-A.png", attachment2: "None" },
        { name: "Meera Reed", subName: "Cunning Trapper", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-MeeraReed-A.png", attachment2: "None" },
        { name: "Rickon Stark", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-Rickon-A.png", attachment2: {name: "Osha", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-Osha-A.png"} },
        { name: "Sworn Sword Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
        { name: "Umber Champion", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-UmberChampion.png", attachment2: "None" },
        { name: "Bran and Hodor", subName: "Protector and Ward", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BranHodor-A.png", attachment2: "None" },
        { name: "Brynden Tully", subName: "Unyeilding Knight", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BryndenTully-A.png", attachment2: "None" },
        { name: "Jojen Reed", subName: "Greensight", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-JojenReed-A.png", attachment2: "None" },
        { name: "Syrio Forel", subName: "First Blade of Bravos", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SyrioForel-A.png", attachment2: "None" },
        { name: "Brynden Tully", subName: "Vanguard Infiltrator", cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BryndenTully-Mounted-A.png", attachment2: "None" },
        { name: "Greatjon Umber", subName: "Fierce Bannerman", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-Greatjon-A.png", attachment2: "None" },
        { name: "Maege Mormont", subName: "The She-Bear", KS: true, cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-MaegeMormont-A.png", attachment2: "None" },
        { name: "Robb Stark", subName: "The Young Wolf", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-RobbStark-A.png", attachment2: "None" },
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
        { name: "Cave Dweller Alpha", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/CaveDwellerAlpha-A.png", attachment2: "None" },
        { name: "Champion of Bone", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/BoneChampion-A.png", attachment2: "None" },
        { name: "Chosen of Styr", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/Chosen-A.png", attachment2: "None" },
        { name: "Harma", subName: "The Dogshead", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Harma-A.png", attachment2: {name: "Harma's Bannerman", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Bannerman-A.png"} },
        { name: "Jarl", subName: "Advance Raid Leader", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Jarl-A.png", attachment2: "None" },
        { name: "Raid Leader", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/RaidLeader-A.png", attachment2: "None" },
        { name: "Skinchanger", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/SkinChanger-A.png", attachment2: "None" },
        { name: "Spearwife Matriarch", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/Attachment-Cards/Matriarch-A.png", attachment2: "None" },
        { name: "Rattleshirt", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Rattleshirt-A.png", attachment2: "None" },
        { name: "The Weeper", subName: "Cruel Tyrant", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Weeper-A.png", attachment2: "None" },
        { name: "Tormund Giantsbane", subName: "Tall-Talker, Horn-Blower, Breaker of Ice", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Tormund-A.png", attachment2: "None" },
        { name: "Ygritte", subName: "Spearwife Archer", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/FreeFolk/Attachment-Cards/Ygritte-A.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Baratheon', items: [
        { name: "Brienne", subName: "The Blue", Loyalty: "Renly Baratheon", cost: 0, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Master Warden", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Red Priestess", Loyalty: "Stannis Baratheon", cost: 1, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
        { name: "Andrew Estermont", subName: "True Loyalist", Loyalty: "Stannis", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Cortnay Penrose", subName: "Reliable Castellan", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Davos Seaworth", subName: "Onion Knight", Loyalty: "Stannis Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Devan Seaworth", subName: "King's Squire", Loyalty: "Stannis Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Loras Tyrell", subName: "King's Squire", Loyalty: "Renly Baratheon", cost: 2, type: "Infantry", unique: true, imgFile: "", attachment2: "None" },
        { name: "Stag Knight Noble", cost: 2, type: "Infantry", unique: false, imgFile: "", attachment2: "None" },
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