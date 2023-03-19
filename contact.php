
<?php


 
// /  if(isset($_FILES['image'])){
//     $tmpName = $_FILES['image']['tmp_name'];
//     $size = $_FILES['image']['size'];
//     $error = $_FILES['image']['error'];
//     $ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
//     move_uploaded_file($tmpName, './upload/image.'.$ext);
// }

function sendEmailWithAttachment() {
    // vérifier si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // obtenir les valeurs des champs du formulaire
        $name = $_POST['name'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $description = $_POST['description'];
        
        // traiter l'image téléchargée
        if ($_FILES['image']['error'] == UPLOAD_ERR_OK) {
            $filename = $_FILES['image']['name'];
            $tmpname = $_FILES['image']['tmp_name'];
            $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
            $upload_dir = "uploads/";
            $upload_file = $upload_dir . "image." . $ext;
            move_uploaded_file($tmpname, $upload_file);
        } else {
            die("Erreur lors du téléchargement de l'image.");
        }
        
        // construire l'email
        $to = "yacine.addaattou@hotmail.com";
        $subject = "Nouveau message de $name";
        $boundary = md5(time());
        
        // entête de l'email
        $headers = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
        
        // corps de l'email
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=utf-8\r\n";
        $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body .= "Nom: $name\r\n";
        $body .= "E-mail: $email\r\n";
        $body .= "Numéro de téléphone: $number\r\n";
        $body .= "Description: $description\r\n\r\n";
        
        // pièce jointe
        $attachment = chunk_split(base64_encode(file_get_contents($upload_file)));
        $filetype = mime_content_type($upload_file);
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $filetype; name=\"$filename\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$filename\"\r\n\r\n";
        $body .= "$attachment\r\n";
        $body .= "--$boundary--";
        
        // envoyer l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Le message a été envoyé avec succès.";
        } else {
            echo "Une erreur est survenue lors de l'envoi du message.";
        }
        
        // supprimer le fichier téléchargé du serveur
        unlink($upload_file);
    }
}
?>

  






