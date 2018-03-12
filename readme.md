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

## Feature list

* Splash page: Contains PHAR Facebook link, phone number, hours, location, email, photos and links to the pet adoption finder.

### Navbar

* Navbar: Navbar will contain the PHAR logo and 2 links [HOME] and [ADOPTION]

### [HOME]

* Home will direct to the splash page

### [ADOPTION]

* Pet adoption finder: Will list pets found by the Petfinder API that match pets housed by PHAR. Under each pet card there will be a questions section about each pet.

* Questions about pets will require a login but without email, only name and a password. Low security.

* Questions will be listed like a forum, once posted they will appear under the adopt this pet card under the listing.

* Questions can be answered by PHAR admins

* PHAR admin accounts will be hardcoded

* Questions will be CRUD, users will be able to create, update, read and destroy them. Questions can be deleted and read by PHAR admin.

* Questions will be linked to the Petfinder API pet ID per each pet

### Why MongoDB

* MongoDB has no schema and does not need any table planning so it is good for rapid deployment

* MongoDB seems it will be easier for me to use and by this time in 3rd quarter I'll need to re-learn postgresql anyways

* Since MongoDB has no schema, I'm hoping that any future improvements that Pathways Home Animal Rescue makes is easier and cheaper

### Expected Roadblocks

* The roadblocks I expect to hit are how often I am able to communicate with Sue on the right things and get the right content on the site. If it ends up being a problem I will have to find a quick solution to finding pictures and related content until she becomes more available. Expecting now to ignore relevant content and put in info I can find easily then wait until shes ready so I can put up the real info later.

## Future Considerations

### [ABOUT]

* About page will display some photos, the PHAR mission, some about Sue and some PHAR employees / volunteers and success stories

### [CONTACT]

* Contact page will have a couple photos and links to email, a phone number, address, hours, social media links and info about sister / brother adoption centers.

### Navbar

* Navbar: Navbar will contain the PHAR logo and 4 links [HOME] [ADOPTION] [ABOUT] [CONTACT]
