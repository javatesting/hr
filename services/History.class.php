<?php

class History extends BaseController
{

  public function getHistory()
  {
      $sql = 'select * from job_history';
      print $this->getEntities($sql);
  }


}