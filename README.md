# Neo4j + Express.js Boilerplate Template
Boilerplate code for quickly getting an Express.js server up and running with some template code for an extendable API that incorporates Neo4j. Using the Neo4j driver provided by Neo4j, this slim repository can be expanded upon to build out a large backend API infrastructure that is linked to a graph database. 

## Requirements
- Ensure [Node.js](https://nodejs.org/en/) is installed on your system
- Code editor of your choice [VS Code is my preference](https://code.visualstudio.com/)
- Ensure [Neo4j Community edition](https://neo4j.com/download-center/) is installed on your system and set up with a new username and password. Neo4j v3.5.3 is operational for this template as of July 2020, but Neo4j 4.X versions should have little to no impact on the functionality of this boilerplate template. 
- A positive mindset. You got this!

## Installation and Run Instructions
1. In 1 terminal window run ``git clone https://github.com/dkazenoff/neo4j-express-boilerplate.git`` and then ``npm install``
2. In the same window, run ``node app.js`` to launch the express server and backend JS API
3. In terminal window 2, navigate to inside the install directory location of Neo4j and start the server up. Running ``bin/neo4j console`` in this terminal window is one method of launching the server.
4. The Full neo4j-express server is now ready to use! Run test GET/POST API calls with Postman ("localhost:8080/test_api/") to prove you're receiving the expected demo-responses, and that your local neo4j server is getting populated correctly. See [Neo4j Documentation](https://neo4j.com/docs/) for more information
5. All Done! Post any issues you run into and happy coding. 
