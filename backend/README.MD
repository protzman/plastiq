### Getting started with Prisma
# npm i -g prisma
# prisma login
# prisma init (follow the prompt)
# - demo server (choose one with lower latency)
# - dev
# - don't genereate (prisma client)
copy the generated prisma endpoint from the prisma.yml file to the env file and replace in the prisma.yml file with ${env:PRISMA_ENDPOINT}

add secret field to pisma.yml 'secret: ${env:PRISMA_SECRET}

add 
hooks:
  post-deploy:
    - graphql get-schema -p prisma

to prisma.yml

once you have a data model, run prisma deploy -e variables.env

set up server

one caveat is you need something for the schema.qgl to resolve to so in the Query and Mutation just put a bs 'hi : String' to get the server up and running for now