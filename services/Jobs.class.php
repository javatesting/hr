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

}