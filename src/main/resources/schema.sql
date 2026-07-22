CREATE TABLE IF NOT EXISTS places (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    image_url VARCHAR(500),
    description TEXT,
    website VARCHAR(500),
    instagram VARCHAR(500),
    status VARCHAR(50),
    submitted_by VARCHAR(255),
    category VARCHAR(100),
    cuisine VARCHAR(100),
    location VARCHAR(100)
);