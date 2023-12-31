# Node.js start v1.3.0

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

## Description

My start theme to develop with **Node.js** and **TypeScript**.

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://sergio-ridaura.vercel.app/blog/node) &nbsp; [![TypeScript](https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white)](https://sergio-ridaura.vercel.app/blog/typescript)

## New project

To use this repository as a template in your projects, clone the project.

```console
git clone https://github.com/sergio-ridaura/node-start.git
```

Adapt the `README.md`, `package.json`, `docker-compose.yml` and `LICENSE` files to your needs.

Manage your project tasks in the `todo` folder.

Start the container with Docker Compose.

```console
docker-compose up -d
```

Access the Node.js container.

```console
docker exec -it node_node-start
```

Add project dependencies.

```console
npm install
```

Run the test.

```console
npm run test
```

### Application

For application development, use the `src/index.ts` file and components from the `src/components` folder.

For the development of the application.

```console
npm run dev
```

Create application and the package to use in Npm.

```console
npm run build
```

Run the application.

```console
npm run start
```

### CLI

For developing a CLI application, use the `src/cli.ts` file and components from the `src/components` folder.

```console
npm run dev:start
```

To install the CLI application on your computer.

```console
npm install -g
```

To run the built application.

```console
npm run start:cli
```

### Npm

To develop an Npm package, use the `src/packages` folder and add the modules in the `src/package.ts` file.

Publish the package to Npm.

```console
npm addUser
npm publish
```

#### Using modules

Install the module in your project. For example:

```console
npm i node-github-ridaura
```

Example of module use:

```javascript
import { userGet } from "node-github-ridaura";

(async () => {
  console.log(await userGet("sergio-ridaura"));
})();
```

## Modules

### class

- **classDefault:** Allows you to add default classes to components or use a new one and add new classes.

## Author

### Sergio Ridaura

Full stack developer in **TypeScript** with **Astro.js**, **Next.js**, **React.js**, **Node.js** and **MongoDB**.  
Quick development of high-performance applications and websites.

[![Blog](https://sergio-ridaura.vercel.app/images/blog.svg)](https://sergio-ridaura.vercel.app/) &nbsp; [![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:sergio.ridaura@outlook.com) &nbsp; [![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/sergio-ridaura) &nbsp; [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sergio-ridaura/)

## MIT License

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
