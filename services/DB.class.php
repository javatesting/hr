<?php

class DB
{
    public function openConnect()
    {
        try
        {
            $db = new PDO(DSN , USER, PASS);
            $db->exec("set names utf8");
            return $db;
        } catch (PDOException $e)
        {
            echo 'Подключение не удалось: ' . $e->getMessage();
        }
    }
}
