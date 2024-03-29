import stackoverflow from '../../Assets/stackoverflow.png'
import ims from '../../Assets/ims.png'
import gmail from '../../Assets/gmailclone.png'
import usjobs from '../../Assets/githubusjobs.png'

export const data = [
    {
        id:1,
        name:"Stack overflow clone",
        deployedURL:"https://stack-overflow-clone-project-guvi.netlify.app/",
        githubFE:"https://github.com/vickymj007/Stack-Overflow-Clone-FE",
        githubBE:"https://github.com/vickymj007/Stack-Overflow-Clone-BE.git",
        projectType:"Fullstack Project",
        img: stackoverflow,
        showDesc:false,
        description:"This is a Stack Overflow clone project, User can create an account and ask their programming related questions. User can also see the questions asked by others."
    },
    {
        id:2,
        name:"Gmail clone",
        deployedURL:"https://react-app-gmail-clone.netlify.app/",
        githubFE:"https://github.com/vickymj007/gmail_clone",
        githubBE:"https://github.com/vickymj007/Gmail_clone_server.git",
        projectType:"Fullstack Project",
        img:gmail,
        showDesc:false,
        description:"This is a Gmail Clone created using the MERN Stack, User can create account and send emails to other users."
    },
    {
        id:3,
        name:"Github US jobs",
        deployedURL:"https://github-us-jobs.netlify.app/",
        githubFE:"https://github.com/vickymj007/GitHub-US-Jobs",
        projectType:"Frontend Project",
        img:usjobs,
        showDesc:false,
        description:"This is a Frontend Project created using React, User can login and search US Jobs."
    },
    {
        id:4,
        name:"Influencer management system",
        deployedURL:"https://influencer-management-system.netlify.app/",
        githubFE:"https://github.com/vickymj007/IMS_Frontend",
        githubBE:"https://github.com/vickymj007/IMS_Backend.git",
        projectType:"Fullstack Project",
        img:ims,
        showDesc:false,
        description:"This is a Fullstack project, You can perform CRUD Operation like adding a New Influencer, Edit and Delete. There is a search bar where you can search Influencer by their name, You can also sort data."
    }
]