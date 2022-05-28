# Some notes about my solution:

## How to run
Go to solution folder:
1. Install docker and run postgres DB by this cmd:
    > npm run database:start
    
2. Run the server by cmd:
   > npm run dev 

    This cmd will do 3 things: format prisma file to make sure no more error, regenerate prisma client and run the server
    
    **Please make sure that you already generate prisma clent before running server, otherwise it will throw an error.**
