# laravel-mongodb-starter

![](https://i.imgur.com/Uw0cekD.png)

## Installation (For WAMP)  :

1. Download this repo : [Click Here](https://github.com/Ademking/laravel-mongodb-starter/archive/master.zip)

2. Extract the zip file

3. Open "client" folder and run this command ===> __npm install__

4. Open "server" folder and run this command ===> __composer install__

5. Install MongoDB [Click Here](https://www.mongodb.com/download-center/community?jmp=docs)

6. Download MongoDB PHP extension for wamp : 
   
   * Open this link : [Click Here](https://www.mongodb.com/download-center/community?jmp=docs)
   
   * In "DLL List" section, select your version (must be thread safe) - *exemple: PHP 7.1 Thread Safe (TS) x64*
   
7. Extract zip file and move "php_mongodb.dll" to Wamp extensions folder

    * C:\wamp64\bin\php\php_VERSION\ext

8. In your wamp, Open "php.ini" , Search for " Windows Extensions ", and add this line : 
 
    * > extension=php_mongodb.dll
   
9. Restart your apache server... and check if mongodb exists in the list, run ===> __php -m__
    
    

## NOTES

- To list all records in MongoDB shell, run:

   db.COLLECTION_NAME_HERE.find().pretty()

   *replace COLLECTION_NAME_HERE with your collection*
   
- To remove all records in MongoDB shell, run:

   db.user.remove({})

   *The argument to remove() is a filter document, so passing in an empty document means 'remove all'*
   
   *read more [click here](https://stackoverflow.com/questions/46368368/deleting-all-records-of-a-collection-in-mongodb-shell/46368397)*

- How To fix CORS problem in Laravel - Angular : [Click Here](http://angularpluslaravel.com/how-to-solve-no-access-control-allow-origin-header-is-present-on-the-requested-resource-error-in-laravel/)
