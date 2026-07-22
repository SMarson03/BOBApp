DROP TABLE IF EXISTS places;

CREATE TABLE places (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    image_Url VARCHAR(500),
    description TEXT,
    website VARCHAR(500),
    instagram VARCHAR(500),
    status VARCHAR(50),
    submitted_By VARCHAR(255),
    category VARCHAR(100),
    cuisine VARCHAR(100),
    location VARCHAR(100)
);