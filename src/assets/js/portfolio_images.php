<?php
    //get the path of images directory 
    $variable = $_POST['url'];    
    $img_dir = $variable . "/";

    //loop to bring all images inside directory
    foreach(glob($img_dir . '*.jpg') as $images) {
        echo '<img src="'.$img_dir.$images.'">';     
    }    

    ?>