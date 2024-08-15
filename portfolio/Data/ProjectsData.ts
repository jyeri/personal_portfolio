import pushSwap_img from '../Assets/projects/pushSwap/pushSwap_img.png';
import pushSwap_mp4 from '../Assets/projects/pushSwap/pushSwap_mp4.mp4';
import corewar_img from '../Assets/projects/corewar/corewar_img.png';
import corewar_mp4 from '../Assets/projects/corewar/corewar_mp4.mp4';
import lemin_img from '../Assets/projects/lemin/lemin_img.png';
import lemin_mp4 from '../Assets/projects/lemin/lemin_mp4.mp4';
import onlinestore_img from '../Assets/projects/onlinestore/onlinestore_img.png';
import onlinestore_mp4 from '../Assets/projects/onlinestore/onlinestore_mp4.mp4';
import userfinder_img from '../Assets/projects/userfinder/userfinder_img.png';
import userfinder_mp4 from '../Assets/projects/userfinder/userfinder_mp4.mp4';
import arkki_img from '../Assets/projects/arkki/arkki_img.png';
import arkki_mp4 from '../Assets/projects/arkki/arkki_mp4.mp4';
import cvgame_img from '../Assets/projects/cvgame/cvgame_img.png';
import cvgame_mp4 from '../Assets/projects/cvgame/cvgame_mp4.mp4';
// Define a consistent interface for project data
export interface IProject {
    title: string;
    description: string;
    l_desc: string;
    imgUrl: string;
    mp4: string;
    github_url: string | undefined;
    vercel_url: string | undefined;
    id: number;
}

// Project data array
export const projects_c: IProject[] = [
        {
            title: "Push Swap",
            description: "Sorting Algorithm. Hive Helsinki Project, done in C. Aimes to sort a stack of numbers with the least amount of operations.",
            l_desc: "Push Swap is a school project where I developed a sorting algorithm in C, designed to sort two stacks in memory using a limited set of operations. The project imposed strict constraints, requiring all functions—except for malloc and free—to be self-implemented, which demanded a deep understanding of both algorithm design and memory management. The challenge lay in creating an efficient sorting solution that minimized operations while handling the complexity of stack manipulation. I approached this by designing custom functions for every aspect of the process, from basic stack operations to the intricate logic required for sorting. Throughout the project, I iteratively refined the algorithm to optimize its performance within the given constraints. This experience significantly enhanced my skills in low-level programming, pushing me to innovate within the boundaries of C's memory management and operation limitations. The final solution not only met the project's rigorous requirements but also showcased my ability to develop efficient, resource-conscious code in a constrained environment. This project was a valuable exercise in problem-solving, algorithmic thinking, and the practical application of C programming in a controlled, resource-limited context.",
            imgUrl: pushSwap_img,
            mp4: pushSwap_mp4,
            github_url: 'https://github.com/jyeri/push_swap',
            vercel_url: '',
            id: 1,
        },
        {
            title: "Corewar",
            description: "Game in computer memory. Hive Helsinki Project, done in C. Aimes to create a champion that will survive in the memory game. Contains Assembler and Virtual Machine.",
            l_desc: "Corewar is a school group project where we developed a memory-based game using C, consisting of two main components: an assembler and a virtual machine (VM). The project's objective was to create a champion, a program written in a custom assembly language, which the assembler then compiles into a binary file. These binary files, representing different champions, are loaded into the VM, where they compete against each other in a battle for dominance within a defined memory area. The champions execute instructions until only one remains, making this a test of both strategic coding and efficient resource management. A key challenge in this project was adhering to the strict requirement of self-implementing all functions except for malloc and free, necessitating custom development of assembly translation, memory management, and the virtual execution environment. Working within these constraints pushed us to deeply understand the intricacies of low-level programming and system operations. The collaborative nature of this project also enhanced our teamwork and problem-solving abilities, as we had to integrate our individual components into a cohesive and functioning whole. The final outcome was a fully operational virtual battle environment where our champions competed in a fair and optimized manner, reflecting our collective efforts in mastering C programming and creating a robust, competitive game environment.",
            imgUrl: corewar_img,
            mp4: corewar_mp4,
            github_url: 'https://github.com/jyeri/corewar',
            vercel_url: '',
            id: 2,
        },
        {
            title: "Lem in",
            description: "Pathfinding Algorithm. Hive Helsinki Project, done in C. Aimes to find the shortest path in a maze, utilizing BFS and Edmonds-Karp algorithm.",
            l_desc: "Lem-in is a school project focused on developing an efficient pathfinding algorithm to navigate through a maze, represented as a graph where rooms are nodes and connections between them are edges. Working in pairs, we implemented this project in C, employing the Breadth-First Search (BFS) and Edmonds-Karp algorithms to find the shortest path. The challenge was to design a solution that could effectively handle graph traversal and flow optimization without relying on any external libraries, requiring us to build all necessary functions from scratch. This project required a deep understanding of graph theory and algorithmic optimization, as we meticulously coded the logic to traverse the graph, identify the shortest paths, and manage flow within the constraints of C programming. The collaborative nature of the project also honed our ability to work closely with a partner, integrating different components into a cohesive and efficient solution. The result was a robust pathfinding program capable of efficiently navigating complex mazes, demonstrating our proficiency in algorithm design, graph theory, and low-level programming.",
            imgUrl: lemin_img,
            mp4: lemin_mp4,
            github_url: 'https://github.com/jyeri/lem_in',
            vercel_url: '',
            id: 3,
        },
    ];

    export const projects_react: IProject[] = [
        {
            title: "Online Store",
            description: "Online Store with PHP, HTML and CSS. Done in single weekend. Contains possibility to add products to cart, login and register.",
            l_desc: "The Online Store project was a fast-paced, weekend-long challenge where my partner and I developed a fully functional e-commerce website using PHP, HTML, CSS, and MySQL. The objective was to create a complete online store with essential features, including user authentication (log in and log out), user management (settings and deletion), and shopping cart functionality. Users could add and remove items from their cart, manage their account settings, and proceed to checkout with ease. Despite the tight deadline, we successfully implemented a robust back-end with PHP and MySQL, ensuring secure data handling and efficient database interactions. On the front-end, we crafted a user-friendly interface with HTML and CSS, focusing on a seamless shopping experience. This project not only tested our ability to work under pressure but also demonstrated our capability to integrate multiple technologies and deliver a functional product within a limited timeframe. The result was a fully operational online store that showcased our skills in web development, database management, and collaborative problem-solving.",
            imgUrl: onlinestore_img,
            mp4: onlinestore_mp4,
            github_url: 'https://github.com/jyeri/Online_store_PHP',
            vercel_url: '',
            id: 4,
        },
        {
            title: "Github Finder",
            description: "Github Finder app design & development. ReactJS, ContextAPI, Github API. Search for Github users using react-query, view typeahead of matching users, links to Github profile.",
            l_desc: "The Github Finder project is a web application built using React and TypeScript, bootstrapped with Vite and deployed via Vercel. The primary goal was to create a search bar with typeahead functionality, allowing users to search for Github profiles by connecting to the Github API. The project features advanced techniques such as debouncing to optimize performance by delaying API calls until the user stops typing, and caching to store previous search results for faster retrieval. This ensures a smooth and responsive user experience. One of the key challenges was implementing these features without relying on prebuilt components, which required a deep understanding of React’s state management and asynchronous operations in TypeScript. The successful completion of this project demonstrates proficiency in modern front-end development practices, API integration, and performance optimization in a React environment.",
            imgUrl: userfinder_img,
            mp4: userfinder_mp4,
            github_url: 'https://github.com/jyeri/GithubUsersearch',
            vercel_url: 'https://githubsearch-jyeri.vercel.app/',
            id: 5,
        },
        {
            title: "Arkki",
            description: "WIP. Arkki app design & development. ReactJS, MongoDB. Arkki is our football team's app for managing formations and spearding information about us.",
            l_desc: "WIP. Arkki App is an ongoing project designed to serve as the official website and squad management tool for our football club. Developed using React and TypeScript and deployed via Vercel, the app is structured to provide a seamless online presence for the club while also offering robust management features. A key component of the app is the squad manager, which is implemented using the Beautiful DnD library for drag-and-drop functionality, inspired by the squad-building mechanics found in FIFA Ultimate Team. This feature allows for intuitive and interactive management of the team roster. While the project is still in progress and not yet available for public access, it showcases advanced front-end development techniques and creative application of familiar UI paradigms to suit the needs of a sports organization.",
            imgUrl: arkki_img,
            mp4: arkki_mp4,
            github_url: '',
            vercel_url: '',
            id: 6,
        },
    ];

    export const projects_py: IProject[] = [
        {
            title: "Ultimate CV",
            description: "WIP, Playble CV, Python, Pygame. Ultimate CV is a game where you can play through my CV. Contains information about me & my life this far.",
            l_desc: "WIP. Ultimate CV is a unique, ongoing personal project where I'm transforming my resume into an interactive, playable game using Python and the Pygame library. The concept revolves around guiding the player through meaningful moments of my life, effectively playing my CV. This approach not only provides a creative and engaging way to present my professional and personal journey but also serves as a practical method for me to learn and experiment with Python. While the project is still under construction and not yet available for public access, it demonstrates my ability to think outside the box, combining storytelling with programming to create a memorable and interactive experience. The Ultimate CV project reflects both my technical skills and my passion for innovation in personal branding.",
            imgUrl: cvgame_img,
            mp4: cvgame_mp4,
            github_url: 'https://github.com/jyeri/the_cv_project',
            vercel_url: '',
            id: 7,
        },
    ];