## Getting started with Prisma
1. `npm i -g prisma`
2. `prisma login`
3. `prisma init` - (select the following choices from the prompt)
   - `> demo server` (choose one with lower latency)
   - `> dev`
   - `> don't genereate` (prisma client)
4. copy the generated prisma endpoint from the `prisma.yml` file to the env file and replace in the prisma.yml file with `${env:PRISMA_ENDPOINT}`
5. add secret field to `pisma.yml` (can leave commented out for now) and the post deploy hooks
```yml
secret: ${env:PRISMA_SECRET},
hooks:
  post-deploy:
    - graphql get-schema -p prisma
```
7. once you have a data model, run `prisma deploy -e variables.env`
8. set up server

_One caveat is you need something for the_ `schema.qgl` _to resolve to. To get the server up and running for now add_
```js
type Mutation {
  hi: String
}

type Query {
  hi: String
}
```
_to the_ `schema.grapql`
