# Jeel Suthar — Portfolio

Personal portfolio for Jeel Suthar, Python Developer and Automation Engineer. Built with React, Vite, and Tailwind CSS.

Text, skills, jobs, and projects live in `src/data/`:

- `profile.js` — name, about, contact, resume, photo
- `experience.js` — jobs
- `skills.js` — skill groups
- `projects.js` — project cards and the detail dialog
- `portfolio.js` — re-exports the files above

## Run it locally

You need [Node.js 20 or newer](https://nodejs.org/) (npm comes with it).

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

Other commands:

```bash
npm run build    # production files in dist/
npm run preview  # serve the production build locally
npm run lint
```

## Update your details

| What to change | Where |
| --- | --- |
| Name, intro, about, contact, resume | `src/data/profile.js` |
| Jobs | `src/data/experience.js` |
| Skills | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Photo | `public/portrait.jpeg` (`profile.portrait` in `profile.js`) |
| Resume PDF | `public/Jeel-Suthar-Resume.pdf` (`resume.available` in `profile.js`) |
| Project GitHub links | Set `github` on that project to the repository URL |
| Contact form delivery | Set `contact.formEndpoint` to a form service URL |

Email, LinkedIn, and GitHub are already set in `profile.js`. Project repository links are omitted until a real URL is added on that project in `projects.js`.

### Resume

1. Export your resume as a PDF.
2. Put it in the `public` folder and name it `Jeel-Suthar-Resume.pdf`.
3. In `src/data/profile.js`, set `resume.available` to `true`.

The hero button and the resume section will then download that file. Until the file is added, the hero button scrolls to the resume section instead of pretending a download exists.

### Contact form

The form checks name, email, subject, and message in the browser. It does **not** send email until you set `contact.formEndpoint`.

A simple option is [Formspree](https://formspree.io/): create a form, copy its endpoint, and paste it into `formEndpoint`, for example `https://formspree.io/f/xxxxxxxx`. After that, a successful submit shows a sent confirmation. If the request fails, the form says so.

### Udemy course

The education section lists your Udemy Python programming course without a made-up course title or certificate link. Edit the `education` entry when you want the exact name or a link shown.

## Deploy

The production build is a static site in `dist/`.

### Vercel

1. Push the project to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Later edits to `main` redeploy automatically if that is enabled.

### Netlify

1. Import the repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy.

### GitHub Pages (project site)

If the site will live at `https://<user>.github.io/<repo>/`, set the base path in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/<repo>/",
});
```

Then build and publish the `dist` folder (GitHub Actions or the `gh-pages` branch). For a user site at `https://<user>.github.io/`, leave `base` as the default `/`.

## Stack

- React
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion
