# MERN Full Stack App
<br/>

## How to run locally?

* Create MongoBD Atlas cluster and get connection string with username and password

* Add *.env* file in backend folder
    * Add variables PORT and connectionString to *.env* file
    
    ~~~properties
    PORT=4000
    connectionString=mongodb+srv://...
    ~~~
* Install packages
    * Install Frontend packages

    ~~~shell
        cd frontend && npm install
    ~~~
    
    * Install Backend packages
    ~~~shell
        cd ../backend && npm install
    ~~~

* Run Servers
    * Run backend Server
    ~~~shell
        npm run dev
    ~~~
    
    * Run frontend Server in another terminal
    ~~~shell
        cd frontend && npm start
    ~~~

### The react app will start at http://localhost:3000/

