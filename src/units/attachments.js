const attachments = [
    {
      type: 'group', name: 'Neutral', items: [
        { name: "Bolton Flayer", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-BoltonFlayer.png", attachment2: "None", neutral: true },
        { name: "Stormcrow Lieutenant", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-StormCrowLieutenant.png", attachment2: "None", neutral: true },
        { name: "Dreadfort Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-DreadfortCaptain.png", attachment2: "None", neutral: true },
        { name: "Brienne", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Brienne.png", attachment2: "None", neutral: true },
        { name: "Bronn", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Bronn.png", attachment2: "None", neutral: true },
        { name: "Daario Naharis", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Daario-A.png", attachment2: "None", neutral: true },
        { name: "Jaqen H'ghar", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-JAQEN-A.png", attachment2: "None", neutral: true },
        { name: "Roose Bolton", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-ROOSE-A.png", attachment2: "None", neutral: true },
        { name: "Ramsay Snow", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Ramsay-A.png", attachment2: {name: "Reek", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-Reek.png"}, neutral: true },
        { name: "Vargo Hoat", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Neutral/Attachment-Cards/NEUTRAL-VargoHoat-A.png", attachment2: "None", neutral: true },
      ]
    },
    {
     type: 'group', name: 'Lannister', items: [
       { name: "Preston Greenfield", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-PrestonGreenfield.png", attachment2: "None" },
       { name: "Meryn Trant", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-MerynTrant.png", attachment2: "None" },
       { name: "Arys Oakheart", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-ArysOakheart.png", attachment2: "None" },
       { name: "Champion of Faith", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-ChampionFaith.png", attachment2: "None" },
       { name: "Guard Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-GuardCaptain.png", attachment2: "None" },
       { name: "Assault Veteran", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Lannister/Attachment-Cards/LAN-AssaultVet.png", attachment2: "None" },
       { name: "Boros Blount", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-BorosBlount.png", attachment2: "None" },
       { name: "Jaime Lannister", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Lannister/Attachment-Cards/LAN-JaimeLannister-KG.png", attachment2: "None" },
       { name: "Mandon Moore", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-MandonMoore.png", attachment2: "None" },
       { name: "Sandor Clegane", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-SandorClegane.png", attachment2: "None" },
       { name: "Jaime Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-JaimeLannister-TYL.png", attachment2: "None" },
       { name: "Tyrion Lannister", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-TyrionLannister.png", attachment2: "None" },
       { name: "Barristan Selmy", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-BarristanSelmy.png", attachment2: "None" },
       { name: "Gregor Clegane", cost: 3, type: "Infantry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-GregorClegane.png", attachment2: "None" },
       { name: "Gregor Clegane", cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Lannister/Attachment-Cards/LAN-Gregor-Mounted.png", attachment2: "None" },
     ]
    },
    {
      type: 'group', name: 'Stark', items: [
        { name: "Crannogman Warden", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-CrannogmanWarden-A.png", attachment2: "None" },
        { name: "Meera Reed", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-MeeraReed-A.png", attachment2: "None" },
        { name: "Rickon Stark", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-Rickon-A.png", attachment2: {name: "Osha", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-Osha-A.png"} },
        { name: "Sworn Sword Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
        { name: "Umber Champion", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-UmberChampion.png", attachment2: "None" },
        { name: "Bran Stark", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BranHodor-A.png", attachment2: "None" },
        { name: "Brynden Tully", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BryndenTully-A.png", attachment2: "None" },
        { name: "Jojen Reed", cost: 2, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-JojenReed-A.png", attachment2: "None" },
        { name: "Syrio Forel", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SyrioForel-A.png", attachment2: "None" },
        { name: "Brynden Tully", cost: 3, type: "Cavalry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-BryndenTully-Mounted-A.png", attachment2: "None" },
        { name: "Greatjon Umber", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-Greatjon-A.png", attachment2: "None" },
        { name: "Maege Mormont", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-MaegeMormont-A.png", attachment2: "None" },
        { name: "Robb Stark", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/Stark/Attachment-Cards/STARK-RobbStark-A.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Nights Watch', items: [
        { name: "Othell Yarwyck", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Yarwyck-A.png", attachment2: "None" },
        { name: "Watch Captain", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-WatchCaptain.png", attachment2: "None" },
        { name: "Watch Recruiter", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-WatchRecruiter.png", attachment2: "None" },
        { name: "Alliser Thorne", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Thorne-A.png", attachment2: "None" },
        { name: "Grenn", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Grenn-A.png", attachment2: "None" },
        { name: "Pypar", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Pypar-A.png", attachment2: "None" },
        { name: "Qhorin Halfhand", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Qhorin-A.png", attachment2: "None" },
        { name: "Jon Snow", cost: 3, type: "Infantry", unique: true , imgFile: "./Images/NightsWatch/Attachment-Cards/NW-Snow-A.png", attachment2: "None" },
      ]
    },
    {
      type: 'group', name: 'Free Folk', items: [
        { name: "Cave Dweller Alpha", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-CrannogmanWarden-A.png", attachment2: "None" },
        { name: "Champion of Bone", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-MeeraReed-A.png", attachment2: "None" },
        { name: "Chosen of Styr", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-Rickon-A.png", attachment2: "None" },
        { name: "Harma", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: {name: "Harma's Bannerman", cost: 0, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-Osha-A.png"} },
        { name: "Jarl", cost: 1, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-UmberChampion.png", attachment2: "None" },
        { name: "Raid Leader", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-BranHodor-A.png", attachment2: "None" },
        { name: "Skin Changer", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-BryndenTully-A.png", attachment2: "None" },
        { name: "Spearwife Matriarch", cost: 1, type: "Infantry", unique: false, imgFile: "./Images/Stark/Attachment-Cards/STARK-JojenReed-A.png", attachment2: "None" },
        { name: "Rattleshirt", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
        { name: "The Weeper", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
        { name: "Tormund Giantsbane", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
        { name: "Ygritte", cost: 2, type: "Infantry", unique: true, imgFile: "./Images/Stark/Attachment-Cards/STARK-SwordCaptain.png", attachment2: "None" },
      ]
    },
  ]

  export default attachments;