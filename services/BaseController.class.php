<?php


class BaseController
{

    public $conn;

    function __construct()
    {
        $db = new DB();
        $this->conn = $db->openConnect();
    }

    public function getEntities($sql){
        $statement = $this->conn->prepare($sql);
        $statement->execute();

        $results=$statement->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($results);
    }

    public function getEntityById($sql) {
        $statement = $this->conn->prepare($sql);
        $statement->execute();

        $results=$statement->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($results);
    }

    public function deleteRecord($sql, $bindParam, $id){
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam($bindParam, $id);
        $stmt->execute();
    }
    
    public function inserOrUpdatetRecord($sql) {
        $arr = $this -> getRowHttpPostData();
        $stmt = $this->conn->prepare($sql);

        foreach ($arr as $key => &$value) {
            $stmt->bindParam(':'.$key, $value);
        }
        $stmt->execute();
    }
    
    private function getRowHttpPostData() {
        $data = file_get_contents('php://input');
        return json_decode($data, true);
    }
}