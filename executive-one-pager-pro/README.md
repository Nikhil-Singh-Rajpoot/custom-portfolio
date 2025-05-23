# Welcome to your One-Page Resume Builder

This project allows you to build beautiful, customizable one-page resumes.

![image](https://github.com/user-attachments/assets/62c4b7b6-9bd6-4708-80e2-c2b334819105)
![image](https://github.com/user-attachments/assets/e07314ff-9365-4d64-8944-75d972d98e92)
![image](https://github.com/user-attachments/assets/131c82b0-4217-4b0d-b7e9-a1cc4d838ffa)
![image](https://github.com/user-attachments/assets/73dec0a9-9976-40c5-a687-a5e6405aec8d)


## Working Locally

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the resume builder.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Import the repository with these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

```sh
npm install -g netlify-cli
netlify deploy
```

## 🛠️ Customization

### Changing Colors

Edit the CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary: 221 83% 53%;
  --accent: 176 68% 64%;
  /* other colors... */
}
```

### Adding New Sections

1. Create a new component in `/src/sections/`
2. Add the corresponding data in `/src/data/profile.ts`
3. Import and add the component to `App.tsx`
