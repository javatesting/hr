<?php

class Person extends BaseController
{

  public function getPersons()
  {
      $sql = 'select * from persons';
      print $this->getEntities($sql);
  }

	/*
	 public function getRegion($id)
    {
		 $sql = 'select * from regions where region_id='.$id;
        print $this->getEntityById($sql);
    }

    public function addRegion(){
        $sql = "insert into regions (region_id, region_name)
                values              (:region_id, :region_name)";

        $this -> inserOrUpdatetRecord($sql);
    }
*/
}