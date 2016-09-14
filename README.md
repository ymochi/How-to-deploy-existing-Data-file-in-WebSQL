# How to apply Prepopulated database in cross platform (hybrid) applications-- Cordova (and IONIC, Phonegap) with Visual Studio 2015
When developing a cross platform (Android, IOS) application, we often need to have a relatively large prepopulated database. However, it  is almost impossible to make prepopulated DB in WebSQL (If we insert data in WebSQL, we cannot deploy it).

Here is one answer to create prepolulated DB in hybrid application (SQlite ver).

You need two plugins.<b>
1) Cordova-sqlite-evcore-extbuild-free
2) cordova-plugin-dbcopy</b>
->Apply these two plugins in Visual Studio (please open config.xml and you can easily add these plugins)

And you need to make prepopulated DB by using "DB Browser for SQLite"
->http://sqlitebrowser.org/
(you'll get db file such as "words.db")
->This db file is located on www/ folder

Since we have to debug our project on Visual Studio (e.g., ripple our projects), WebSQL is also necesarry to confirm the implemented functions on Visual Studio. So please remain WebSQL functions if you already created!
->You can check your functions by using WebSQL (Visual Studio, ripple). After completing debugs, you'll check the functions on your actual device(iPhone or Android).  
(WebSQL and SQlite are quite similar, so I strongly recommend use both methods in your hybrid (cross platform application)).

In the source codes, there are two simple steps.
<b>1) Check environmemt
 2) dbcopy();</b>
*After copying db file, you can use SQLs in normal way. 

