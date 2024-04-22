import {BiUser} from 'react-icons/bi'
const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: BiUser,

  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'In one short sentence, what do you do?',
    },
    {
      name: 'resumeURL',
      title: 'Upload Resume',
      type: 'file',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Add your social media links:',
      fields: [
        {
          name: 'githubURL',
          title: 'Github URL',
          type: 'url',
          initialValue: 'https://github.com/john-doe',
        },
        {
          name: 'linkedinURL',
          title: 'Linkedin URL',
          type: 'url',
          initialValue: 'https://linkedin.com/in/john-doe',
        },
        {
          name: 'messengerURL',
          title: 'Messenger URL',
          type: 'url',
          initialValue: 'http://m.me/john-doe',
        },
        {
          name: 'googleEmail',
          title: 'Email',
          type: 'string',
          initialValue: 'john-doe@gmail.com',
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },

    {
      name: 'techStack',
      title: 'Tech Stack ',
      type: 'array',
      description: 'Add a list of your Stack',
      of: [{type: 'string'}],
    },
    {
      name: 'timeline',
      title: 'My Timeline',
      type: 'array',
      description: 'Add a list of your timeline',
      of: [
        {
          name: 'events',
          title: 'education and experience',
          type: 'object',
          description: 'Add your Education and Experience:',
          fields: [
            {
              name: 'event',
              title: 'Event',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo',
              description: `checkout InterfaceIcons in FavIcons.(Note: replace "class" with "classNames")`,
              type: 'code',
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      title: 'My Projects',
      type: 'array',
      description: 'Add a list of your projects',
      of: [
        {
          name: 'projects',
          title: 'My Projects',
          type: 'object',
          description: 'Add your personal projects:',
          fields: [
            {
              name: 'projectTitle',
              title: 'Project Title',
              type: 'string',
            },
            {
              name: 'projectDescription',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'projectImage',
              title: 'Project Image',
              type: 'image',
            },
            {
              name: 'projectDemoLink',
              title: 'Demo Link',
              type: 'url',
            },
            {
              name: 'projectCodeLink',
              title: 'Project Code Link',
              type: 'url',
            },
            {
              name: 'techTags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
}

export default profile
