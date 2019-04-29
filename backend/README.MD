## Getting started with Prisma
1. `npm i -g prisma`
2. `prisma login`
3. `prisma init` - (select the following choices from the prompt)
   - demo server (choose one with lower latency)
   - dev
   - don't genereate (prisma client)
4. copy the generated prisma endpoint from the prisma.yml file to the env file and replace in the prisma.yml file with `${env:PRISMA_ENDPOINT}`
5. add secret field to pisma.yml 'secret: ${env:PRISMA_SECRET}
6. add the following to prisma.yml
```
hooks:
  post-deploy:
    - graphql get-schema -p prisma
```
7. once you have a data model, run `prisma deploy` -e variables.env
8. set up server

_One caveat is you need something for the schema.qgl to resolve to. To get the server up and running for now add_
```
type Mutation {
  hi: String
}

type Query {
  hi: String
}
```
_to the_ `schema.grapql`
