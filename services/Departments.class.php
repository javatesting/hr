<?php

class Departments extends BaseController
{

    private $bindParam;
    private $SQL_ALL_DEPARTMENTS = 'SELECT * FROM departments';
    private $SQL_DEPARTMENT_BY_ID = 'SELECT * FROM departments WHERE department_id = ';
    private $SQL_DEPARTMENT_REMOVE = 'DELETE FROM departments WHERE department_id=:';



    public function getDepartments()
    {
		print $this->getEntities($this->SQL_ALL_DEPARTMENTS);

    }



    public function getDepartment($id)
    {
        print $this->getEntityById($this->SQL_DEPARTMENT_BY_ID.$id);
    }


	/*
    public function removeDepartaments($id){
        $sql = $this->SQL_DEPARTMENT_REMOVE.$this->bindParam;
        $this ->deleteRecord($sql, $this->bindParam, $id);
        $this->getDepartments();
    }
	*/

}