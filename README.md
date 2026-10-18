# Lancer le projet (~10 minutes) :

1) Installez Visual Studio Code
2) Installez Node
3) Ouvrez le dossier extrait de son archive contenant le projet dans Visual Studio Code
4) Ouvrez un nouveau terminal
5) Exécutez la commande ``npm i --save-dev electron`` dans ce dernier
6) Exécutez la commande ``npm start``

[Plus d'informations concernant Electron.js](https://www.electronjs.org/)

# Compiler le projet (~1 minute) :

1) Ouvrez le terminal courant ou ouvrez-en un nouveau
2) Exécutez la commande ``npm i --save-dev electron-builder`` dans ce dernier
3) Exécutez la commande ``npm run build``

# Point important :
Le dossier **.online/** contient le contenu qui se doit d'être hébergé par un tiers. Dans le code actuel, le contenu de **.online/** est déjà hébergé dans un domaine [Netlify](https://netlify.com/) sous cette URL :
https://ascensionz-online.netlify.app/

# Créer le fichier de distribution (optionnel) :

[Plus d'informations concernant Nebula](https://github.com/dscalzi/Nebula)

1) Ouvrez un terminal dans **Nebula/**
2) Exécutez la commande ``npm i`` dans ce dernier
3) Créez un fichier **.env** dans **Nebula/** et ajoutez-y ce code :
```ini
JAVA_EXECUTABLE=C:\Program Files (x86)\Common Files\Oracle\Java\javapath\java.exe
ROOT=F:\Nebula\workspace
BASE_URL=https://ascensionz-online.netlify.app/
HELIOS_DATA_FOLDER=C:\Users\user\AppData\Roaming\AscensionZ Launcher
```
4) Modifiez si nécessaire ``JAVA_EXECUTABLE`` afin d'y mettre le chemin absolu de votre exécutable java.
5) De même pour ``HELIOS_DATA_FOLDER`` où il faudra saisir le chemin absolu du dossier **AscensionZ Launcher** dans votre **AppData** (``Win + R`` puis ``%appdata%`` pour y accéder)
6) Copiez le chemin absolu de **Nebula/workspace/** et collez-le dans ``ROOT``
7) Entrez l'URL de votre espace en ligne pour y héberger les ressources du launcher dans ``BASE_URL``
8) Exécutez la commande ``npm start -- init root`` dans le terminal de **Nebula/**
9) Générez ensuite un serveur en exécutant la commande ``npm start -- generate server (Nom) 1.12.2 --forge (version de forge ex: 14.23.5.2859)``
10) Placez dans le nouveau répertoire tous vos mods, maps, textures...
11) Générez votre fichier distribution avec ``npm start -- generate distro``
12) Vous pourrez éditer ``distribution.json`` notamment afin d'y ajouter un logo.
13) Vous n'avez plus qu'à publier les fichiers sur votre espace en ligne et changer les URLs de ``ascensionz-online.netlify.app`` par les vôtres

# Ressources :

[Plus d'informations concernant Electron.js](https://www.electronjs.org/)

[Plus d'informations concernant la compilation electron](https://www.electron.build/)

[Plus d'informations concernant Nebula](https://github.com/dscalzi/Nebula)

[Plus d'informations concernant Netlify](https://netlify.com/)