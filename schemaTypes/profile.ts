import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(1000),
    }),
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/evanfeliza",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "google",
          title: "Email",
          type: "string",
          initialValue: "juan_dela_cruz@gmail.com",
        },
      
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },

    {
      name: "projects",
      title: "My Projects",
      type: "array",
      description: "Add a list of your projects",
      of: [{ 
        name: "projects",
        title: "My Projects",
        type: "object",
        description: "Add your personal projects:",
        fields:[   {
          name: "projectTitle",
          title: "Project Title",
          type: "string",
        },
                  {
          name: "projectImage",
          title: "Project Image",
          type: "image",
        },
        {
          name: "projectDemoLink",
          title: "Demo Link",
          type: "url",
        },
        {
          name: "projectCodeLink",
          title: "Project Code Link",
          type: "url",
        },
        ]
      }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      description: "Add a list of your Tech Stack and it's Logo",
      of: [{ 
        name: "stack",
        title: "Tech Stack",
        type: "object",
        description: "Add your tech stack.",
        fields:[   {
          name: "stackName",
          title: "Name",
          type: "string",
        },
                  {
          name: "stackLogo",
          title: "Logo",
          type: "image",
        },
        ]
      }],
    },

 ],
};

export default profile;