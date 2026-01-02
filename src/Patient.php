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

  public function getMedicalHistory($patientId): bool | array
  {
    $sql = "SELECT * FROM medical_info WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", $patientId, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function addMedicalHistory($patientId, array $medicalData): bool
  {
    $sql = "INSERT INTO medical_info (patient_id, allergies, current_medications, past_illnesses, surgeries, family_history, current_conditions, genotype, blood_group, blood_pressure, blood_sugar) VALUES (:patient_id, :allergies, :current_medications, :past_illnesses, :surgeries, :family_history, :current_conditions, :genotype, :blood_group, :blood_pressure, :blood_sugar)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", $patientId, PDO::PARAM_STR);
    $stmt->bindValue(":allergies", $medicalData['allergies'], PDO::PARAM_STR);
    $stmt->bindValue(":current_medications", $medicalData['current_medications'], PDO::PARAM_STR);
    $stmt->bindValue(":past_illnesses", $medicalData['past_illnesses'], PDO::PARAM_STR);
    $stmt->bindValue(":surgeries", $medicalData['surgeries'], PDO::PARAM_STR);
    $stmt->bindValue(":family_history", $medicalData['family_history'], PDO::PARAM_STR);
    $stmt->bindValue(":current_conditions", $medicalData['current_conditions'], PDO::PARAM_STR);
    $stmt->bindValue(":genotype", $medicalData['genotype'], PDO::PARAM_STR);
    $stmt->bindValue(":blood_group", $medicalData['blood_group'], PDO::PARAM_STR);
    $stmt->bindValue(":blood_pressure", $medicalData['blood_pressure'], PDO::PARAM_STR);
    $stmt->bindValue(":blood_sugar", $medicalData['blood_sugar'], PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function updateMedicalHistory($patientId, array $medicalData): bool
  {
    $sql = "UPDATE medical_info SET allergies = :allergies, current_medications = :current_medications, past_illnesses = :past_illnesses, surgeries = :surgeries, family_history = :family_history, current_conditions = :current_conditions, genotype = :genotype, blood_group = :blood_group, blood_pressure = :blood_pressure, blood_sugar = :blood_sugar WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":allergies", $medicalData['allergies'], PDO::PARAM_STR);
    $stmt->bindValue(":current_medications", $medicalData['current_medications'], PDO::PARAM_STR);
    $stmt->bindValue(":past_illnesses", $medicalData['past_illnesses'], PDO::PARAM_STR);
    $stmt->bindValue(":surgeries", $medicalData['surgeries'], PDO::PARAM_STR);
    $stmt->bindValue(":family_history", $medicalData['family_history'], PDO::PARAM_STR);
    $stmt->bindValue(":patient_id", $patientId, PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function getAllPatients($role): array
  {
    $roles = ['admin', 'superadmin', 'doctor', 'nurse', 'labtech', 'pharmacist', 'receptionist'];
    if (!in_array($role, $roles)) {
      throw new Exception("Unauthorized access to patient data.");
    }

    $sql = "SELECT * FROM " . $this->table . " WHERE deleted = 0";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getPatientById($patientId, $role): bool | string
  {
    $roles = ['admin', 'superadmin', 'doctor', 'nurse', 'labtech', 'pharmacist', 'receptionist'];
    if (!in_array($role, $roles)) {
      throw new Exception("Unauthorized access to patient data.");
    }

    $sql = "SELECT * FROM " . $this->table . " WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", $patientId, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function deletePatient($patientId, $role, $deletedBy): bool
  {
    $roles = ['admin', 'superadmin'];
    if (!in_array($role, $roles)) {
      throw new Exception("Unauthorized access to patient data.");
    }

    $sql = "UPDATE " . $this->table . " SET deleted = 1, deleted_by = :deleted_by WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", $patientId, PDO::PARAM_STR);
    $stmt->bindValue(":deleted_by", $deletedBy, PDO::PARAM_STR);
    return $stmt->execute();
  }
}
