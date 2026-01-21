<?php
class Appointment
{
  protected  PDO $conn;

  protected $table = "appointment";

  public function __construct(Database $database)
  {
    $this->conn = $database->getConnection();
  }

  public function bookAppointment(array $appointmentData): bool | string
  {
    $sql = "INSERT INTO " . $this->table . " (patient_id, appointment_date, appointment_time, appointment_type, visit_reason) VALUES (:patient_id, :appointment_date, :appointment_time, :appointment_type, :visit_reason)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($appointmentData['patient_id']), PDO::PARAM_STR);
    $stmt->bindValue(":appointment_date", Database::sanitizeInput($appointmentData['appointment_date']), PDO::PARAM_STR);
    $stmt->bindValue(":appointment_time", Database::sanitizeInput($appointmentData['appointment_time']), PDO::PARAM_STR);
    $stmt->bindValue(":appointment_type", Database::sanitizeInput($appointmentData['appointment_type']), PDO::PARAM_STR);
    $stmt->bindValue(":visit_reason", Database::sanitizeInput($appointmentData['visit_reason']), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function getAppointmentsByPatientId($patientId): bool | array
  {
    $sql = "SELECT * FROM " . $this->table . " WHERE patient_id = :patient_id AND deleted = 0";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":patient_id", Database::sanitizeInput($patientId), PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function approveAppointment($appointmentId): bool
  {
    $sql = "UPDATE " . $this->table . " SET status = 'approved' WHERE appointment_id = :appointment_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":appointment_id", Database::sanitizeInput($appointmentId), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function cancelAppointment($appointmentId): bool
  {
    $sql = "UPDATE " . $this->table . " SET status = 'canceled' WHERE appointment_id = :appointment_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":appointment_id", Database::sanitizeInput($appointmentId), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function rescheduleAppointment($appointmentId, $newDate, $newTime): bool
  {
    $sql = "UPDATE " . $this->table . " SET appointment_date = :new_date, appointment_time = :new_time WHERE appointment_id = :appointment_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":new_date", Database::sanitizeInput($newDate), PDO::PARAM_STR);
    $stmt->bindValue(":new_time", Database::sanitizeInput($newTime), PDO::PARAM_STR);
    $stmt->bindValue(":appointment_id", Database::sanitizeInput($appointmentId), PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function getAllAppointments(): bool | array
  {
    $sql = "SELECT * FROM " . $this->table . " WHERE deleted = 0";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}
