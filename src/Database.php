<?php
class Database
{
    private ?PDO $conn = null;
    private string $host;
    private string $name;
    private string $user;
    private string $password;

    public function __construct(
        $host,
        $name,
        $user,
        $password
    ) {
        $this->host = $host;
        $this->name = $name;
        $this->user = $user;
        $this->password = $password;
    }
    public function getConnection(): ?PDO
    {
        try {
            if ($this->conn === null) {
                $this->conn = new PDO("mysql:host=$this->host;dbname={$this->name}", $this->user, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
                $this->conn->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);
            }

            return $this->conn;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            return null;
        }
    }

    public static function sanitizeInput(string $input): string
    {
        return htmlspecialchars(stripcslashes(strip_tags(trim($input))));
    }
}
