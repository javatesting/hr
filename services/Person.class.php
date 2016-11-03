<?php

class Person extends BaseController
{

  public function getPersons()
  {
      $sql = 'select * from persons';
      print $this->getEntities($sql);
  }

	
	 public function getPerson($id)
    {
		 $sql = 'select * from persons where person_id='.$id;
        print $this->getEntityById($sql);
    }

    public function addPerson(){
        $sql = "insert into persons (name, last_name, age)
                values              (:name, :last_name, :age)";

        $this -> inserOrUpdatetRecord($sql);
    }

    public function updatePerson() {

        $sql = "update persons
                set  name=:name,
                last_name=:last_name,
                age=:age
                where person_id=:person_id";
        $this -> inserOrUpdatetRecord($sql);

    }
}