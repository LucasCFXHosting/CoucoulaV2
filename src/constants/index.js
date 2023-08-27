import { people01, people02, people03,  instagram,  twitter, discord, mikrotik, dell, fortinet, hpe, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "/home",
    title: "Accueil",
  },
  {
    id: "/vps/#Virtual",
    title: "VPS KVM",
  },
  {
    id: "/dedicated/#dedicated",
    title: "VPS FiveM",
  },
  {
    id: "/game/#game",
    title: "Cloud Panel",
  },
  {
    id: "/cloud/#cloud",
    title: "FiveM LifeTime",
  },
  //{
    //id: "/transit/#transit",
    //title: "IP Transit",
  //},
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Livraison rapide",
    content:
      "Démarrez avec votre serveur instantanément avec notre processus de provisioning rapide et fiable.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Securisé",
    content:
      "Nous privilégions la sécurité et utilisons des mesures avancées pour garantir la protection de vos données et la sécurité de vos transactions.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Accès Administrateur",
    content:
      "Profitez d’un contrôle sur votre environnement d’hébergement avec un accès administrateur complet.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const vpsProducts = [
  {
    id: "vps-1",
    name: "Adara",
    prename:"VPS Niveau 1",
    price: "3,99€/Mois",
    yearlyPrice: "44,99€/Annuel",
    link: "https://google.com",
    features: [
      "1vCore E5-2630 v4",
      "2 GB RAM",
      "20 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
  {
    id: "vps-3",
    name: "Bélénos",
    prename:"VPS Level 3",
    price: "6,99€/Mois",
    link: "https://google.com",
    yearlyPrice: "83,99€/An",
    description: "Linux",
    features: [
      "4vCore E5-2630 v4",
      "8 GB RAM",
      "40 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
  {
    id: "vps-4",
    name: "Dheneb",
    prename:"VPS Level 4",
    price: "13,99€/Mois",
    link: "https://google.com",
    yearlyPrice: "165,99€/An",
    description: "Linux",
    features: [
      "6vCore E5-2630 v4",
      "24 GB RAM",
      "60 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
  {
    id: "vps-5",
    name: "Gienah",
    prename:"VPS Level 5",
    price: "18,99€/Mois",
    link: "https://google.com",
    yearlyPrice: "$359,99/Yearly",
    description: "Linux/Windows",
    features: [
      "6vCore E5-2630 v4",
      "24 GB RAM",
      "75 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
  {
    id: "vps-4",
    name: "Okda",
    prename:"VPS Level 4",
    price: "24,99€/Mois",
    link: "https://google.com",
    yearlyPrice: "295,99€/An",
    description: "Linux",
    features: [
      "8vCore E5-2630 v4",
      "32 GB RAM",
      "90 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
  {
    id: "vps-4",
    name: "Sartan",
    prename:"VPS Level 4",
    price: "43,99€/Mois",
    link: "https://google.com",
    yearlyPrice: "528,99€/An",
    description: "Linux",
    features: [
      "12vCore E5-2630 v4",
      "52 GB RAM",
      "160 GB SSD NVMe",
      "1 IPv4 ",
      "Virtualisation KVM"
    ],
  },
];
 
export const DedicatedProducts = [
  {
    id: "Dedicated-1",
    name: "Adara",
    price: "9,99€/Mois",
    yearlyPrice: "115,99€ / An",
    description: "Linux",
    link: "https://google.com",
    features: [
      "2vCore E5-2630 v4",
      "4 GiB RAM",
      "25 GiB SSD NVMe",
      "1 IPv4 Address",
    ],
  },
  {
    id: "Dedicated-1",
    name: "Bélénos",
    price: "19,99€/Mois",
    yearlyPrice: "236,99€ / An",
    description: "Linux/Windows",
    link: "https://google.com",
    features: [
      "4vCore E5-2630 v4",
      "12 GiB RAM",
      "60 GiB SSD NVMe",
      "1 IPv4 Address",
    ],
  },
  {
    id: "Dedicated-4",
    name: "Dheneb",
    price: "29,99€/Mois",
    yearlyPrice: "354,99€ / An",
    description: "Linux/Windows",
    link: "https://google.com",
    features: [
      "8vCore E5-2630 v4",
      "24 GiB RAM",
      "100 GiB SSD NVMe",
      "1 IPv4 Address",
    ],
  },
  {
    id: "Dedicated-5",
    name: "Gienah",
    price: "39,99€/Mois",
    yearlyPrice: "417,99€ / An",
    description: "Linux/Windows",
    link: "https://google.com",
    features: [
      "12vCore E5-2630 v4",
      "32 GiB RAM",
      "160 GiB SSD NVMe",
      "1 IPv4 Address",
    ],
  },
];

export const VPStypeProducts = [
  {
    id: "VPST-LXC",
    name: "LXC",
    price: "$2,74/Monthly",
    yearlyPrice: "$30,24/Yearly",
    description: "VPS",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 1Core to 24Core",
      "RAM : 4GB to 144GB",
      "Storage : 25GB to 400GB",
    ],
  },
  {
    id: "VPS-KVM",
    name: "KVM",
    price: "$3,29/Monthly",
    link: "https://cloudfive.fr/gmod.html",
    yearlyPrice: "$36,19/Yearly",
    description: "VPS",
    features: [
      "Panel : Pterodactyl",
      "CPU : 1,5Core to 24Core",
      "RAM : 4GB to 144GB",
      "Storage : 40GB to 400GB",
    ],
  },
];
export const GameProducts = [
  {
    id: "Game-1",
    name: "NodeJS - Level 1",
    price: "1,99€/Mois",
    yearlyPrice: "21,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 1vCore",
      "RAM : 2 GiB RAM",
      "Stockage : 5 GiB SSD NVMe",
    ],
  },
  {
    id: "Game-2",
    name: "NodeJS - Level 2",
    price: "3,99€/Mois",
    yearlyPrice: "28,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 2vCore",
      "RAM : 6 GiB RAM",
      "Stockage : 15 GiB SSD NVMe",
    ],
  },
  {
    id: "Game-3",
    name: "NodeJS - Level 3",
    price: "6,99€/Mois",
    yearlyPrice: "81,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 6vCore",
      "RAM : 12 GiB RAM",
      "Stockage : 70 GiB SSD NVMe",
    ],
  },
  {
    id: "Game-3",
    name: "Python - Level 1",
    price: "1,99€/Mois",
    yearlyPrice: "21,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 1vCore",
      "RAM : 2 GiB RAM",
      "Stockage : 5 GiB SSD NVMe",
    ],
  },
  {
    id: "Game-2",
    name: "Python - Level 2",
    price: "3,99€/Mois",
    yearlyPrice: "28,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 2vCore",
      "RAM : 6 GiB RAM",
      "Stockage : 15 GiB SSD NVMe",
    ],
  },
  {
    id: "Game-3",
    name: "Python - Level 3",
    price: "6,99€/Mois",
    yearlyPrice: "81,99€ / An",
    description: "Web Panel",
    link: "https://cloudfive.fr/fivem.html",
    features: [
      "Panel : Pterodactyl",
      "CPU : 6vCore",
      "RAM : 12 GiB RAM",
      "Stockage : 70 GiB SSD NVMe",
    ],
  },
];
export const CloudProducts = [
  {
    id: "Cloud-1",
    name: "FiveM - Niveau 1",
    price: "€1,99 / Mois",
    link: "https://my.cfxhosting.net/store/fivem",
    features: [
      "Panel : Pterodactyl",
      "CPU : 1vCore",
      "RAM : 2GiB DDR4",
      "Stockage : 15 GiB SSD NVMe",
      "Clé Patreon : Incluse"
    ],
  },
  {
    id: "Cloud-1",
    name: "FiveM - Niveau 2",
    price: "€6,99 / Mois",
    link: "https://my.cfxhosting.net/store/fivem",
    features: [
      "Panel : Pterodactyl",
      "CPU : 2vCore",
      "RAM : 8GiB DDR4",
      "Stockage : 30 GiB SSD NVMe",
      "Clé Patreon : Incluse"
    ],
  },
  {
    id: "Cloud-1",
    name: "FiveM - Niveau 3",
    price: "€13,99 / Mois",
    link: "https://my.cfxhosting.net/store/fivem",
    features: [
      "Panel : Pterodactyl",
      "CPU : 4vCore",
      "RAM : 16GiB DDR4",
      "Stockage : 80 GiB SSD NVMe",
      "Clé Patreon : Incluse"
    ],
  },
  {
    id: "Cloud-1",
    name: "FiveM LifeTime - 1",
    price: "€17,99 / A Vie",
    link: "https://my.cfxhosting.net/store/fivem",
    features: [
      "Panel : Pterodactyl",
      "CPU : 2vCore",
      "RAM : 6GiB DDR4",
      "Stockage : 20 GiB SSD NVMe",
    ],
  },
   {
     id: "Cloud-2",
     name: "FiveM LifeTime - 2",
     price: "€28,99 / A Vie",
     link: "https://my.cfxhosting.net/store/fivem",
     features: [
       "Panel : Pterodactyl",
       "CPU : 6vCore",
       "RAM : 12GiB DDR4",
       "Stockage : 50 GiB SSD NVMe",
     ],
   },
   {
    id: "Cloud-2",
    name: "FiveM LifeTime - 3",
    price: "€75,99 / A Vie",
    link: "https://my.cfxhosting.net/store/fivem",
    features: [
      "Panel : Pterodactyl",
      "CPU : 12vCore",
      "RAM : 32GiB DDR4",
      "Stockage : 120 GiB SSD NVMe",
    ],
  },
];
export const ProductDemo = [
  {
    id: "Product-1",
    name: "Virtual Private Server",
    prename:"VPS",
    price: "Start at $8,45/Monthly",
    yearlyPrice: "Start at $84,49/Yearly",
    description: "Linux/Windows",
    link: "/vps/#Virtual",
    features: [
      "Virtual Server",
      "All kind of project",
      "Additional ipv4 $1,99",
      "Montreal, Canada or Paris,France",
    ],
  },
  {
    id: "Product-2",
    name: "Dedicated Server",
    prename:"Bare metal",
    price: "Start at $60,49/Monthly",
    link: "/dedicated/#dedicated",
    yearlyPrice: "Start at $554,99/Yearly",
    description: "Linux/Windows",
    features: [
      "Dedicated Evironment",
      "For big project",
      "Additional ipv4 $1,99",
      "Montreal, Canada or Paris,France",
    ],
  },
  {
    id: "Product-3",
    name: "Ip Tunnel",
    prename:"Transit IP",
    price: "Start at $17,99/Monthly",
    link: "/transit/#transit",
    yearlyPrice: "Start at $179,99/Yearly",
    description: "Linux/Windows",
    features: [
      "Multiple IPv4 Include",
      "EOIP or GRE",
      "Additional ipv4 $1,99",
      "Montreal, Canada or Paris,France",
    ],
  },
  {
    id: "Product-4",
    name: "Web",
    prename:"Website Server",
    price: "Start at $0,99/Monthly",
    link: "https://google.com",
    yearlyPrice: "Start at $11,99/Yearly",
    description: "Web Panel",
    features: [
      "Multiple domain allowed",
      "Plesk Panel",
      "Montreal, Canada or Paris,France",
    ],
  },
  {
    id: "Product-5",
    name: "Game Server",
    prename:"Gaming Server",
    price: "Start at $2,49/Monthly",
    link: "https://google.com",
    yearlyPrice: "Start at $29,99/Yearly",
    description: "Web Panel",
    features: [
      "Multiple Game server",
      "Pedrodactyl Panel",
      "Montreal, Canada or Paris,France",
    ],
  },
];
export const TransitProducts = [
  {
    id: "transit-1",
    name: "IP Tunnel Level 1",
    price: "$17,99/Monthly",
    yearlyPrice: "$179,99/Yearly",
    description: "EoIP or GRE Protocol",
    link: "https://google.com",
    features: [
      "250 Mbps",
      "2 IPV4 included",

      "Montreal, Canada",
    ],
  },
  {
    id: "transit-2",
    name: "IP Tunnel Level 2",
    price: "$23,99/Monthly",
    link: "https://google.com",
    yearlyPrice: "$239,99/Yearly",
    description: "EoIP or GRE Protocol",
    features: [
      "500 Mbps",
      "2 IPV4 included",

      "Montreal, Canada",
    ],
  },
  {
    id: "transit-3",
    name: "IP Tunnel Level 3",
    price: "$29,99/month",
    link: "https://google.com",
    yearlyPrice: "$299,99/month",
    description: "EoIP or GRE Protocol",
    features: [
      "750 Mbps",
      "5 IPV4 included",

      "Montreal, Canada",
    ],
  },
];
export const stats = [
  {
    id: "stats-1",
    title: "Serveurs Actifs",
    value: "71",
  },
  {
    id: "stats-2",
    title: "Datacenter",
    value: "1",
  },
  {
    id: "stats-3",
    title: "Clients satisfait",
    value: "70+",
  },
];

export const footerLinks = [
  {
    title: "Découvrez CFXHosting",
    links: [
      {
        name: "VPS FiveM",
        link: "/dedicated/#dedicated",
      },
      {
        name: "VPS KVM",
        link: "/vps/#Virtual",
      },
      {
        name: "FiveM LifeTime",
        link: "/cloud/#cloud",
      },
      {
        name: "Cloud Panel",
        title: "/game/#game",
      },
    ],
  },
  {
    title: "Nos liens",
    links: [
      {
        name: "Espace Client",
        link: "https://my.cfxhosting.net/",
      },
      {
        name: "Panel Game",
        link: "https://panel.cfxhosting.net/",
      },
      {
        name: "Status",
        link: "https://status.cfxhosting.net/",
      },
      {
        name: "Discord",
        link: "https://discord.gg/cfxhosting",
      },
    ],
  },

];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: twitter,
    link: "https://www.twitter.com/CfxHosting",
  },
  {
    id: "social-media-3",
    icon: discord,
    link: "https://discord.gg/cfxhosting",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: mikrotik,
  },
  {
    id: "client-2",
    logo: dell,
  },
  {
    id: "client-3",
    logo: fortinet,
  },
  {
    id: "client-4",
    logo: hpe,
  },
];