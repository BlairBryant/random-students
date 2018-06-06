CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    yes INTEGER []
);

INSERT INTO students
(name, yes)
VALUES
('Ryan McDougall', ARRAY [1]),
('Blake Rindlisbacher', ARRAY [2]),
('Nate Stone', ARRAY [3]),
('Dylan Lovell', ARRAY [4]),
('Charlie Hatch', ARRAY [5]),
('Jon White', ARRAY [6]),
('Seth Adamson', ARRAY [7]),
('France Bushman', ARRAY [8]),
('Todd Gore', ARRAY [9]),
('Michael Thurman', ARRAY [10]),
('Katrina Fairfax', ARRAY [11]),
('Andy Puertas', ARRAY [12]),
('Erik Amundson', ARRAY [13]),
('Sebastion Beltran', ARRAY [14]),
('Jacob Horstmeier', ARRAY [15]),
('Mac Read', ARRAY [16]),
('Avery Slight', ARRAY [17]),
('Jordon Trower', ARRAY [18]),
('Trevor Smith', ARRAY [19]);