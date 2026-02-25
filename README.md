#Namaste React

**Episode 2**
1.lot of other packages and libraries and other things makes production ready app fast not only react

2.npm -> npm doesnt have a fullform but it manages the packages..
To use npm -> (npm init )then a package.json is created and it is configuration for npm ,npm is take care of version of packeage.

3.Dependencies THE MOST IMPORTANT DEPENDENCIES IN OUR PROJECT IS BUNDILER ->BUNDILERS (eg:vite,parcel,webpack).bundiler will bundle all code and which will pack whole project to make production ready app.

4.parcel will best configuration bundiler.
parcel will come with  npm so we can install it by -> npm install -D parcel

5.There is 2 type of dependencies 1-> dev dependencies (development phase)and 2-> normal dependencies (production).
parcel :^2.8.3 -> means it will do automatically updates minor version
       :~2.8.3   -> means it will do automatically updates major (big) version.

6.WHAT IS DIFFERENCE B/N PACKAGE.JSON AND PACKAGE.LOCKJSON 
PACKAGE.JSON -> It is configuration of npm .it keeps track on what version of package is installed in to our sysytem.(it will track approx versiom)
PACKAGE.LOCKJSON ->it will keeps the record of exact version of all the dependencies.(this will track the exact version)

7.Node modules -> it will fetches all the dependencies ,so many packages are included in this.our project have pracel dependency ,Parcel as a project it as it own dependencies and those dependencies have their own dependencies this is called transitive dependency..

8.should we need put package.json and package.lockjson ? YES it maintain dependencies

9.if we have package.json and package.lockjson ,we can regenerate all the node modules
THATS Y WE DONT NEED TO PUT NODE MODULE IN TO GITHUB

**Episode 3**

1.Instead if using npx parcel index.html ,In script we can we can add start : "parcel index.html"
and build :"parcel build index.html"  so we can run this by npm start and npm run build This is industrial standard.


2.Jsx is look like html but its not.and jsx is not react ,jsx is different and react is different.
Jsx will help developers life...it is easier.
eg:const heading=<h1>this is react element<h1>;

Core React Element -> const heading =React.creatElement("h1",{id:name},"namaste react");

so there what happening is this React.createElement will create react element which is object then when it will render it become html , reactElement (object)=>html (when render)

but jsx will not understand by browser,so there is a role for parcel which have bebel this will convert this jsx into reactelement (object) which is in js then js engine can understand .

and in jsx we will give class attributes as className ,in jsx we need camelCase and for multiple line we can use ().

3.React Function component is a function which returns a jsx (reactElement)
 ReactComponent will start with Capital letter.
 const Component=()=>{
       return <h1>this is react component</h1>
 }

 randering by <Component/>

 4.

### **we have to use key inside map but index is okay but not recommented 

Episode4 

Destructing :It is just a short way to take values out of objects.

person ={ name :"vani" ,age :"23"}

we need access name  like  person.name without destructing.

WITH DESTRUCTING - const {name ,age }=person;   now   name is "vani"


 /*
  Header
  -logo
  -nav items

  Body
  -rescontainer
    -rescard
      -restrurant name
      -rating
      -cusines
      -time taken

  Footer
  -contact us
  -Address
  -email
  
 
 */

 # JAVASCRIPT

 Filter is an array function ,
 it will goes through each items in array
 check condition
 keeep the item where condition is true 
 return new array


 Include -> function which search for substring of string

 toLowerCase -> convert into lower case

 # useEffect  23Feb

 if there is no dependency array ,useEffect is called in every render.
 useEffect is actually called after that component render.

 if there is empy dependency array[] then useEffect call only in the initial render.(only once)

 if we have something as dependency then useEffect only call only when they change or update.


 # useState

 1.Never use useState outside of your functional component
 2.Use useState in th top of the component
 3.Dont use useState inside ifelse condition ,its develop inconsistency
 4.dont use inside loops 

#  #React router dom

To cretae router we need library called react router dom.
To install to our project we use command: npm i react-router-dom

To creating routing ,we have to create routing configuration so we need import createBrowserRouter
import {createBrowserRouter} from "react-router-dom";

configuration means that some information that will define brower router what will happen on a specfic path or url so it will take path
like,
const appRouter=createBrowerRouter(
  [
    {
      path:...,
      element:....,
    },
    {
      path:...,
      element:....,
    }
  ]
)

So after creating configuration we need to provide to root for rendering,so that we use another component called routerProvider from react-router-dom.
import {routeProvider}from react-route-dom;

then we can render this appRouter in root,so it will render everything according to path.
root.render(<routerProvider route={appRoute}>)

1.What Is React Router DOM?

React Router DOM allows you to:

Build Single Page Applications (SPA)

Navigate without full page reload

Render different components for different URLs

2.What Is createBrowserRouter?

It creates a router configuration.

3.What Is RouterProvider?

It tells React:

“Here is the router configuration. Use it to control rendering.”

4.

# Children Routes


to create children routes we need to configuration children.

in appLayout we need this children routers we need outlet.This outlet will take care of this by checking the path and render the children route.

Link will use instead of <a> becaie <a> will reload everything from begin.but Link only change component.

# SPA


