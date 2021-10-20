const connection = require('../contexts/database');

exports.commit = () => {
    connection.query(`
                    CREATE TABLE REST_API.students(name varchar(100) NOT NULL,
                    email varchar(50) NOT NULL,
                    academicRegistry varchar(10) NOT NULL,
                    cpf varchar(12) NOT NULL,
                    CONSTRAINT students_PK PRIMARY KEY (academicRegistry))`,
     function (error) {
        if (error)
            throw error;
    });
    connection.end();
};
exports.rollback = () => {
    connection.query(`DROP TABLE IF EXISTS REST_API.students`, function (error) {
        if (error)
            throw error;
    });
    connection.end();
};
exports.seed = () => {
    connection.query(`
    insert into students (name, email, academicRegistry, cpf) values 
    ('Simonette Brezlaw', 'sbrezlaw0@acquirethisname.com', '8taHkHZqnF', '841706623952'),
    ('Callida Byard', 'cbyard1@disqus.com', 'POLH5hmrZC', '459101051713'),
    ('Jordan Sarton', 'jsarton2@google.ca', '9Bpt3AaGQP', '438457200834'),
    ('Juliet Dakin', 'jdakin3@chronoengine.com', 'nQnvCLyFrp', '439459752724'),
    ('Jacinda Messam', 'jmessam4@pagesperso-orange.fr', '3wZVzOrvgx', '102459453744'),
    ('Addia Yegorov', 'ayegorov5@pinterest.com', 'ltep4JpdlK', '697093740456'),
    ('Niven Bau', 'nbau6@spiegel.de', 'AJPUPeC1Kr', '926209331671'),
    ('Carroll Berzons', 'cberzons7@instagram.com', 'fzSqTEV4Kb', '988383556103'),
    ('Reider Rickarsey', 'rrickarsey8@netlog.com', 'zPto8LIwzA', '475458197120'),
    ('Alfred Bremen', 'abremen9@scribd.com', 'aOSbcGGHSs', '084819381627'),
    ('Ethel Manchett', 'emanchetta@ucoz.com', 'twkG7V2mGu', '624249854289'),
    ('Lynnett Keese', 'lkeeseb@marriott.com', 'uWel3nKqrd', '179644264745'),
    ('Laughton Ratke', 'lratkec@wisc.edu', 'tfBgoOiTdQ', '495948101591'),
    ('Rhett Clowes', 'rclowesd@google.com.br', 'CSrwmWYrxT', '213295272602'),
    ('Colby Franzoli', 'cfranzolie@virginia.edu', '5ogloRiieg', '268800816413'),
    ('Koral Kinset', 'kkinsetf@liveinternet.ru', 'g3q9QlAU2A', '821373548249'),
    ('Gottfried Exon', 'gexong@wordpress.com', 'EExl5r1QYl', '038407549460'),
    ('Robin Foad', 'rfoadh@adobe.com', 'mo3xdLxiSt', '620560976840'),
    ('Farly Hartwell', 'fhartwelli@360.cn', 'wDGYlXECeb', '882601583496'),
    ('Georgena Breacher', 'gbreacherj@vkontakte.ru', 'DdMCntn5Sq', '115714842870'),
    ('Vin Mordan', 'vmordank@vistaprint.com', 'DnnbrL9fkT', '732991447901'),
    ('Nerti Dow', 'ndowl@skype.com', 'ZwI0ic3SVg', '004084484010'),
    ('Tarah Corneil', 'tcorneilm@admin.ch', 'XFVo5KLktR', '650568168692'),
    ('Kincaid Galilee', 'kgalileen@amazon.de', 'WdeC1YsKIf', '370509513274'),
    ('Marie-jeanne Venny', 'mvennyo@smugmug.com', 'Kpnd9vsyNz', '625130187385'),
    ('Rickie Kenson', 'rkensonp@digg.com', 'kzuWkknky2', '516784004851'),
    ('Chrystel Meriott', 'cmeriottq@wired.com', 'pgCqLqtJeM', '393057377621'),
    ('Dania Hortop', 'dhortopr@accuweather.com', 'SbvlSftlnC', '170073879412'),
    ('Carl Tween', 'ctweens@japanpost.jp', 'ElyxdhP3YF', '153267472795'),
    ('Kyle Harrold', 'kharroldt@deviantart.com', 'NcZ4k8lBcf', '800106292696'),
    ('Sharia Rubert', 'srubertu@jugem.jp', 'NACbfoxGWE', '505384882530'),
    ('Krystyna Erlam', 'kerlamv@acquirethisname.com', 'fMa3ucfCZB', '283102247937'),
    ('Giselbert Gambles', 'ggamblesw@opensource.org', 'E1x33UbCRu', '871262589044'),
    ('Syd Trainer', 'strainerx@bizjournals.com', 'HwY5z1cGK3', '077248606451'),
    ('Kippar Hoult', 'khoulty@phpbb.com', 'Fi8TyaoOi6', '728673258395'),
    ('Alexandr Pulbrook', 'apulbrookz@constantcontact.com', 'XgZsSLBE8y', '091972202536'),
    ('Killie Lozano', 'klozano10@sourceforge.net', 'j8ECmLeUEu', '923674847908'),
    ('Fields McUre', 'fmcure11@dot.gov', 'RvYD7l8CKR', '002317122352'),
    ('Malena Mellanby', 'mmellanby12@discovery.com', 'DEqiA1nVAl', '427945095015'),
    ('Lilias Skipperbottom', 'lskipperbottom13@etsy.com', 'Mw9gfSI4Cd', '959452339468'),
    ('Bidget Gaskin', 'bgaskin14@epa.gov', 'OaJh0XmQiG', '808091805009'),
    ('Blanche Osgorby', 'bosgorby15@wp.com', 'tiCdTLtxW4', '578400790640'),
    ('Harwilll Dancey', 'hdancey16@ucoz.ru', 'MQlqfZC6Is', '644503355839'),
    ('Tad Dunkerley', 'tdunkerley17@miitbeian.gov.cn', '57Zg4IfPTa', '258881218867'),
    ('Wilmette Urlin', 'wurlin18@xing.com', '2KXiLzakSi', '596456466528'),
    ('Stavro Vettore', 'svettore19@blogs.com', '0XdEOfXzRM', '973982207654'),
    ('Chariot Eaton', 'ceaton1a@drupal.org', 'B2jAZ4c6iV', '757462807569'),
    ('Prudy Wakley', 'pwakley1b@yolasite.com', 'EaYoNdckXK', '337263766210'),
    ('Gizela Micklem', 'gmicklem1c@google.com', 'OiIxzvtQJL', '231422067482'),
    ('Jerry Foulkes', 'jfoulkes1d@github.io', 'vMULknHCv3', '276059798217'),
    ('Florenza Byrch', 'fbyrch1e@canalblog.com', 'NOEYFUsPuI', '361377141862'),
    ('Abbi Haigh', 'ahaigh1f@umich.edu', 'IUjpT0QhTD', '466964780509'),
    ('Bria Bartolomeu', 'bbartolomeu1g@bluehost.com', 'MgEQzgm9Xx', '719708370055'),
    ('Avie Threader', 'athreader1h@oaic.gov.au', 'iCXrNu9BIn', '678212243693'),
    ('Tammy Snodden', 'tsnodden1i@sfgate.com', 'gDHj8uTY0P', '844217221133'),
    ('Maximilian Burkitt', 'mburkitt1j@4shared.com', 'DzB4avbX14', '394807670423'),
    ('Gustie Noke', 'gnoke1k@microsoft.com', 'WTyo3WisaR', '168082730740'),
    ('Fleur Mapletoft', 'fmapletoft1l@examiner.com', '02Aj68Kq2X', '490862843015'),
    ('Fredrick Whear', 'fwhear1m@indiegogo.com', 'KEsrMMnD1H', '405304512254'),
    ('Sutton Pinke', 'spinke1n@illinois.edu', 'Xoz776DSzm', '303909267181'),
    ('Lorin Derdes', 'lderdes1o@cnn.com', 'Jr9CATatSi', '224238640167'),
    ('Ettie Perche', 'eperche1p@tumblr.com', 'bI8Nq7jfl0', '005962424356'),
    ('Charmine Ziemecki', 'cziemecki1q@google.com.hk', 'gM8O8TG7AF', '622460437097'),
    ('Trude Brashier', 'tbrashier1r@gnu.org', '9NsWOj8uNd', '229403705508'),
    ('Caroljean Bridgewater', 'cbridgewater1s@prnewswire.com', 'cY8SvMRmGR', '206261870199'),
    ('Osmond Dillingham', 'odillingham1t@amazon.co.jp', 'pPYWZSsd3l', '634672802506'),
    ('Kial Valentine', 'kvalentine1u@reverbnation.com', 'KDi67ypnYe', '185581865417'),
    ('Salomi Wale', 'swale1v@example.com', 'MyrvgteH1O', '487526680904'),
    ('Ulrick Holdren', 'uholdren1w@ucla.edu', 'mybjL05KZv', '037654446344'),
    ('Maudie Solleme', 'msolleme1x@ocn.ne.jp', '4fKw9d1hEx', '945086643626'),
    ('Bartie Cleef', 'bcleef1y@qq.com', 'j1UqQTz5EZ', '727674520476'),
    ('Irma Pideon', 'ipideon1z@cmu.edu', 'BQse7jD0qr', '304820298478'),
    ('Herb Tinston', 'htinston20@sohu.com', '9Lojtw9XtO', '501790846073'),
    ('Reinaldos Snedker', 'rsnedker21@w3.org', 'jbPFIFh0Tb', '378652967797'),
    ('Lilyan Gurge', 'lgurge22@ocn.ne.jp', 'lTd4GfmMaj', '090265866622'),
    ('Harriot Umbert', 'humbert23@uol.com.br', 'VeY8T0fc2B', '131219901430'),
    ('Marcellus Leversha', 'mleversha24@netscape.com', 'xMIpRrPp6F', '760254153450'),
    ('Lanna Lippiello', 'llippiello25@hhs.gov', 'INJZW8JPlP', '054742854400'),
    ('Hakeem Klimp', 'hklimp26@amazonaws.com', 'L9a7lbCoGv', '207878194092'),
    ('Vivien Bentz', 'vbentz27@tamu.edu', 'MuLDBWBN6T', '591748287253'),
    ('Tabby Norquoy', 'tnorquoy28@soup.io', '5oeZt19FQe', '248159491626'),
    ('Anastasia Menezes', 'amenezes29@storify.com', 'jhygoqfhFs', '670826234134'),
    ('Lynnett Abramowsky', 'labramowsky2a@twitpic.com', 'GdRa6t70Hq', '194059102370'),
    ('Roley Britzius', 'rbritzius2b@forbes.com', 'zsxMAtamFi', '538150463546'),
    ('Lidia Petch', 'lpetch2c@usa.gov', 'ysrbSNQgwT', '833175633238'),
    ('Doris Shevlin', 'dshevlin2d@unicef.org', '9PexjnWhcn', '249761308586'),
    ('Kelcie Bielefeld', 'kbielefeld2e@howstuffworks.com', 'neBig2fC9w', '706299268696'),
    ('Buffy Weekland', 'bweekland2f@google.de', 'zaw8fb3nwx', '533109435242'),
    ('Nannie Orto', 'norto2g@dot.gov', 'Stj2itkyIC', '923926197739'),
    ('Eustace Frears', 'efrears2h@github.com', 'N5jw4pgcHK', '527260740500'),
    ('Panchito Davydychev', 'pdavydychev2i@nasa.gov', 'iLGnJNvmEk', '993643121181'),
    ('Keely Parlott', 'kparlott2j@princeton.edu', 'CZaznRAQ34', '194320728937'),
    ('Jackqueline Brummitt', 'jbrummitt2k@vkontakte.ru', 'MypECK8g0S', '931860632201'),
    ('Kingsly Stovold', 'kstovold2l@unesco.org', 'rY3JoWYnFc', '131627714694'),
    ('Roma Dmych', 'rdmych2m@de.vu', 'tUWce4P37i', '902584114119'),
    ('Francklin Rennenbach', 'frennenbach2n@w3.org', 'Jcmdmh9QWk', '620299739840'),
    ('Lita Sabathier', 'lsabathier2o@disqus.com', 'NlyXFsdAge', '945702618284'),
    ('Errick Cosgrive', 'ecosgrive2p@columbia.edu', 'lTntkqhx71', '734478748133'),
    ('Mitzi Mixworthy', 'mmixworthy2q@vk.com', 'AQ4dCu1lEr', '487113087477'),
    ('Perla Bodell', 'pbodell2r@jimdo.com', 'wE58kUVFGe', '257830855236')`, function(error) {
        if (error)
            throw error
    })
    connection.end();
}