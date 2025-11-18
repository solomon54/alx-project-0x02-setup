## 🚀 Next.js Project Setup and Basics

This repository serves as a practical, hands-on guide and template for setting up a modern web application using **Next.js**. The core **purpose** is to provide a clean starting point and reference for developers to understand and implement fundamental Next.js features, including:

  * **Project structure** and configuration.
  * **Routing** (Pages Router).
  * **Data fetching** methods (e.g., `getStaticProps`, `getServerSideProps`).
  * **Styling** and component creation.

It is designed to be a lightweight resource for quickly spinning up new Next.js projects and mastering the essential concepts of this powerful React framework.

-----

### 📋 Prerequisites

The following software must be installed on the system before starting development:

  * **Node.js:** Next.js requires Node.js (version 18.17 or later).
      * *Check version:* `node -v`
  * **npm** or **Yarn** (npm is included with Node.js).
      * *Check version:* `npm -v`

-----

### 🛠️ Installation and Setup

The following steps detail how to initialize and prepare the Next.js project.

#### 1\. Project Initialization

The project is typically scaffolded using the Next.js CLI:

```bash
npx create-next-app@latest alx-project-2 --typescript --eslint --tailwind
```

#### 2\. Navigate to the Directory

The project directory must be entered before installing dependencies:

```bash
cd alx-airbnb-project
```

#### 3\. Install Dependencies

Standard dependencies are installed using the package manager:

```bash
npm install
# or
yarn install
```

-----

### 💻 Basic Usage (Running the Project)

The application can be run in development mode for iteration or built for a production environment.

#### Development Mode

This starts the application with hot-reloading for rapid development.

```bash
npm run dev
# or
yarn dev
```

The application is accessible at: **`http://localhost:3000`**

#### Production Build

This command builds the application for production, creating an optimized version in the `.next` directory.

```bash
npm run build
# or
yarn build
```

#### Start Production Server

After a successful build, this command runs the optimized application.

```bash
npm run start
# or
yarn start
```

-----

### 📁 Project Structure (Pages Router)

This project utilizes the **Pages Router** structure, which is the traditional and robust approach for building Next.js applications, adhering to the following organization:

| Directory/File | Description |
| :--- | :--- |
| **`alx-project-0x02/`** | The root directory for the entire project. |
| **`components/`** | Contains all reusable React components. |
| **`components/common/`** | Houses generic, application-wide components like `Button`, `Card`, and content-specific components like `PostCard`. |
| **`components/layout/`** | Stores components responsible for the overall page structure, such as `Header`. |
| **`interfaces/`** | Holds TypeScript interface and type definitions (`index.ts`) for consistent data structuring across the application. |
| **`pages/`** | **The core of the routing system.** Each file in this directory maps directly to a public-facing route (e.g., `home.tsx` maps to `/home`). Includes special files like `_app.tsx` and `_document.tsx`. |
| **`public/`** | For static assets that are served directly at the root, such as images, fonts, and manifest files. |
| **`styles/`** | Contains global and module CSS files, such as `globals.css` for base styles. |
| **`package.json`** | Defines project dependencies, scripts, and basic configuration. |
| **`tsconfig.json`** | The configuration file for the TypeScript compiler. |

