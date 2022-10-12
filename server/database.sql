CREATE TABLE public.delivery
(
    date date NOT NULL,
    name character varying(128) NOT NULL,
    quantity integer NOT NULL,
    distance integer NOT NULL
);

INSERT INTO delivery
VALUES
('2022-03-01', 'Huzaifa Thomson',66,366),
('2022-03-02', 'Teresa Stone',69,369),
('2022-03-03', 'Waqar Ross',72,372),
('2022-03-04', 'Aiyla Baldwin',75,375),
('2022-03-05', 'Matt Broadhurst',78,378),
('2022-03-06', 'Eric Barajas',81,381),
('2022-03-07', 'Emile Ridley',84,384),
('2022-03-08', 'Hetty Huerta',87,387),
('2022-03-09', 'Jimmy Rangel',90,390),
('2022-03-10', 'Charlie Ramos',93,393),
('2022-03-11', 'Raisa Adams',96,396),
('2022-03-12', 'Arlo Kaye',99,399),
('2022-03-13', 'Sannah Hulme',102,402),
('2022-03-14', 'Brian Hamer',105,405),
('2022-03-15', 'Lillia House',108,408),
('2022-03-16', 'Lacey-May Thatcher',111,411),
('2022-03-17', 'Earl Markham',114,414),
('2022-03-18', 'Prince Plant',117,417),
('2022-03-19', 'Dawid Wolf',120,420),
('2022-03-20', 'Krista Jeffery',123,423),
('2022-03-21', 'Clarke Douglas',126,426),
('2022-03-22', 'Annette Oneal',129,429),
('2022-03-23', 'Meadow Black',132,432),
('2022-03-24', 'Buster Austin',135,435),
('2022-03-25', 'Jakob Burks',138,438),
('2022-03-26', 'Reid Almond',141,441),
('2022-03-27', 'Oisin Garner',144,444),
('2022-03-28', 'Efe Schroeder',147,447),
('2022-03-29', 'Yaqub Kent',150,450),
('2022-03-30', 'Marianne Lindsay',153,453),
('2022-03-31', 'Emelie Irving',156,456),
('2022-04-01', 'Abdirahman Frazier',159,459),
('2022-04-02', 'Osama Witt',162,462),
('2022-04-03', 'Trinity Hawes',165,465),
('2022-04-04', 'Eamonn Potter',168,468),
('2022-04-05', 'Huxley Mann',171,471),
('2022-04-06', 'Jaydn Mccarty',174,474),
('2022-04-07', 'Hugh Kim',177,477),
('2022-04-08', 'Erika Kendall',180,480),
('2022-04-09', 'Rosanna Salt',183,483),
('2022-04-10', 'Ffion Harrison',186,486),
('2022-04-11', 'Lila Howells',189,489),
('2022-04-12', 'Mylah Marriott',192,492),
('2022-04-13', 'Donell Galvan',195,495),
('2022-04-14', 'Madina Roman',198,498),
('2022-04-15', 'Anwen Avila',201,501),
('2022-04-16', 'Ella-Mae Roberts',204,504),
('2022-04-17', 'Emily-Jane Becker',207,507),
('2022-04-18', 'Zoey Novak',210,510),
('2022-04-19', 'Anabel Ireland',213,513),
('2022-04-20', 'Jake Stafford',216,516),
('2022-04-21', 'Zidan Greaves',219,519),
('2022-04-22', 'Pearl Moses',222,522),
('2022-04-23', 'Padraig Drummond',225,525),
('2022-04-24', 'Rhiannan Melton',228,528),
('2022-04-25', 'Arman Harding',231,531),
('2022-04-26', 'Freyja Reeve',234,534),
('2022-04-27', 'Darien Davis',237,537),
('2022-04-28', 'Lilli Howard',240,540),
('2022-04-29', 'Khadijah Beil',243,543),
('2022-04-30', 'Cherry Truong',246,546),
('2022-05-01', 'Riyad Frederick',249,549),
('2022-05-02', 'Damien Hebert',252,552),
('2022-05-03', 'Amie Bray',255,555),
('2022-05-04', 'Denis Stanley',258,558),
('2022-05-05', 'Roza Mackay',261,561),
('2022-05-06', 'Pooja Steele',264,564),
('2022-05-07', 'Umayr Bender',267,567),
('2022-05-08', 'Aidan OMoore',270,570),
('2022-05-09', 'Baxter Whittington',273,573),
('2022-05-10', 'Boyd Chandler',276,576),
('2022-05-11', 'Kaitlyn Thorpe',279,579),
('2022-05-12', 'Trevor Vaughan',282,582),
('2022-05-13', 'Dilan Miles',285,585),
('2022-05-14', 'Hayley Garcia',288,588),
('2022-05-15', 'Ayoub Camacho',291,591),
('2022-05-15', 'Eli Fitzpatrick',294,594),
('2022-05-16', 'Alyssia Fletcher',297,597),
('2022-05-17', 'Lindsay Colley',300,600),
('2022-05-18', 'Jo Quinn',303,603),
('2022-05-19', 'Izabela Akhtar',306,606),
('2022-05-20', 'Fraser Matthews',309,609),
('2022-05-21', 'Klara Riddle',312,612),
('2022-05-22', 'Karan Mckee',315,615),
('2022-05-23', 'Lorelei Esparza',318,618),
('2022-05-24', 'Dani Wade',321,621),
('2022-05-25', 'Teigan Neale',324,624),
('2022-05-26', 'Reema Cruz',327,627),
('2022-05-27', 'Sama Hines',330,630),
('2022-05-28', 'Kody Gonzales',333,633),
('2022-05-29', 'Saffron Patel',336,636),
('2022-05-30', 'Sohaib Mcdowell',339,639),
('2022-05-31', 'Jayden Marsden',342,642),
('2022-05-01', 'Elysia Sweet',345,645),
('2022-05-02', 'Leigh Stuart',348,648),
('2022-05-03', 'Avleen Robles',351,651),
('2022-05-04', 'Kirby Goff',354,654),
('2022-05-05', 'Cataleya Horn',357,657),
('2022-05-06', 'Dustin Dollin',120,1020),
('2022-05-07', 'Elwood Peacock',360,660),
('2022-05-08', 'Leja Dalby',363,663); 