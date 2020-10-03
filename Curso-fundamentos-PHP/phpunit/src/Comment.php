<?php

namespace App;

class Comment {

    public $like_count = 0;

    public function like($usuario) : int {
        return $this->like_count;
    }
    
}


?>