<?php


class SimpleRouter
{

    public static function rout(){
        $routes = self::getRoutes();
        $url = $_SERVER['REQUEST_URI'];
        foreach ($routes as $key => $value) {
            if($url == $key){
                list($controller, $action) = explode("@",$value);
                $instance = new $controller();
                $instance -> $action();
            }

        }
    }


    public static function getRoutes(){

        return $array = [
            "/employees" => "Employees@getEmployees",
            "/countries" => "Countries@getCountries",
            "/departments" => "Departments@getDepartments",
            "/jobs" => "Jobs@getJobs",
            "/locations" => "Locations@getLocations",
            "/regions" => "Regions@getRegions",
            "/history" => "History@getHistory",
        ];
    }
}