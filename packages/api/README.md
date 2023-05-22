# api - problems

- tRPC doesn't officially support the app router
  - There is an experimental implementation but there is no point to use that in a prod app since it is bound to change and doesnt hydrate client cache from the server
- use tRPC purely in server using the framework agnostic code which doesn't make the page dynamic anymore unless i use nextjs built in invalidation
- code own tRPC
- traditional post and get requests

# what i want the api to be able to do:

- in a async server component use any traditional tRPC query (non-hook) version to then pass on to client component as a cache for a tanstack query key which then updates dynamically
- mutations through the server through nextjs new server actions or traditional post requests
