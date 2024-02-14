# Dynamic Routes
 
Dynamic routes are routes that contain parameters, which can be used to dynamically generate content based on user input or other data.

In React Router, dynamic routes are defined using a colon (:) followed by the name of the parameter.

For example, a dynamic route for a user profile page might look like /users/:id, where
:id is the parameter that will be replaced with the actual user ID.

To access the parameter in your component, you can use the useParams hook
provided by React Router

