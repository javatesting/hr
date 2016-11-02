<?php

class Jobs extends BaseController
{

  public function getJobs()
  {
      $sql = 'select * from jobs';
      print $this->getEntities($sql);
  }

 public function getJob($id)
    {
		$sql = "select * from jobs where job_id = '$id'";
        print $this->getEntityById($sql);
    }

	 public function addJob() {
        $sql = "insert into jobs ( job_id,  job_title,  min_salary,  max_salary)
                values           (:job_id, :job_title, :min_salary, :max_salary)";

        $this -> inserOrUpdatetRecord($sql);
    }

    public function updateJob() {

        $sql = "update jobs
                set job_id=:job_id,
				job_title=:job_title,
				min_salary=:min_salary,
                max_salary=:max_salary,
                where job_id=:job_id";
        $this -> inserOrUpdatetRecord($sql);

    }


}