import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Gestion de billet de cinema',
        description: "Mon équipe et moi avons mis en place une application en mode console sous la demande de notre professeur en programmation orienté objet on a eu à apprendre les bases du java ",
        tools: ['Intellij', 'Xampp', 'PhpMyAdmin', 'MysQlServer', 'Java', 'JDBC'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Gestion de mini marché local',
        description: 'With my classmates we have worked on a  web app for our TCPL project at ESP, a manangement market in the food sector . We use HTML Talwindcss for the front end side with some librairies and Php for the back end using Mysql for the database. For the moment we have not yet deployed the web application.',
        tools: ['HTML', 'Tailwind CSS', "Php", "NextJS", "MySQL","Gmail Passkey"],
        role: 'Full Stack Junior Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'VTC Application',
        description: 'While obtaining my higher technician diploma in IT at ESP I developed a vtc web application for online taxi orders at Next Hope company. I used Express, OpenAI, Stripe, and Mongoose to develop the API. We utilized NextJS, TailwindCSS, and other npm libraries for the UI. I use Postgresql with his extension Postgis for the management of informations users and in the order to get the realtime position of drivers and client.I use also the opensource platform Appwrite for the users personals informations and securised our appliaction',
        tools: ['React','Nextjs', 'TalwindCss', 'Stripe', 'Express', 'Nodejs',  'Postgressql', 'Google Cloud API', 'Appwritte'],
        code: '',
        role: 'Full Stack Junior Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Ecommerce Source Code App',
        description: " I developed a Ecommerce Source Code App dashboard application called Ecommerce Source Code App. As a front-end developer, I worked on creating the dashboard using NextJS, Strapi, Render, Mysql, and other necessary npm libraries. I used React Nextjs to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Render', 'Strapi', 'Clerk'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Junior Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },