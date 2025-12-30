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

  public function setAdminRole($adminId, $adminRole)
  {
    $sql = "UPDATE " . $this->table . " SET admin_role = :admin_role WHERE admin_id = :admin_id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindValue(":admin_id", $adminId, PDO::PARAM_STR);
    $stmt->bindValue(":admin_role", $adminRole, PDO::PARAM_STR);
    return $stmt->execute();
  }

  public function register(array $adminData, $role): bool
  {
    if ($role !== 'superadmin') {
      // throw new Exception("Only superadmins can create new admins.");
      return "Only superadmins can create new admins.";
    } else {

      $sql = "INSERT INTO " . $this->table . " (firstname, lastname, email, password, username, gender, admin_role) VALUES (:firstname, :lastname, :email, :password, :username, :gender, :admin_role)";

      $stmt = $this->conn->prepare($sql);

      $stmt->bindValue(":firstname", $adminData['firstname'], PDO::PARAM_STR);
      $stmt->bindValue(":lastname", $adminData['lastname'], PDO::PARAM_STR);
      $stmt->bindValue(":email", $adminData['email'], PDO::PARAM_STR);
      $stmt->bindValue(":password", password_hash($adminData['password'], PASSWORD_DEFAULT), PDO::PARAM_STR);
      $stmt->bindValue(":username", $adminData['username'], PDO::PARAM_STR);
      $stmt->bindValue(":gender", $adminData['gender'], PDO::PARAM_STR);
      $stmt->bindValue(":admin_role", $adminData['admin_role'], PDO::PARAM_STR);

      return $stmt->execute();
    }
  }





  public function deleteAdmin($adminId, $role): bool
  {
    if ($role !== 'superadmin') {
      throw new Exception("Only superadmins can delete admins.");
    } else {
      $sql = "DELETE FROM " . $this->table . " WHERE admin_id = :admin_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindValue(":admin_id", $adminId, PDO::PARAM_STR);
      return $stmt->execute();
    }
  }
}
