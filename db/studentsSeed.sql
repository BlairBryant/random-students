CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    yes INTEGER []
);

INSERT INTO students
(name, yes)
VALUES
('Chris Lanham', ARRAY [1, 18, 9, 5, 7, 3]),
('Ryan McDougall', ARRAY [2, 13, 21, 16, 8]),
('John Fonua', ARRAY [3, 12, 21, 17, 9, 1]),
('Blake Rindlisbacher', ARRAY [4, 9, 11, 20, 21, 12]),
('Nate Stone', ARRAY [5, 15, 8, 1, 22, 6]),
('Dylan Lovell', ARRAY [6, 19, 15, 20, 5]),
('Charlie Hatch', ARRAY [7, 16, 12, 8, 1, 17]),
('Jon White', ARRAY [8, 17, 5, 7, 18, 2]),
('Seth Adamson', ARRAY [9, 4, 1, 11, 3, 15]),
('France Bushman', ARRAY [10, 14, 20, 12, 13, 11]),
('Todd Gore', ARRAY [11, 20, 4, 9, 14, 10]),
('Andrew Sievers', ARRAY [12, 3, 7, 10, 19, 4]),
('Michael Thurman', ARRAY [13, 2, 16, 10, 14]),
('Katrina Fairfax', ARRAY [14, 10, 17, 19, 11, 13]),
('Andy Puertas', ARRAY [15, 5, 16, 6, 17, 9]),
('Erik Amundson', ARRAY [16, 7, 15, 13, 2, 22]),
('Sebastion Beltran', ARRAY [17, 8, 14, 3, 15, 7]),
('Jacob Horstmeier', ARRAY [18, 1, 22, 8, 21]),
('Mac Read', ARRAY [19, 6, 14, 12, 20]),
('Avery Slight', ARRAY [20, 11, 10, 4, 6, 19]),
('Jordon Trower', ARRAY [21, 22, 3, 2, 4, 18]),
('Trevor Smith', ARRAY [22, 21, 18, 5, 16]);