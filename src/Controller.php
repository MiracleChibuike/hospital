<?php class Controller
{
    public function __construct(private Gateway $gateway) {}

    public function processRequest(string $method): void
    {
        if ($method === "GET") {
            echo json_encode($this->gateway->getAll());
        } else {
            $this->methodNotAllowed("GET");
        }
    }

    private function methodNotAllowed(string $allowed_method): void
    {
        http_response_code(405);
        header("Allow: $allowed_method");
    }
}
