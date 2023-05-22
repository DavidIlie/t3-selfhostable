# auth - problems

- nextauth - works only with nextjs, no **OFFICIAL** implementation for expo yet, can do everything i want and i have used it in the past
- clerk - handles all auth for me, BUT:
  - supports expo
  - easy integration
  - i don't like the abstraction it gives me
    - i can't easily on user creation create a prisma record with custom attributes to at least gain some control
    - i don't like not being able to store and create everything myself
    - user limit
    - too corportate
- or just code an auth solution myself
