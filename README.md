# How-to-deploy-existing-Data-file-in-WebSQL (Hybrid, Cross platform application, Phonegap, Angular/IONIC, Visual Studio)
WebSQL is quite useful for managing data. However, WebSQL does not make DB files in WWW/folder, so we cannot deploy existing data.
(Even if we already have a complete data file on our PC, we cannot package it)   

<p>
Here is one answer to deploy existing data in hybrid application (WebSQL ver) without using DB server.
</p>
<p>

You need the followings.<br><b>
1) json files under WWW/folder<br>
2) add $http in your controller <br>e.g.,like this->.controller('LicenseCtrl', function ($scope,XXX, XXX, $http, $state) {<br></b>
->we can get local files by using "$http.get('assets/AAA.json')" <br>
*"assets" is a sample name. you can change the name as you wish. However, the folder should be located under WWW/folder

At first 

And you need to make prepopulated DB by using "DB Browser for SQLite"<br>
->http://sqlitebrowser.org/<br>
(you'll get db file such as "words.db")<br>
->This db file is located on www/ folder<br>

Since we have to debug our project on Visual Studio (e.g., ripple our projects), WebSQL is also necesarry to confirm the implemented functions on Visual Studio. So please remain WebSQL functions if you already created!<br>
->You can check your functions by using WebSQL (Visual Studio, ripple). After completing debugs, you'll check the functions on your actual device(iPhone or Android).  <br>
(WebSQL and SQlite are quite similar, so I strongly recommend use both methods in your hybrid (cross platform application)).<br>

In the source codes, there are two simple steps.<br>
<b>1) Check environmemt<br>
 2) dbcopy();</b><br>
*After copying db file, you can use SQLs in normal way. <br>

