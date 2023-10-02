-- Table pour les voitures
CREATE TABLE Voitures (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Marque VARCHAR(255),
    Modele VARCHAR(255),
    Annee INT,
    Kilometrage INT,
    Carburant VARCHAR(50),
    BoiteDeVitesse VARCHAR(50),
    NombreDePorte INT,
    Couleur VARCHAR(50),
    PuissanceFiscale INT,
    TypeDeVehicule VARCHAR(50),
    Permis VARCHAR(50),
    PuissanceDIN INT,
    Photo LONGBLOB -- Utilisez le type de données approprié pour stocker les photos
);

-- Table pour les avis client
CREATE TABLE AvisClient (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NomClient VARCHAR(255),
    Note DECIMAL(2, 1), -- Utilisez DECIMAL pour stocker les notes avec une précision d'une décimale
    Commentaire TEXT
);

-- Table pour les horaires du magasin
CREATE TABLE HorairesMagasin (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    JourSemaine VARCHAR(50),
    HeureOuverture TIME,
    HeureFermeture TIME
);
