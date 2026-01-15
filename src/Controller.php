<?php class Controller
{
    public function __construct() {}

    public static function processRequest(string $method): bool
    {
        $requestMethods = ["GET", "POST", "PUT", "DELETE"];

        if (!in_array($method, $requestMethods)) {
            return false;
        } else {
            return true;
        }
    }

    public static function methodNotAllowed(): void
    {
        http_response_code(405);
        echo json_encode(["message" => "Request Method Not Allowed"]);
    }

    public static function requestRespond(int $code, string $message, $data = null): void
    {
        // header("HTTP/1.0 " . $code . " " . $message);
        http_response_code($code);
        echo $data === null ? json_encode(["message" => $message]) : json_encode(["message" => $message, "data" => $data]);
    }

    public static function badRequest(): void
    {
        http_response_code(400);
        echo json_encode(["message" => "Bad Request"]);
    }

    public static function unauthorized(): void
    {
        http_response_code(401);
        echo json_encode(["message" => "Unauthorized"]);
    }

    public static function forbidden(): void
    {
        http_response_code(403);
        echo json_encode(["message" => "Forbidden"]);
    }

    public static function notFound(): void
    {
        http_response_code(404);
        header("Content-type: application/json; charset=UTF-8");
        echo json_encode(["message" => "Not Found"]);
        die();
    }
}
