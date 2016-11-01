<?php

class Countries extends BaseController
{

  public function getCountries()
  {
      $sql = 'select * from countries';
	  print $this->getEntities($sql);
  }


	 public function getCountrie($id)
    {
		 $sql = "select * from countries where country_id = '$id'";
         print $this->getEntityById($sql);
    }
}