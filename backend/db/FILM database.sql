﻿-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/

DROP TABLE FILM_ACTOR;
DROP TABLE ACTOR;
DROP TABLE FILM;
DROP TABLE COUNTRY;
DROP TABLE GENRE;

CREATE TABLE ACTOR (
    ID int   NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    NAME varchar(150)   NOT NULL,
    IMAGE varchar(250)  NOT NULL,
    IMDB varchar(250)   NOT NULL,
    DESCRIPTION varchar(500),
    CONSTRAINT pk_ACTOR PRIMARY KEY (ID),
    CONSTRAINT uc_ACTOR_NAME UNIQUE (NAME)
);

CREATE TABLE COUNTRY (
    ID int   NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    NAME varchar(150)   NOT NULL,
    CONSTRAINT pk_COUNTRY PRIMARY KEY (ID),
    CONSTRAINT uc_COUNTRY_NAME UNIQUE (NAME)
);

CREATE TABLE GENRE (
    ID int   NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    NAME varchar(100)   NOT NULL,
    CONSTRAINT pk_GENRE PRIMARY KEY (ID),
    CONSTRAINT uc_GENRE_NAME UNIQUE (NAME)
);

CREATE TABLE FILM (
    ID int   NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    TITLE varchar(300)   NOT NULL,
    YEAR int   NOT NULL,
    DIRECTOR varchar(100)   NOT NULL,
    GENRE int   NOT NULL,
    COUNTRY int   NOT NULL,
    IMAGE varchar(250)   NOT NULL,
    IMDB varchar(250)   NOT NULL,
    DESCRIPTION varchar(500),
    CONSTRAINT pk_FILM PRIMARY KEY (ID),
    CONSTRAINT uc_FILM_TITLE UNIQUE (TITLE)
);

CREATE TABLE FILM_ACTOR (
    ID int   NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    FILM_ID int   NOT NULL,
    ACTOR_ID int   NOT NULL,
    CONSTRAINT pk_FILM_ACTOR PRIMARY KEY (ID),
    CONSTRAINT uc_FILM_ACTOR UNIQUE (FILM_ID, ACTOR_ID)
);

ALTER TABLE FILM ADD CONSTRAINT fk_FILM_GENRE FOREIGN KEY(genre_id)
REFERENCES GENRE (ID);

ALTER TABLE FILM ADD CONSTRAINT fk_FILM_COUNTRY FOREIGN KEY(country_id)
REFERENCES COUNTRY (ID);

ALTER TABLE FILM_ACTOR ADD CONSTRAINT fk_FILM_ACTOR_FILM_ID FOREIGN KEY(FILM_ID)
REFERENCES FILM (ID);

ALTER TABLE FILM_ACTOR ADD CONSTRAINT fk_FILM_ACTOR_ACTOR_ID FOREIGN KEY(ACTOR_ID)
REFERENCES ACTOR (ID);

insert into GENRE (NAME) values ('Science Fiction');
insert into GENRE (NAME) values ('Action');
insert into GENRE (NAME) values ('Comedy');
insert into GENRE (NAME) values ('Romantic');
insert into GENRE (NAME) values ('Fantasy');
insert into GENRE (NAME) values ('Western');
insert into GENRE (NAME) values ('Mystery');
insert into GENRE (NAME) values ('Adventure');
insert into GENRE (NAME) values ('Drama');
insert into GENRE (NAME) values ('Horror');

insert into COUNTRY (NAME) values ('Afghanistan');
insert into COUNTRY (NAME) values ('Albania');
insert into COUNTRY (NAME) values ('Algeria');
insert into COUNTRY (NAME) values ('Antigua and Barbuda');
insert into COUNTRY (NAME) values ('Argentina');
insert into COUNTRY (NAME) values ('Armenia');
insert into COUNTRY (NAME) values ('Australia');
insert into COUNTRY (NAME) values ('Austria');
insert into COUNTRY (NAME) values ('Azerbaijan');
insert into COUNTRY (NAME) values ('Azores');
insert into COUNTRY (NAME) values ('Bahamas');
insert into COUNTRY (NAME) values ('Bangladesh');
insert into COUNTRY (NAME) values ('Barbados');
insert into COUNTRY (NAME) values ('Belarus');
insert into COUNTRY (NAME) values ('Belgium');
insert into COUNTRY (NAME) values ('Belize');
insert into COUNTRY (NAME) values ('Bermuda');
insert into COUNTRY (NAME) values ('Bolivia');
insert into COUNTRY (NAME) values ('Bosnia & Herzegovina');
insert into COUNTRY (NAME) values ('Brazil');
insert into COUNTRY (NAME) values ('Bulgaria');
insert into COUNTRY (NAME) values ('Cambodia');
insert into COUNTRY (NAME) values ('Cameroon');
insert into COUNTRY (NAME) values ('Canada');
insert into COUNTRY (NAME) values ('Cape Verde');
insert into COUNTRY (NAME) values ('Chile');
insert into COUNTRY (NAME) values ('China');
insert into COUNTRY (NAME) values ('Columbia');
insert into COUNTRY (NAME) values ('Costa Rica');
insert into COUNTRY (NAME) values ('Croatia');
insert into COUNTRY (NAME) values ('Cuba');
insert into COUNTRY (NAME) values ('Cyprus');
insert into COUNTRY (NAME) values ('Czech Republic');
insert into COUNTRY (NAME) values ('Czechoslovakia');
insert into COUNTRY (NAME) values ('Denmark');
insert into COUNTRY (NAME) values ('Dominica');
insert into COUNTRY (NAME) values ('Dominican Republic');
insert into COUNTRY (NAME) values ('Ecuador');
insert into COUNTRY (NAME) values ('Egypt');
insert into COUNTRY (NAME) values ('El Salvador');
insert into COUNTRY (NAME) values ('England');
insert into COUNTRY (NAME) values ('Eritrea');
insert into COUNTRY (NAME) values ('Ethiopia');
insert into COUNTRY (NAME) values ('Fiji');
insert into COUNTRY (NAME) values ('Finland');
insert into COUNTRY (NAME) values ('France');
insert into COUNTRY (NAME) values ('Georgia');
insert into COUNTRY (NAME) values ('Germany');
insert into COUNTRY (NAME) values ('Ghana');
insert into COUNTRY (NAME) values ('Greece');
insert into COUNTRY (NAME) values ('Grenada');
insert into COUNTRY (NAME) values ('Guam');
insert into COUNTRY (NAME) values ('Guatemala');
insert into COUNTRY (NAME) values ('Guyana');
insert into COUNTRY (NAME) values ('Haiti');
insert into COUNTRY (NAME) values ('Honduras');
insert into COUNTRY (NAME) values ('Hong Kong');
insert into COUNTRY (NAME) values ('Hungary');
insert into COUNTRY (NAME) values ('India');
insert into COUNTRY (NAME) values ('Indonesia');
insert into COUNTRY (NAME) values ('Iran');
insert into COUNTRY (NAME) values ('Iraq');
insert into COUNTRY (NAME) values ('Ireland');
insert into COUNTRY (NAME) values ('Israel');
insert into COUNTRY (NAME) values ('Italy');
insert into COUNTRY (NAME) values ('Jamaica');
insert into COUNTRY (NAME) values ('Japan');
insert into COUNTRY (NAME) values ('Jordan');
insert into COUNTRY (NAME) values ('Kenya');
insert into COUNTRY (NAME) values ('Korea');
insert into COUNTRY (NAME) values ('Kosovo');
insert into COUNTRY (NAME) values ('Kuwait');
insert into COUNTRY (NAME) values ('Laos');
insert into COUNTRY (NAME) values ('Latvia');
insert into COUNTRY (NAME) values ('Lebanon');
insert into COUNTRY (NAME) values ('Liberia');
insert into COUNTRY (NAME) values ('Lithuania');
insert into COUNTRY (NAME) values ('Macedonia');
insert into COUNTRY (NAME) values ('Malaysia');
insert into COUNTRY (NAME) values ('Mexico');
insert into COUNTRY (NAME) values ('Moldova');
insert into COUNTRY (NAME) values ('Morocco');
insert into COUNTRY (NAME) values ('Myanmar (Burma)');
insert into COUNTRY (NAME) values ('Nepal');
insert into COUNTRY (NAME) values ('Netherlands');
insert into COUNTRY (NAME) values ('New Zealand');
insert into COUNTRY (NAME) values ('Nicaragua');
insert into COUNTRY (NAME) values ('Nigeria');
insert into COUNTRY (NAME) values ('Northern Ireland');
insert into COUNTRY (NAME) values ('Norway');
insert into COUNTRY (NAME) values ('Other U. S. Island Areas');
insert into COUNTRY (NAME) values ('Pakistan');
insert into COUNTRY (NAME) values ('Panama');
insert into COUNTRY (NAME) values ('Paraguay');
insert into COUNTRY (NAME) values ('Peru');
insert into COUNTRY (NAME) values ('Philippines');
insert into COUNTRY (NAME) values ('Poland');
insert into COUNTRY (NAME) values ('Portugal');
insert into COUNTRY (NAME) values ('Puerto Rico');
insert into COUNTRY (NAME) values ('Romania');
insert into COUNTRY (NAME) values ('Russia');
insert into COUNTRY (NAME) values ('Samoa');
insert into COUNTRY (NAME) values ('Saudi Arabia');
insert into COUNTRY (NAME) values ('Scotland');
insert into COUNTRY (NAME) values ('Senegal');
insert into COUNTRY (NAME) values ('Serbia');
insert into COUNTRY (NAME) values ('Sierra Leone');
insert into COUNTRY (NAME) values ('Singapore');
insert into COUNTRY (NAME) values ('Slovakia');
insert into COUNTRY (NAME) values ('Somalia');
insert into COUNTRY (NAME) values ('South Africa');
insert into COUNTRY (NAME) values ('South Korea');
insert into COUNTRY (NAME) values ('Spain');
insert into COUNTRY (NAME) values ('Sri Lanka');
insert into COUNTRY (NAME) values ('St. Kitts--Nevis');
insert into COUNTRY (NAME) values ('St. Lucia');
insert into COUNTRY (NAME) values ('St. Vincent and the Grenadines');
insert into COUNTRY (NAME) values ('Sudan');
insert into COUNTRY (NAME) values ('Sweden');
insert into COUNTRY (NAME) values ('Switzerland');
insert into COUNTRY (NAME) values ('Syria');
insert into COUNTRY (NAME) values ('Taiwan');
insert into COUNTRY (NAME) values ('Tanzania');
insert into COUNTRY (NAME) values ('Thailand');
insert into COUNTRY (NAME) values ('Tonga');
insert into COUNTRY (NAME) values ('Trinidad and Tobago');
insert into COUNTRY (NAME) values ('Turkey');
insert into COUNTRY (NAME) values ('U. S. Virgin Islands');
insert into COUNTRY (NAME) values ('Uganda');
insert into COUNTRY (NAME) values ('Ukraine');
insert into COUNTRY (NAME) values ('United Kingdom');
insert into COUNTRY (NAME) values ('United States');
insert into COUNTRY (NAME) values ('Uruguay');
insert into COUNTRY (NAME) values ('USSR');
insert into COUNTRY (NAME) values ('Uzbekistan');
insert into COUNTRY (NAME) values ('Venezuela');
insert into COUNTRY (NAME) values ('Vietnam');
insert into COUNTRY (NAME) values ('Wales');
insert into COUNTRY (NAME) values ('Yemen');
insert into COUNTRY (NAME) values ('Yugoslavia');
insert into COUNTRY (NAME) values ('Zimbabwe');

insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Mark Hamill', 'https://www.imdb.com/name/nm0000434/mediaviewer/rm3046789889', 'https://www.imdb.com/name/nm0000434', 'Mark Hamill was born on September 25, 1951 Oakland, California, USA. He is best known for his portrayal of Luke Skywalker in the original Star Wars trilogy - Star Wars: Episode IV - A New Hope (1977), Star Wars: Episode V - The Empire Strikes Back (1980), and Star Wars: Episode VI - Return of the Jedi (1983) - a role he reprised in Star Wars: Episode VII - The Force Awakens (2015), Star Wars: Episode VIII - The Last Jedi (2017) and Star Wars: Episode IX - The Rise of Skywalker (2019).');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Harisson Ford', 'https://www.imdb.com/name/nm0000148/mediaviewer/rm2178324224', 'https://www.imdb.com/name/nm0000148', 'Harrison Ford was born on July 13, 1942 in Chicago, Illinois. He is clearly a well-established Hollywood superstar. He hit colossal with the role of Han Solo in Star Wars: Episode IV - A New Hope (1977). Another four years and Ford was Indiana Jones in Indiana Jones and the Raiders of the Lost Ark (1981).');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Carrie Fisher', 'https://www.imdb.com/name/nm0000402/mediaviewer/rm3972020992', 'https://www.imdb.com/name/nm0000402', 'Carrie Frances Fisher was born on October 21, 1956 in Burbank, California. She was an actress and writer known for Star Wars: Episode IV - A New Hope (1977), Star Wars: Episode V - The Empire Strikes Back (1980) and Star Wars: Episode VI - Return of the Jedi (1983).');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Hayden Christensen', 'https://www.imdb.com/name/nm0159789/mediaviewer/rm890003200', 'https://www.imdb.com/name/nm0159789', 'Hayden Christensen was born on April 19, 1981 in Vancouver, British Columbia, Canada. On May 12, 2000, it was announced that Christensen would star as Anakin Skywalker in the prequels Star Wars: Episode II - Attack of the Clones (2002) and Star Wars: Episode III - Revenge of the Sith (2005). The star was chosen by director George Lucas because he felt that Hayden had raw talent and good chemistry with actress Natalie Portman.');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Natalie Portman', 'https://www.imdb.com/name/nm0000204/mediaviewer/rm3724130817', 'https://www.imdb.com/name/nm0000204', 'Natalie Portman was born on June 9, 1981 in Jerusalem, Israel. She is the first person born in the 1980s to have won the Academy Award for Best Actress (for Black Swan (2010)). It was not until 1999 that Natalie received worldwide fame as Queen Amidala in the highly anticipated US$431 million-grossing prequel Star Wars: Episode I - The Phantom Menace (1999).');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Daisy Ridley', 'https://www.imdb.com/name/nm5397459/mediaviewer/rm2884462080', 'https://www.imdb.com/name/nm5397459', 'Daisy Jazz Isobel Ridley was born in Westminster, London, on April 10, 1992. She is best known for her breakthrough role as "Rey" in the 2015 film, Star Wars: Episode VII - The Force Awakens (2015) .In April 2014, it was announced that Daisy was cast to play the heroine main protagonist, Rey, in Star Wars: The Force Awakens, the first film in the new trilogy of the Star Wars franchise. Since its release, it became the fastest movie, ever, to reach $1 billion at the box office, worldwide.');
insert into ACTOR (NAME, IMAGE, IMDB, DESCRIPTION) values ('Adam Driver', 'https://www.imdb.com/name/nm3485845/mediaviewer/rm2214079232', 'https://www.imdb.com/name/nm3485845', 'Adam Douglas Driver was born on November 19, 1983 in San Diego, California. Widely regarded as the one of greatest actors of his generation by now both in the United States and internationally. He played as Kylo Ren in the Star Wars movie saga beginning with Star Wars: Episode VII - The Force Awakens (2015).');
insert into ACTOR (ID, NAME, IMAGE, IMDB, DESCRIPTION) values (-100, 'No Actors!', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png', 'https://www.imdb.com', 'Add some actors for this film!');

insert into FILM (TITLE, YEAR, DIRECTOR, genre_id, country_id, IMAGE, IMDB, DESCRIPTION) values ('Star Wars: Episode IV - A New Hope', 1977, 'George Lucas', 1, 132, 'https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF894,1000_QL80_.jpg', 'https://www.imdb.com/title/tt0076759/', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire''s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.');
insert into FILM (TITLE, YEAR, DIRECTOR, genre_id, country_id, IMAGE, IMDB, DESCRIPTION) values ('Star Wars: Episode VII - The Force Awakens', 2015, 'George Lucas', 1, 132, 'https://m.media-amazon.com/images/I/815sNabP6AL._AC_UF1000,1000_QL80_.jpg', 'https://www.imdb.com/title/tt2488496/', 'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.');
insert into FILM (TITLE, YEAR, DIRECTOR, genre_id, country_id, IMAGE, IMDB, DESCRIPTION) values ('Star Wars: Episode II - Attack of the Clones', 2002, 'George Lucas', 1, 132, 'https://static.wikia.nocookie.net/starwars/images/b/bf/Episodeiidvd.jpg/revision/latest', 'https://www.imdb.com/title/tt0121765/', '');

insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (1, 1);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (1, 2);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (1, 3);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (2, 2);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (2, 6);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (2, 7);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (3, 4);
insert into FILM_ACTOR (FILM_ID, ACTOR_ID) values (3, 5);
