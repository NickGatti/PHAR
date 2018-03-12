# Nick Gatti Q3 Proposal

### Overview:
* Pathways Home Animal Rescue Webpage: Website that connects to [Petfinder API](https://www.petfinder.com/developers/api-docs/) and allows users and PHAR employees to communicate.

### Who will use this:
* PHAR Employees / volunteers and people interested in contacting the group

### What outputs do they need:
* A pet adoption list and a simple message board per each pet fetched from the Petfinder API

### What technologies do you plan to use:
* Backend: Node.js Express.js Mongoose MongoDB Body-Parser
* Frontend: React Redux React-Redux React-Router-Dom Redux-Logger Redux-Thunk Reactstrap Bootswatch Axios 

### Feature list
* Splash page: Contains PHAR Facebook link, phone number, hours, location, email, photos and links to the pet adoption finder.

* Navbar: Navbar will contain the PHAR logo and 4 links [HOME] [ADOPTION] [ABOUT] [CONTACT]

### [HOME]

* Home will direct to the splash page

### [ADOPTION]

* Pet adoption finder: Will list pets found by the Petfinder API that match pets housed by PHAR. Under each pet card there will be a qestions section about each pet.

* Questions about pets will require a login but without email, only name and a password. Low security.

* Questions will be listed like a forum, once posted they will appear under the adopt this pet card under the listing.

* Questions can be answered by PHAR admins

* PHAR admin accounts will be hardcoded

* Questions will be CRUD, users will be able to create, update, read and destory them. Questions can be deleted and read by PHAR admin.

* Questions will be linked to the petfinder API pet ID per each pet

### [ABOUT]

* About page will display some photos, the PHAR mission, some about Sue and some PHAR employees / voulenteers and success stories

### [CONTACT]

* Contact page will have a couple photos and links to email, a phone number, address, hours, social media links and info about sister / brother adoption centers.