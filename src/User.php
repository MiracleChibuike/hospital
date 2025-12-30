<?php class User extends Database
{

    private PDO $conn ;
    
    public function __construct(){

        $this->conn = $this->getConnection();
    }

    // public function __construct(Database $database)
    // {
    //     $this->conn = $database->getConnection();
    // }

    public function getByAPIKey(string $key): array | false
    {
        $sql = "SELECT * FROM user WHERE api_key = :api_key";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":api_key", $key, PDO::PARAM_STR);

        $stmt->execute();

        if ($stmt->rowCount() === 0) {
            return false;
        } else {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }
}
