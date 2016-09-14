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
*"assets" is a sample name. you can change the name as you wish. However, the folder should be located under WWW/folder <br>
 <br>
At first you have to change your data into json files. <br>
Many people are familiar with Excel and making spreadsheets, so it is easy to convert excel file to json. <br>
->This site offers a easy macro (http://stabucky.com/wp/archives/7658) <br>
*Be careful when your data has "<b>quotation marks</b>" because JSON file also uses quotation marks for delimiter. <br>
e.g., <br>
[{"word":"absolute","word_family":"absolutely(ad)"} <br>
,{"word":"absorb","word_family":"be absorbed in<br>She was absorbed in the musical."}<br>
,{"word":"proclaim","word_family":"announce"}<br>
]<br>

Second, you access your local files via $http.get <br>

#<b>important</b><br>
This method has one big defect.<br>
Since $http.get reads local files and SQL inserts data one by one, it takes time to deploy all data.<br>
It depends on the data size, but you had better add a progress bar when you'll apply your data.<br>
(if you need to deploy large data (e.g., over 3000 records), you had better use sqlite)<br>
->see https://github.com/ymochi/prepopulated-DB-for-hybrid-applications

