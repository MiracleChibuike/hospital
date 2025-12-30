<?php
require_once 'User.php';
class Admin extends User
{
  private $adminLevel;

  public function __construct($username, $email, $adminLevel)
  {
    parent::__construct($username, $email);
    $this->adminLevel = $adminLevel;
  }

  public function getAdminLevel()
  {
    return $this->adminLevel;
  }

  public function setAdminLevel($adminLevel)
  {
    $this->adminLevel = $adminLevel;
  }

  public function displayInfo()
  {
    parent::displayInfo();
    echo "Admin Level: " . $this->adminLevel . "\n";
  }
}
