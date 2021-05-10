CREATE TABLE patients (
	id serial PRIMARY KEY,
	buNumber VARCHAR ( 6 ) UNIQUE NOT NULL,
	name VARCHAR ( 50 ) NOT NULL,
	age VARCHAR ( 3 ) NOT NULL,
	phone VARCHAR ( 13 )  NOT NULL,
	phoneAlt VARCHAR ( 13 ) NOT NULL,
    ngoName VARCHAR ( 50 ),
    remarks VARCHAR ( 300 ),
	created_on TIMESTAMP NOT NULL
);
