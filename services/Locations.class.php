<?php

class Locations extends BaseController
{

  public function getLocations()
  {
      $sql = 'select * from locations';
      print $this->getEntities($sql);
  }

    public function getLocation($id)
    {
        $sql = 'select * from locations where location_id = '.$id;
        print $this->getEntityById($sql);
    }
    
    public function addLocation() {
        $sql = "insert into locations ( location_id,  street_address,  postal_code,  city,  state_province,  country_id)
                values                (:location_id, :street_address, :postal_code, :city, :state_province, :country_id)";

        $this -> inserOrUpdatetRecord($sql);
    }

    public function updateLocation() {

        $sql = "update locations
                set  street_address=:street_address,
                postal_code=:postal_code, city=:city,
                state_province=:state_province,
                country_id=:country_id
                where location_id=:location_id";
        $this -> inserOrUpdatetRecord($sql);

    }
}