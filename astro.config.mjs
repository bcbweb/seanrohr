import { defineConfig } from 'astro/config'
import NetlifyCMS from 'astro-netlify-cms'

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'latest',
        },
        // Configure where our media assets are stored & served from
        media_folder: 'public/assets/media',
        public_folder: '/assets/media',
        // Configure the content collections
        collections: [
          {
            name: 'works',
            label: 'Works',
            label_singular: 'Work',
            folder: 'src/pages/works',
            create: true,
            delete: true,
            fields: [
              {
                name: 'image',
                widget: 'image',
                label: 'Image',
                allow_multiple: false,
              },
              { name: 'title', widget: 'string', label: 'Title' },
              { name: 'year', widget: 'string', label: 'Year' },
              { name: 'medium', widget: 'string', label: 'Medium' },
              { name: 'dimensions', widget: 'string', label: 'Dimensions' },
              { name: 'altText', widget: 'string', label: 'Alt text' },
              {
                name: 'title',
                widget: 'string',
                label: 'Title',
                options: ['painting', 'paper'],
              },
              {
                name: 'imageSize',
                widget: 'number',
                label: 'Image size (%)',
                value_type: 'int',
                min: 1,
                max: 100,
              },
              { name: 'visible', widget: 'boolean', label: 'Visible?' },
            ],
          },
          {
            name: 'posts',
            label: 'Blog Posts',
            label_singular: 'Blog Post',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              {
                name: 'author',
                widget: 'string',
                label: 'Author Name',
                required: false,
              },
              {
                name: 'authorURL',
                widget: 'string',
                label: 'Author URL',
                required: false,
              },
              {
                name: 'description',
                widget: 'string',
                label: 'Description',
                required: false,
              },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Blog Post', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ['/src/styles/main.css'],
    }),
  ],
})
