## Basic session demo

This is a simple application that utilizes express-session to individually store a list of messages which are filtered by an assigned user_id. To see this in action run the server and front ends then open up two different instances of the app. Despite running on the same port, each will be given it's own session and thus display individual data.