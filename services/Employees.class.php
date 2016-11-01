<?php

class Employees extends BaseController
{

  public function getEmployees() {
      $sql = 'select * from employees';
      print $this->getEntities($sql);
  }


	 public function getEmployee($id) {
      $sql = 'select * from employees where employee_id='.$id;
      print $this->getEntityById($sql);
  }

	
}