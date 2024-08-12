import pushSwap_img from '../assets/projects/pushSwap/pushSwap_img.png';
import pushSwap_mp4 from '../assets/projects/pushSwap/pushSwap_mp4.mp4';
import corewar_img from '../assets/projects/corewar/corewar_img.png';
import corewar_mp4 from '../assets/projects/corewar/corewar_mp4.mp4';
import lemin_img from '../assets/projects/lemin/lemin_img.png';
import lemin_mp4 from '../assets/projects/lemin/lemin_mp4.mp4';
import onlinestore_img from '../assets/projects/onlinestore/onlinestore_img.png';
import onlinestore_mp4 from '../assets/projects/onlinestore/onlinestore_mp4.mp4';
import userfinder_img from '../assets/projects/userfinder/userfinder_img.png';
import userfinder_mp4 from '../assets/projects/userfinder/userfinder_mp4.mp4';
import arkki_img from '../assets/projects/arkki/arkki_img.png';
import arkki_mp4 from '../assets/projects/arkki/arkki_mp4.mp4';
import cvgame_img from '../assets/projects/cvgame/cvgame_img.png';
import cvgame_mp4 from '../assets/projects/cvgame/cvgame_mp4.mp4';
  
    export const projects_c = [
        {
            title: "Push Swap",
            description: "Sorting Algorithm. Hive Helsinki Project, done in C. Aimes to sort a stack of numbers with the least amount of operations.",
            l_desc: "Sorting Algorithm. Hive Helsinki Project, done in C. Aimes to sort a stack of numbers with the least amount of operations. Rules are simple, you have two stacks and few operations to use. The goal is to sort the stack in ascending order, without using libraries or functions",
            imgUrl: pushSwap_img,
            mp4: pushSwap_mp4,
            github_url: 'https://github.com/jyeri/push_swap',
            vercel_url: '',
            id: 1,
        },
        {
            title: "Corewar",
            description: "Game in computer memory. Hive Helsinki Project, done in C. Aimes to create a champion that will survive in the memory game. Contains Assembler and Virtual Machine.",
            l_desc: "Game in computer memory. Hive Helsinki Project, done in C. Aimes to create a champion that will survive in the memory game. The goal is to create a champion that will survive in the memory game. The game is played in a virtual machine, where champions are loaded into memory and executed. The last champion standing wins. The project is divided into two parts, the assembler and the virtual machine. The assembler compiles the champion into a binary file that can be loaded into the virtual machine. The virtual machine loads the champions into memory and executes them. Using libraries is forbidden.",
            imgUrl: corewar_img,
            mp4: corewar_mp4,
            github_url: 'https://github.com/jyeri/corewar',
            vercel_url: '',
            id: 2,
        },
        {
            title: "Lem in",
            description: "Pathfinding Algorithm. Hive Helsinki Project, done in C. Aimes to find the shortest path in a maze, utilizing BFS and Edmonds-Karp algorithm.",
            l_desc: "Pathfinding Algorithm. Hive Helsinki Project, done in C. Aimes to find the shortest path in a maze, utilizing BFS and Edmonds-Karp algorithm. The goal is to find the shortest path in a maze. The maze is represented as a graph, where the rooms are nodes and the connections between rooms are edges. The project is done in C and using libraries is forbidden.",
            imgUrl: lemin_img,
            mp4: lemin_mp4,
            github_url: 'https://github.com/jyeri/lem_in',
            vercel_url: '',
            id: 3,
        },
    ];

    export const projects_react = [
        {
            title: "Online Store",
            description: "Online Store with PHP, HTML and CSS. Done in single weekend. Contains possibility to add products to cart, login and register.",
            l_desc: "Online Stroe made with PHP, HTML and CSS. Done in single weekend. Contains possibility to add products to cart, login and register. The goal was to create functional online store eith shopping carts bounded to registered user.",
            imgUrl: onlinestore_img,
            mp4: onlinestore_mp4,
            github_url: 'https://github.com/jyeri/Online_store_PHP',
            vercel_url: '',
            id: 4,
        },
        {
            title: "Github Finder",
            description: "Github Finder app design & development. ReactJS, ContextAPI, Github API. Search for Github users using react-query, view typeahead of matching users, links to Github profile.",
            l_desc: "Program that uses Github API to search for users. Done with ReactJS and ContextAPI. The goal was to create a program that uses Github API to search for users. The program uses react-query to fetch data from the API and displays the results in a list. The user can click on a user to view their profile on Github.",
            imgUrl: userfinder_img,
            mp4: userfinder_mp4,
            github_url: 'https://github.com/jyeri/GithubUsersearch',
            vercel_url: 'https://githubsearch-jyeri.vercel.app/',
            id: 5,
        },
        {
            title: "Arkki",
            description: "WIP. Arkki app design & development. ReactJS, MongoDB. Arkki is our football team's app for managing formations and spearding information about us.",
            l_desc: "WIP. Arkki app design & development. ReactJS, MongoDB. Arkki is our football team's app for managing formations and spearding information about us. The goal was to create an app for our football team. The app is used to manage formations, spread information about the team and keep track of the team's progress. Links are disabled while App is in development.",
            imgUrl: arkki_img,
            mp4: arkki_mp4,
            github_url: '',
            vercel_url: '',
            id: 6,
        },
    ];

    export const projects_py = [
        {
            title: "Ultimate CV",
            description: "WIP, Playble CV, Python, Pygame. Ultimate CV is a game where you can play through my CV. Contains information about me & my life this far.",
            l_desc: "WIP. Playble CV, done with Python, utilizing Pygame library. Ultimate CV is a game where you can play through my CV. Contains information about me & my life this far. The goal was to create a game that tells my story. The game is divided into levels, where each level represents a part of my life. The player can move around the levels and interact with objects to learn more about me. Links are disabled while App is in development.",
            imgUrl: cvgame_img,
            mp4: cvgame_mp4,
            github_url: 'https://github.com/jyeri/the_cv_project',
            vercel_url: '',
            id: 7,
        },
    ];