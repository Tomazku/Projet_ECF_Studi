$hostname = "localhost"; // Remplacez par l'adresse de votre serveur MySQL
$username = "thomas";
$password = "Bonjour123";
$dbname = "base_de_donnees_ECF";

$conn = mysqli_connect($hostname, $username, $password, $dbname);

if (!$conn) {
    die("Échec de la connexion à la base de données: " . mysqli_connect_error());
}
