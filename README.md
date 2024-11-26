Reproduction of: https://github.com/vercel/turborepo/issues/9421

This demonstrates that changes to apps/next-app kills the node express server

Start with `yarn dev` in the root directory

Starting with `yarn dev --ui=tui` is a great representation of the server being killed when changes to next-app happen. 