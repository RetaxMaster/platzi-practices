<?php

class User {

    protected $name;

    public function poner_nombre($nombre) {
        $this->name = $nombre;
    }
    
}

$pablito = new User;
$pablito->poner_nombre("Pablito");

?>