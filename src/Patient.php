<?php
class Patient extends User
{

  public function __construct(Database $database)
  {
    parent::__construct($database);
    $this->setTable('patient');
  }

  public function register(array $patientData): bool | string
  {
    $sql = "INSERT INTO " . $this->table . " (firstname, lastname, email, password, gender, date_of_birth, phone) VALUES (:firstname, :lastname, :email, :password, :gender, :date_of_birth, :phone)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":firstname", Database::sanitizeInput($patientData['firstname']), PDO::PARAM_STR);
    $stmt->bindValue(":lastname", Database::sanitizeInput($patientData['lastname']), PDO::PARAM_STR);
    $stmt->bindValue(":email", Database::sanitizeInput($patientData['email']), PDO::PARAM_STR);
    $stmt->bindValue(":password", password_hash(Database::sanitizeInput($patientData['password']), PASSWORD_DEFAULT), PDO::PARAM_STR);
    $stmt->bindValue(":gender", Database::sanitizeInput($patientData['gender']), PDO::PARAM_STR);
    $stmt->bindValue(":date_of_birth", Database::sanitizeInput($patientData['date_of_birth']), PDO::PARAM_STR);
    $stmt->bindValue(":phone", Database::sanitizeInput($patientData['phone']), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function getMedicalHistory($patientId): bool | array
  {
    $sql = "SELECT * FROM medical_info WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function addMedicalHistory($patientId, array $medicalData): bool
  {
    $sql = "INSERT INTO medical_info (patient_id, allergies, current_medications, past_illnesses, surgeries, family_history, current_conditions, genotype, blood_group, blood_pressure, blood_sugar) VALUES (:patient_id, :allergies, :current_medications, :past_illnesses, :surgeries, :family_history, :current_conditions, :genotype, :blood_group, :blood_pressure, :blood_sugar)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    $stmt->bindValue(":allergies", Database::sanitizeInput($medicalData['allergies']), PDO::PARAM_STR);
    $stmt->bindValue(":current_medications", Database::sanitizeInput($medicalData['current_medications']), PDO::PARAM_STR);
    $stmt->bindValue(":past_illnesses", Database::sanitizeInput($medicalData['past_illnesses']), PDO::PARAM_STR);
    $stmt->bindValue(":surgeries", Database::sanitizeInput($medicalData['surgeries']), PDO::PARAM_STR);
    $stmt->bindValue(":family_history", Database::sanitizeInput($medicalData['family_history']), PDO::PARAM_STR);
    $stmt->bindValue(":current_conditions", Database::sanitizeInput($medicalData['current_conditions']), PDO::PARAM_STR);
    $stmt->bindValue(":genotype", Database::sanitizeInput($medicalData['genotype']), PDO::PARAM_STR);
    $stmt->bindValue(":blood_group", Database::sanitizeInput($medicalData['blood_group']), PDO::PARAM_STR);
    $stmt->bindValue(":blood_pressure", Database::sanitizeInput($medicalData['blood_pressure']), PDO::PARAM_STR);
    $stmt->bindValue(":blood_sugar", Database::sanitizeInput($medicalData['blood_sugar']), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function updateMedicalHistory($patientId, array $medicalData): bool
  {
    $sql = "UPDATE medical_info SET allergies = :allergies, current_medications = :current_medications, past_illnesses = :past_illnesses, surgeries = :surgeries, family_history = :family_history, current_conditions = :current_conditions, genotype = :genotype, blood_group = :blood_group, blood_pressure = :blood_pressure, blood_sugar = :blood_sugar WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":allergies", Database::sanitizeInput($medicalData['allergies']), PDO::PARAM_STR);
    $stmt->bindValue(":current_medications", Database::sanitizeInput($medicalData['current_medications']), PDO::PARAM_STR);
    $stmt->bindValue(":past_illnesses", Database::sanitizeInput($medicalData['past_illnesses']), PDO::PARAM_STR);
    $stmt->bindValue(":surgeries", Database::sanitizeInput($medicalData['surgeries']), PDO::PARAM_STR);
    $stmt->bindValue(":family_history", Database::sanitizeInput($medicalData['family_history']), PDO::PARAM_STR);
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

  public function getPatientById($patientId): bool | array
  {
    $sql = "SELECT * FROM " . $this->table . " WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function deletePatient($patientId, $role, $deletedBy): bool
  {
    $roles = ['admin', 'superadmin'];
    if (!in_array($role, $roles)) {
      throw new Exception("Only admins and superadmins can delete patients.");
    }

    $sql = "UPDATE " . $this->table . " SET deleted = 1, deleted_by = :deleted_by WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    $stmt->bindValue(":deleted_by", Database::sanitizeInput($deletedBy), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function updateProfile($patientId, array $profileData): bool
  {
    $sql = "UPDATE " . $this->table . " SET nationality = :nationality, state_of_origin = :state_of_origin, LGA = :LGA, communication_channel = :communication_channel WHERE patient_id = :patient_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":nationality", Database::sanitizeInput($profileData['nationality']), PDO::PARAM_STR);
    $stmt->bindValue(":state_of_origin", Database::sanitizeInput($profileData['state_of_origin']), PDO::PARAM_STR);
    $stmt->bindValue(":LGA", Database::sanitizeInput($profileData['LGA']), PDO::PARAM_STR);
    $stmt->bindValue(":communication_channel", Database::sanitizeInput($profileData['communication_channel']), PDO::PARAM_STR);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    return $stmt->execute();
  }
}
