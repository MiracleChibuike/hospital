<?php
class Patient extends User
{

  public function __construct()
  {
    parent::__construct();
    $this->setTable('patient');
  }

  public function register(array $patientData): bool | string
  {
    $sql = "INSERT INTO " . $this->table . " (firstname, lastname, email, username, password, gender, date_of_birth, phone) VALUES (:firstname, :lastname, :email, :username, :password, :gender, :date_of_birth, :phone)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":firstname", $patientData['firstname'], PDO::PARAM_STR);
    $stmt->bindValue(":lastname", $patientData['lastname'], PDO::PARAM_STR);
    $stmt->bindValue(":email", $patientData['email'], PDO::PARAM_STR);
    $stmt->bindValue(":username", $patientData['username'], PDO::PARAM_STR);
    $stmt->bindValue(":password", password_hash($patientData['password'], PASSWORD_DEFAULT), PDO::PARAM_STR);
    $stmt->bindValue(":gender", $patientData['gender'], PDO::PARAM_STR);
    $stmt->bindValue(":date_of_birth", $patientData['date_of_birth'], PDO::PARAM_STR);
    $stmt->bindValue(":phone", $patientData['phone'], PDO::PARAM_STR);
    return $stmt->execute();
  }
}
