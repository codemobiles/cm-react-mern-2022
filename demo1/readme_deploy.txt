# build
yarn build

# run express webservice
npx serve build
npx serve -s build (-s fallback)


# start nginx
sudo nginx 

# stop nginx
sudo nginx -s stop





# mac ---------------
#mac
brew install nginx
https://medium.com/@ThomasTan/installing-nginx-in-mac-os-x-maverick-with-homebrew-d8867b7e8a5a
sudo nginx
sudo nginx -s stop
http://localhost:8080/
open /opt/homebrew/etc/nginx/
open /opt/homebrew/var/www


# location / {
    #    root   html;
    #    index  index.html index.htm;
    # }   

    #no sub-folder        
    location / {
        try_files $uri $uri/ /index.html;
    }   
    
    # have sub-folder named "demo"        
    location /demo {
        try_files $uri $uri/ /demo/index.html; 
    }