<?php
//header("Content-Type: text/html; charset=utf-8");
//header('Access-Control-Allow-Origin', '*');
//header('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
//header('Content-Type','application/json');
include_once "config.php";

function __autoload($name){
    include_once "services/".$name.".class.php";
}

$router = new Router();

$router -> get('/employees', 'Employees@getEmployees');
$router -> get('/employee/(\\d+)', 'Employees@getEmployee');

$router -> get('/countries', 'Countries@getCountries');
$router -> get('/countrie/(\\w+)', 'Countries@getCountrie');

$router -> get('/departments', 'Departments@getDepartments');
$router -> get('/department/(\\d+)', 'Departments@getDepartment');


$router -> get('/jobs', 'Jobs@getJobs');
$router -> get('/job/(\\w+)', 'Jobs@getJob');
$router -> post('/job/add', 'Jobs@addJob');
$router -> post('/job/update', 'Jobs@updateJob');


$router -> get('/locations', 'Locations@getLocations');
$router -> get('/location/(\\d+)', 'Locations@getLocation');
$router -> post('/location/add', 'Locations@addLocation');
$router -> post('/location/update', 'Locations@updateLocation');

$router -> get('/regions', 'Regions@getRegions');
$router -> get('/region/(\\d+)', 'Regions@getRegion');
$router -> post('/region/add', function (){
    $region = new Regions();
    $region->addRegion();
});

$router -> get('/history', 'History@getHistory');

$router -> get('/persons', 'Person@getPersons');
$router -> get('/person/(\\d+)', 'Person@getPerson');
$router -> post('/person/add', 'Person@addPerson');
$router -> post('/person/update', 'Person@updatePerson');

$router->run();

?>