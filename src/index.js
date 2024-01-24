import './style.css';
import coffeeIcon from './coffee-to-go.svg';

(function makeHeader() {
    const divContent = document.getElementById('content');

    const divHeader = document.createElement('div');
    divHeader.classList.add('header-container');
    divContent.appendChild(divHeader);

    const headerLogo = document.createElement('h2');
    headerLogo.classList.add('logo');
    headerLogo.textContent = 'The Human Bean';
    divHeader.appendChild(headerLogo);

    const navList = document.createElement('ul');
    divHeader.appendChild(navList);

    const listItemAbout = document.createElement('li');
    listItemAbout.textContent = 'About';
    listItemAbout.addEventListener('click', () => {
        removeContentTabs();
        makeAbout();
    })
    navList.appendChild(listItemAbout);

    const listItemMenu = document.createElement('li');
    listItemMenu.textContent = 'Menu';
    listItemMenu.addEventListener('click', () => {
        removeContentTabs();
        makeMenu();
    })
    navList.appendChild(listItemMenu);

    const listItemContact = document.createElement('li');
    listItemContact.textContent = 'Contact';
    listItemContact.addEventListener('click', () => {
        removeContentTabs();
        makeContact();
    })
    navList.appendChild(listItemContact);

    function removeContentTabs() {
        const mainContents = document.getElementById('main');

        while (mainContents.firstChild) {
            mainContents.removeChild(mainContents.lastChild);
        }
    }
})();

(function makeMainContent() {
    const divContent = document.getElementById('content');

    const divMain = document.createElement('div');
    divMain.id = 'main';
    divContent.appendChild(divMain);

    // load initial tab
    makeAbout();
})();

function makeAbout() {
    const divMain = document.getElementById('main');

    const divAbout = document.createElement('div');
    divAbout.classList.add('about');
    divMain.appendChild(divAbout);

    const divInfo = document.createElement('h2');
    divInfo.classList.add('info');
    divInfo.textContent = "Ethically acquired beans from sustainable sources.";
    divAbout.appendChild(divInfo);

    const divDescription = document.createElement('p');
    divDescription.innerHTML =
        "<b>The Human Bean</b> is a distinguished coffee roaster committed to providing a truly ethical and sustainable coffee experience. Our carefully selected beans are sourced from environmentally responsible and socially conscious producers, ensuring that every cup supports fair practices and sustainable agriculture. Delight in the rich flavors of our expertly roasted beans, knowing that your coffee journey with <b>The Human Bean</b> contributes to a brighter and more sustainable future for coffee communities worldwide.";
    divAbout.appendChild(divDescription);

    const imgCoffeeIcon = document.createElement('img');
    imgCoffeeIcon.src = coffeeIcon;
    imgCoffeeIcon.alt = 'coffee-to-go';
    divAbout.appendChild(imgCoffeeIcon);
};

function makeMenu() {
    const divMain = document.getElementById('main');

    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');
    divMain.appendChild(divMenu);

    // menu title
    const divTitle = document.createElement('h2');
    divTitle.innerHTML = "<b>Bean Menu</b>";
    divMenu.appendChild(divTitle);

    // menu box
    const divMenuBox = document.createElement('div');
    divMenuBox.classList.add('menu-box');
    divMenu.appendChild(divMenuBox);

    const menuItems = [
        {
            name: 'Ethiopian Yirgacheffe',
            description: 'Hailing from Ethiopia, these beans are celebrated for their bright acidity, floral notes, and fruity undertones, offering a complex and distinctive flavor.',
        }, {
            name: 'Colombian Supremo',
            description: 'Grown in the high altitudes of Colombia, Supremo beans are characterized by a well-balanced profile, medium body, and a hint of nuttiness.',
        }, {
            name: 'Sumatra Mandheling',
            description: 'Originating from the Indonesian island of Sumatra, Mandheling beans are known for their full body, low acidity, and earthy, chocolatey flavor.',
        }, {
            name: 'Kenyan AA',
            description: 'Kenya AA beans, grown at high elevations in Kenya, are prized for their bright acidity, full body, and wine-like notes, making them a favorite among coffee connoisseurs.',
        }, {
            name: 'Brazilian Santos',
            description: 'From the largest coffee-producing country, Brazilian Santos beans offer a mild flavor, low acidity, and a nutty sweetness, making them versatile for various brewing methods.',
        }, {
            name: 'Jamaican Blue Mountain',
            description: 'Considered one of the rarest and most sought-after coffee beans, Jamaican Blue Mountain beans are prized for their mild flavor, lack of bitterness, and bright acidity, grown in the Blue Mountains of Jamaica.',
        }, {
            name: 'Guatemalan Antigua',
            description: 'Grown in the Antigua region of Guatemala, these beans are known for their full body, rich flavor, and hints of cocoa and spice, creating a well-balanced and flavorful cup.',
        }, {
            name: 'Hawaiian Kona',
            description: 'Cultivated on the slopes of the Mauna Loa volcano in Hawaii, Kona beans are prized for their smooth, mild flavor with a hint of nuttiness, creating a uniquely tropical and enjoyable coffee experience.',
        },
    ];

    // menu items
    for (let i = 0; i < menuItems.length; i++) {
        const divMenuItem = document.createElement('div');
        divMenuItem.classList.add('menu-item');
        divMenuBox.appendChild(divMenuItem);

        const divItemName = document.createElement('h3');
        divItemName.textContent = menuItems[i].name;
        divMenuItem.appendChild(divItemName);

        const divItemDescription = document.createElement('p');
        divItemDescription.textContent = menuItems[i].description;
        divMenuItem.appendChild(divItemDescription);
    }
};

function makeContact() {
    const divMain = document.getElementById('main');

    const divContact = document.createElement('div');
    divContact.classList.add('contact');
    divMain.appendChild(divContact);

    const divContactTitle = document.createElement('h2');
    divContactTitle.textContent = 'Contact Us';
    divContact.appendChild(divContactTitle);

    const divContactEmail = document.createElement('p');
    divContactEmail.textContent = 'humanbeanroasters@mail.com';
    divContact.appendChild(divContactEmail);

    const divPhone = document.createElement('p');
    divPhone.textContent = '+(1)234-5678';
    divContact.appendChild(divPhone);

    const divCredits = document.createElement('div');
    divCredits.classList.add('credit-bar');
    divContact.appendChild(divCredits);

    const divPhotoCredit = document.createElement('div');
    divPhotoCredit.classList.add('github-link');
    divPhotoCredit.innerHTML = 'Photo by <a href="https://www.pexels.com/photo/woman-wearing-black-shirt-in-a-coffee-shop-1137745/">Lisa Fotios</a>'
    divCredits.appendChild(divPhotoCredit);

    const divAuthor = document.createElement('div');
    divAuthor.classList.add('github-link');
    divAuthor.innerHTML = 'Site by <a href="https://github.com/hhaynes1">hhaynes</a>';
    divCredits.appendChild(divAuthor);
};