<?php class User extends Database
{

    protected  PDO $conn;

    protected $table;

    public function __construct()
    {
        $this->conn = $this->getConnection();
    }

    // public function __construct(Database $database)
    // {
    //     $this->conn = $database->getConnection();
    // }

    public static function getByAPIKey(string $key): bool
    {
        if ($_SESSION['xToken'] === $key) {
            return true;
        } else {
            return false;
        }
    }

    protected function setTable($table)
    {
        $this->table = $table;
    }

    public function login($email, $password): bool | array
    {
        $email = $this->sanitizeInput($email);
        $password = $this->sanitizeInput($password);

        $sql = "SELECT * FROM " . $this->table . " WHERE email = :email AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return $user;
        } else {
            return false;
        }
    }

    private function updateLastLogin($userId): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "UPDATE " . $this->table . " SET last_login = NOW() WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function changePassword($userId, $newPassword, $oldPassword): bool | null
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $newPassword = $this->sanitizeInput($newPassword);
        $oldPassword = $this->sanitizeInput($oldPassword);

        if (!$this->confimPassword($userId, $oldPassword)) {
            return Controller::requestRespond(400, "Old password is incorrect.");
        } else {


            $sql = "UPDATE " . $this->table . " SET password = :password WHERE " . $user_id . " = :user_id AND deleted = 0";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
            $stmt->bindValue(":password", password_hash($newPassword, PASSWORD_DEFAULT), PDO::PARAM_STR);
            return $stmt->execute();
        }
    }

    private function confimPassword($userId, $password): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT password FROM " . $this->table . " WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return true;
        } else {
            return false;
        }
    }

    public function uploadProfileImage($userId, $imagePath): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "UPDATE " . $this->table . " SET image = :image WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->bindValue(":image", $imagePath, PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function getProfileImage($userId): bool | string
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT image FROM " . $this->table . " WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserById($userId): bool | string
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT * FROM " . $this->table . " WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByEmail($email): bool | string
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE email = :email AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByUsername($username): bool | string
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE username = :username AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":username", $username, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createEmergencyContact(array $contactData, $userId): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "INSERT INTO emergency_contact (" . $user_id . ", firstname, lastname, relationship, phone, email, gender,address) VALUES (:user_id, :firstname, :lastname, :relationship, :phone, :email, :gender, :address)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->bindValue(":firstname", $contactData['firstname'], PDO::PARAM_STR);
        $stmt->bindValue(":lastname", $contactData['lastname'], PDO::PARAM_STR);
        $stmt->bindValue(":relationship", $contactData['relationship'], PDO::PARAM_STR);
        $stmt->bindValue(":phone", $contactData['phone'], PDO::PARAM_STR);
        $stmt->bindValue(":email", $contactData['email'], PDO::PARAM_STR);
        $stmt->bindValue(":gender", $contactData['gender'], PDO::PARAM_STR);
        $stmt->bindValue(":address", $contactData['address'], PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function assignEmergencyContactId($userId, $contactId): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "UPDATE " . $this->table . " SET emergency_contact_id = :contact_id WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->bindValue(":contact_id", $contactId, PDO::PARAM_STR);
        return $stmt->execute();
    }

    // The User ID here can be either admin_id or patient_id based on the user type
    public function getEmergencyContact($userId): bool | string
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT * FROM emergency_contact WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getLastLogin($userId): bool | string
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT last_login FROM " . $this->table . " WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function checkEmailExists($email): bool
    {
        $sql = "SELECT COUNT(*) FROM " . $this->table . " WHERE email = :email";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        $count = $stmt->fetchColumn();
        return $count > 0;
    }

    public function checkUsernameExists($username): bool
    {
        $sql = "SELECT COUNT(*) FROM " . $this->table . " WHERE username = :username";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":username", $username, PDO::PARAM_STR);
        $stmt->execute();
        $count = $stmt->fetchColumn();
        return $count > 0;
    }



    public function passwordCheck($password)
    {
        $pattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';
        return preg_match($pattern, $password);
    }

    public function passwordMatch($password, $confirmPassword)
    {
        return $password === $confirmPassword;
    }

    public function validateEmail($email)
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public function verifyEmail($userId): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "UPDATE " . $this->table . " SET email_verified = 1 WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function isEmailVerified($userId): bool
    {
        $user_id = $this->table === 'admin' ? 'admin_id' : 'patient_id';

        $sql = "SELECT email_verified FROM " . $this->table . " WHERE " . $user_id . " = :user_id AND deleted = 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":user_id", $userId, PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return isset($result['email_verified']) && $result['email_verified'] == 1;
    }

    public function logout($userId): void
    {
        $this->updateLastLogin($userId);
        session_unset();
        session_destroy();
    }
}
