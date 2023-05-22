# david's self-hostable spin of the best stack

> WARNING: this is very work in progress and i am still doing research

I hope I can aim to create not something for other people to use but instead a modern stack which is tailored to where i want to run it on and how i want to do things

## what i hope the stack will be able to do logic side

- an API which is shared with both the nextjs app and the expo app
  - allows for typesafe queries and mutations
  - allows fetches to be able to run in a nextjs `"use server";` component
    - where the request can run directly on the server process without making a request (run the function from the defined router)
    - ...into a then tanstack-query call with the response cached
      **OR**
    - ...into then a var like a traditional async operation in a `"use server";` component
  - allows mutations to be send either via a traditional post request for expo or using nextjs server actions to run the function from the defined router

> Even if there is no linking system (making requests) between nextjs and the api, i still want everything to be typesafe and synced between the mobile app and web app, which is what tRPC does. See my concerns [here](https://github.com/DavidIlie/t3-selfhostable/tree/master/packages/api)

- an auth solution which works with both the nextjs app and the expo app
  - easy integration for password and social login
  - save details in prisma and allow for easy adding to the user object and deciding what is returned to the client
  - sign in with support with expo and then auth with the server and get session

> NextAuth.js provides all of this and has support for app router but does not work on expo without a lot of modification which is not something I want to rely on as then I can not update the prject easily. See my concerns with clerk and everything else [here](https://github.com/DavidIlie/t3-selfhostable/tree/master/packages/auth)

- an upload solution which works with both the nextjs app and the expo app
  - makes request to server (for project) with file metadata
    - sends that to main server and returns presigned upload URL
  - uploads to that presigned upload URL
  - main server checks when uploaded and lets server know which send success response

> I know this is pretty much [uploadthing](https://github.com/pingdotgg/uploadthing) but I have some concerns, see them [here](https://github.com/DavidIlie/t3-selfhostable/tree/master/packages/uploads)

- Prisma using the jsonProtocol feature which makes it very fast

> There are more scalable solutions but I am using a highly available postgres cluster on kubernetes so that is what i want

## what i hope the stack will do app side

- nextjs application with tailwindcss, typescript and access to all features
- expo application with expo-router, typescript, tailwindcss and access to all features
- a docs page using nextra
- easy efficient docker images for everything
- deploy to kubernetes

## my infastructure

I have a home kubernetes cluster where I want to deploy everything on and keep everything in house
