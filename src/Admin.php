<?php
require_once 'User.php';
class Admin extends User
{


  private $adminRole;
  // private $adminId;

  public function __construct()
  {
    parent::__construct();
    $this->setTable('admin');
  }

  public function getAdminRole($adminId): bool | string
  {
    $sql = "SELECT admin_role FROM " . $this->table . " WHERE admin_id = :admin_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":admin_id", $adminId, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function register(array $adminData, $role): bool
  {
    if ($role !== 'superadmin') {
      // throw new Exception("Only superadmins can create new admins.");
      return "Only superadmins can create new admins.";
    } else {

      $sql = "INSERT INTO " . $this->table . " (firstname, lastname, email, password, username, gender, admin_role) VALUES (:firstname, :lastname, :email, :password, :username, :gender, :admin_role)";

      $stmt = $this->conn->prepare($sql);

      $stmt->bindValue(":firstname", Database::sanitizeInput($adminData['firstname']), PDO::PARAM_STR);
      $stmt->bindValue(":lastname", Database::sanitizeInput($adminData['lastname']), PDO::PARAM_STR);
      $stmt->bindValue(":email", Database::sanitizeInput($adminData['email']), PDO::PARAM_STR);
      $stmt->bindValue(":password", password_hash(Database::sanitizeInput($adminData['password']), PASSWORD_DEFAULT), PDO::PARAM_STR);
      $stmt->bindValue(":username", Database::sanitizeInput($adminData['username']), PDO::PARAM_STR);
      $stmt->bindValue(":gender", Database::sanitizeInput($adminData['gender']), PDO::PARAM_STR);
      $stmt->bindValue(":admin_role", Database::sanitizeInput($adminData['admin_role']), PDO::PARAM_STR);

      return $stmt->execute();
    }
  }


  public function deleteAdmin($adminId, $role, $deletedBy): bool
  {
    if ($role !== 'superadmin') {
      throw new Exception("Only superadmins can delete admins.");
    } else {
      $sql = "UPDATE " . $this->table . " SET deleted = 1, deleted_by = :deleted_by WHERE admin_id = :admin_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindValue(":admin_id", Database::sanitizeInput($adminId), PDO::PARAM_STR);
      $stmt->bindValue(":deleted_by", Database::sanitizeInput($deletedBy), PDO::PARAM_STR);
      return $stmt->execute();
    }
  }

  public function getAllAdmins(): array
  {
    $sql = "SELECT admin_id, firstname, lastname, email, username, gender, image, emergency_contact_id, admin_role, created_at, last_login FROM " . $this->table;
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function updateAdmin($adminId, array $adminData, $role): bool
  {
    if ($role !== 'superadmin') {
      throw new Exception("Only superadmins can update admin details.");
    } else {
      $sql = "UPDATE " . $this->table . " SET firstname = :firstname, lastname = :lastname, email = :email, gender = :gender WHERE admin_id = :admin_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindValue(":admin_id", Database::sanitizeInput($adminId), PDO::PARAM_STR);
      $stmt->bindValue(":firstname", Database::sanitizeInput($adminData['firstname']), PDO::PARAM_STR);
      $stmt->bindValue(":lastname", Database::sanitizeInput($adminData['lastname']), PDO::PARAM_STR);
      $stmt->bindValue(":email", Database::sanitizeInput($adminData['email']), PDO::PARAM_STR);
      $stmt->bindValue(":gender", Database::sanitizeInput($adminData['gender']), PDO::PARAM_STR);
      return $stmt->execute();
    }
  }

  public function setAdminRole($adminId, $newRole, $role): bool
  {
    if ($role !== 'superadmin') {
      throw new Exception("Only superadmins can change admin roles.");
    } else {
      $sql = "UPDATE " . $this->table . " SET admin_role = :admin_role WHERE admin_id = :admin_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindValue(":admin_id", Database::sanitizeInput($adminId), PDO::PARAM_STR);
      $stmt->bindValue(":admin_role", Database::sanitizeInput($newRole), PDO::PARAM_STR);
      return $stmt->execute();
    }
  }
}
