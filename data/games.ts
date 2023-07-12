export interface Games {
    id: number;
    title: string;
    info: string;
    img: string;
    price: number;
    type: string;
}

export const games = [
    {
        id: 1,
        title: "Grand Theft Auto V ",
        info: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.",
        img: "https://upload.wikimedia.org/wikipedia/ru/c/c8/GTAV_Official_Cover_Art.jpg",
        price: 21.99,
        type: "GAME",
    },
    {
        id: 2,
        title: "Marvel's Spider-Man",
        info: "Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create an authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in Marvel's New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.",
        img: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png",
        price: 19.99,
        type: "ACCOUNT",
    },
    {
        id: 3,
        title: "Assassin's Creed Odyssey",
        info: "Write your own epic odyssey and become a legendary Spartan hero in Assassin’s Creed® Odyssey, an inspiring adventure where you must forge your destiny and define your own path in a world on the brink of tearing itself apart. Influence how history unfolds as you experience a rich and ever-changing world shaped by your decisions.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/ACOdysseyCoverArt.png/220px-ACOdysseyCoverArt.png",
        price: 37.99,
        type: "GAME",
    },
    {
        id: 4,
        title: "Portal 2",
        info: "The 'Perpetual Testing Initiative' has been expanded to allow you to design co-op puzzles for you and your friends!",
        img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg",
        price: 6.99,
        type: "GAME",
    },
    {
        id: 5,
        title: "Cyberpunk 2077",
        info: "Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners — there are countless stories to discover in the deadly megalopolis of Night City.",
        img: "https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg",
        price: 49.99,
        type: "GAME",
    },
    {
        id: 6,
        title: "PUBG: BATTLEGROUNDS",
        info: "Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners — there are countless stories to discover in the deadly megalopolis of Night City.",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg/800px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg",
        price: 23.99,
        type: "KEY",
    },
    {
        id: 7,
        title: "Fortnite",
        info: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.",
        img: "https://pbs.twimg.com/media/FyKMd0PWYAEMgcS.jpg",
        price: 19.99,
        type: "ACCOUNT",
    },
    {
        id: 8,
        title: "Forza Horizon 5",
        info: "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Windows, Xbox One, and Xbox Series X/S.",
        img: "https://upload.wikimedia.org/wikipedia/ru/5/58/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Forza_Horizon_5.jpg",
        price: 39.99,
        type: "ACCOUNT",
    },
    {
        id: 9,
        title: "Counter Strike: GO",
        info: "Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for OS X, PlayStation 3, Windows, and Xbox 360 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions.",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799",
        price: 5.99,
        type: "KEY",
    },
];
