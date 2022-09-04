CREATE DATABASE todopern_db2;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);