# How to apply Prepopulated database in cross platform (hybrid) applications-- Cordova (and IONIC, Phonegap) with Visual Studio 2015
When developing a cross platform (Android, IOS) application, we often need to have a relatively large prepopulated database. However, it  is almost impossible to make prepopulated DB in WebSQL (If we insert data in WebSQL, we cannot deploy it).

Here is one answer to create prepolulated DB in hybrid application.

You need two plugins.
1) Cordova-sqlite-evcore-extbuild-free
2) cordova-plugin-dbcopy

And you need to make prepopulated DB by using "DB Browser for SQLite"
->http://sqlitebrowser.org/


Visual Studio 2013/2015 with Cordova plugins, but  . 

SQLite

Most answers on the internet point are here or here. However these links always start with "copy your prepopulated database to the assets folder". In my Visual Studio project, there is no assets folder. This is what I have: 



Here is a page for webSQL and SQlite

At present prepopulated DB for WebSQL is almost impossible.
Therefore, we have to add SQlite plugin.

Here is a method and rough codes for prepopulated DB in hybrid applications.

