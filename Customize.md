# Customization

- Access Prisma Database

```bash

npx prisma init --datasource-provider mongodb
npx prisma generate
npx prisma studio

```

1. Set up the environment variables
   Create a `.env` file in the root directory and add your MongoDB connection string and other necessary variables. I have given an example in the `.env.example` file.

2. in src/hooks/fetchData.ts, you have to put your own API endpoint in the `getData` function.

3. in src/components/dashboard/AddArchiveProjects.tsx , you have to put cloudinary upload preset name in the `CldUploadButton` component.

4. in src/components/dashboard/AddSinglePost.tsx , you have to put cloudinary upload preset name in the `CldUploadButton` component.

5. in src/utils/GithubCalender.tsx , you have to put your github username.

6. in src/app/about-me/page.tsx, you have to put your own username in different components.

7. the dashboard of this project is in /dashboard, you have to login with your own gmail id and make sure that you have given the id isAdmin true in the database.
   > you can do that in many ways,

- Go to the mongodb atlas and make isAdmin true.
- Run Prisma command `npx prisma studio` and make isAdmin true.

if you have any difficulty in customizing the project, you can contact me without any hesitation.
