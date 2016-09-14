# How-to-deploy-existing-Data-file-in-WebSQL (Hybrid, Cross platform application, Phonegap, Angular/IONIC, Visual Studio)
WebSQL is quite useful for managing data. However, WebSQL does not make DB files in WWW/folder, so we cannot deploy existing data.
(Even if we already have a complete data file on our PC, we cannot package it)   

<p>
Here is one answer to deploy existing data in hybrid application (WebSQL ver) without using DB server.
</p>
<p>

You need only two steps.<br><b>
1) Add json files under WWW/folder<br>
2) Add $http in your controller <br>e.g.,like this->.controller('LicenseCtrl', function ($scope,XXX, XXX, $http, $state) {<br></b>
->we can get local files by using "$http.get('assets/AAA.json')" <br>
*"assets" is a sample name. you can change the name as you wish. However, the folder should be located under WWW/folder

At first you have to change your data into json files.
Many people are familiar with Excel and making spreadsheets, so it is easy to convert excel file to json.
->This site offers a easy macro (http://stabucky.com/wp/archives/7658)
*Be careful when your data has "<b>quotation marks</b>" because JSON file also uses quotation marks for delimiter.

Second, you access your local files via $http.get

