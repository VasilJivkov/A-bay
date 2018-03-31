const {
    Users,
    Products,
    Categories,
    City,
    DeliveryType,
} = require('../../models/models');

const categories = [
    {
        name: 'Electronics',
    }, {
        name: 'Auto',
    }, {
        name: 'Education',
    }, {
        name: 'Home Furniture',
    }, {
        name: 'Pets',
    }, {
        name: 'Tools',
    }, {
        name: 'Sports',
    }, {
        name: 'Office',
    }, {
        name: 'Games',
    }, {
        name: 'Fashion',
    }, {
        name: 'Services',
    }, {
        name: 'Real Estate',

    }, {
        name: 'Health',
    }];

const cities = [
    {
        name: 'Sofia',
    }, {
        name: 'Plovdiv',
    }, {
        name: 'Varna',
    }, {
        name: 'Burgas',
    }, {
        name: 'Ruse',
    }, {
        name: 'Stara Zagora',
    }, {
        name: 'Pleven',
    }, {
        name: 'Dobrich',
    }, {
        name: 'Sliven',
    }, {
        name: 'Shumen',
    }, {
        name: 'Pernik',
    }, {
        name: 'Yambol',
    }, {
        name: 'Haskovo',
    }, {
        name: 'Pazardzhik',
    }, {
        name: 'Blagoevgrad',
    }, {
        name: 'Veliko Tarnovo',
    }, {
        name: 'Vratsa',
    }, {
        name: 'Gabrovo',
    }, {
        name: 'Vidin',
    }, {
        name: 'Asenovgrad',
    }, {
        name: 'Kazanlak',
    }, {
        name: 'Kyustendil',
    }, {
        name: 'Kardzhali',
    }, {
        name: 'Montana',
    }, {
        name: 'Dimitrovgrad',
    }, {
        name: 'Targovishte',
    }, {
        name: 'Silistra',
    }, {
        name: 'Lovech',
    }, {
        name: 'Dupnitsa',
    }, {
        name: 'Razgrad',
    }, {
        name: 'Svishtov',
    }, {
        name: 'Gorna Oryahovitsa',
    }, {
        name: 'Smolyan',
    }, {
        name: 'Petrich',
    }, {
        name: 'Sandanski',
    }, {
        name: 'Samokov',
    }, {
        name: 'Sevlievo',
    }, {
        name: 'Lom',
    }, {
        name: 'velingrad',
    }, {
        name: 'Karlovo',
    }, {
        name: 'Nova Zagora',
    }, {
        name: 'Troyan',
    }, {
        name: 'Aytos',
    }, {
        name: 'Botevgrad',
    }, {
        name: 'Peshtera',
    }, {
        name: 'Gotse Delchev',
    }, {
        name: 'Harmanli',
    }, {
        name: 'Karnobat',
    }, {
        name: 'Svilengrad',
    }, {
        name: 'Panagyurishte',
    }, {
        name: 'Chirpan',
    }, {
        name: 'Popovo',
    }, {
        name: 'Rakovski',
    }, {
        name: 'Radomir',
    }, {
        name: 'Cherven Bryag',
    }, {
        name: 'Parvomay',
    }, {
        name: 'Berkovitsa',
    }, {
        name: 'Kozloduy',
    }, {
        name: 'Pomorie',
    }, {
        name: 'Novi Pazar',
    }, {
        name: 'Novi Iskar',
    }, {
        name: 'Radnevo',
    }, {
        name: 'Provadiya',
    }, {
        name: 'Ihtiman',
    }, {
        name: 'Nessebar',
    }, {
        name: 'Byala Slatina',
    }, {
        name: 'Razlog',
    }, {
        name: 'Balchik',
    }, {
        name: 'Stambolyiski',
    }, {
        name: 'Kavarna',
    }, {
        name: 'Kostinbrod',
    }, {
        name: 'Pavlikeni',
    }, {
        name: 'Mezdra',
    }, {
        name: 'Knezha',
    }, {
        name: 'Etropole',
    }, {
        name: 'Levski',
    }, {
        name: 'Bankya',
    }, {
        name: 'Elhovo',
    }, {
        name: 'Teteven',
    }, {
        name: 'Tryavna',
    }, {
        name: 'Lukovit',
    }, {
        name: 'Tutrakan',
    }, {
        name: 'Sopot',
    }, {
        name: 'Isperih',
    }, {
        name: 'Byala',
    }, {
        name: 'Devnya',
    }, {
        name: 'Sredets',
    }, {
        name: 'Omurtag',
    }, {
        name: 'Veliki Preslav',
    }, {
        name: 'Galabovo',
    }, {
        name: 'Lyaskovets',
    }, {
        name: 'Belene',
    }, {
        name: 'Krichim',
    }, {
        name: 'Septemvri',
    }, {
        name: 'Rakitovo',
    }, {
        name: 'Momchilgrad',
    }, {
        name: 'Bansko',
    }, {
        name: 'Dryanovo',
    }, {
        name: 'Beloslav',
    }, {
        name: 'Kubrat',
    }, {
        name: 'Svoge',
    }, {
        name: 'Aksakovo',
    }, {
        name: 'Lyubimets',
    }, {
        name: 'Pirdop',
    }, {
        name: 'Hisarya',
    }, {
        name: 'Zlatograd',
    }, {
        name: 'Slivnitsa',
    }, {
        name: 'Simitli',
    }, {
        name: 'Simeonovgrad',
    }, {
        name: 'Dolni Chiflik',
    }, {
        name: 'General Toshevo',
    }, {
        name: 'Elin Pelin',
    }, {
        name: 'Dulovo',
    }, {
        name: 'Kostenets',
    }, {
        name: 'Devin',
    }, {
        name: 'Tervel',
    }, {
        name: 'Madan',
    }, {
        name: 'Varshets',
    }, {
        name: 'Bobov Dol',
    }, {
        name: 'Straldzha',
    }, {
        name: 'Tsarevo',
    }, {
        name: 'Kotel',
    }, {
        name: 'Tvartitsa',
    }, {
        name: 'Elena',
    }, {
        name: 'Kuklen',
    }, {
        name: 'Saedinenie',
    }, {
        name: 'Oryahovo',
    }, {
        name: 'Topolovgrad',
    }, {
        name: 'Sozopol',
    }, {
        name: 'Belogradchik',
    }, {
        name: 'Chepelare',
    }, {
        name: 'Strazhitsa',
    }, {
        name: 'Bozhurishte',
    }, {
        name: 'Breznik',
    }, {
        name: 'Separeva Banya',
    }, {
        name: 'Sveti Vlas',
    }, {
        name: 'Primorsko',
    }, {
        name: 'Kresna',
    }, {
        name: 'Shabla',
    }, {
        name: 'Apriltsi',
    }, {
        name: 'Gurkovo',
    }, {
        name: 'Pavel Banya',
    }, {
        name: 'Dolna Oryahovitsa',
    }, {
        name: 'Yablanitsa',
    }, {
        name: 'Tran',
    }, {
        name: 'Malko Tarnovo',
    }, {
        name: 'Dospat',
    }, {
        name: 'Borovo',
    }, {
        name: 'Obzor',
    }, {
        name: 'Loznitsa',
    }, {
        name: 'Aheloy',
    }, {
        name: 'Senovo',
    }, {
        name: 'Kiten',
    }, {
        name: 'Klisura',
    }, {
        name: 'Pliska',
    }, {
        name: 'Melnik',
    }];


const deliveryType = [
    {
        name: 'Collection',
    }, {
        name: 'Postage',
    }];

const users = [
    {
        username: 'Gosho',
        password: 'asdwahshds',
        email: 'hshsh@abv.bg',
        firstName: 'Gosho',
        lastName: 'Adjsajs',
        address: 'Adasds',
        city: 'Asassa',
    },
    {
        username: 'Goscdcho',
        password: 'asdwcahshds',
        email: 'hshcsh@abv.bg',
        firstName: 'Gocsho',
        lastName: 'Ajsajs',
        address: 'Adsds',
        city: 'Asasa',
    },
    {
        username: 'Gosfho',
        password: 'asdwahsfhds',
        email: 'hshsh@abvf.bg',
        firstName: 'Goseffdso',
        lastName: 'Adjsajs',
        address: 'Adasdsf',
        city: 'Asassaf',
    }];

const products = [
    {
        title: 'ssadasasd',
        desc: 'ssadasasdassad',
        price: 2333.23,
        picture: 'https://github.com/atanasovam/A-bay/blob/master/models/models/products.js',
        status: 'active',
        fk_city_id: 1,
        fk_user_id: 1,
        fk_category_id: 1,
    },
    {
        title: 'ssasasd',
        desc: 'ssadadassad',
        price: 22333.23,
        picture: 'https://github.com/atanasovam/A-bay/blob/master/models/models/products.js',
        status: 'active',
        fk_city_id: 2,
        fk_user_id: 2,
        fk_category_id: 2,
    },
    {
        title: 'ssqasasd',
        desc: 'ssadaqadassad',
        price: 223.23,
        picture: 'https://github.com/atanasovam/A-bay/blob/master/models/models/products.js',
        status: 'active',
        fk_city_id: 3,
        fk_user_id: 3,
        fk_category_id: 3,
    },
];

const fillTable = (Model, data) => {
    Model.bulkCreate(data);
};

(() => {
    [
        {
            model: Users,
            data: users,
        }, {
            model: Products,
            data: products,
        }, {
            model: Categories,
            data: categories,
        }, {
            model: City,
            data: cities,
        }, {
            model: DeliveryType,
            data: deliveryType,
        },
    ].forEach((currentData) => {
        fillTable(currentData.model, currentData.data);
    });
})();
