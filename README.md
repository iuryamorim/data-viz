# Data Viz

Data Viz is a stock dashboard

## Dependencies
- Node 11.14.0
- Npm 6.9.0
- Linux or Mac
- Stock Api (url=http://localhost:8000, repository=https://github.com/iuryamorim/stock-api)

## Installing Nvm and Node
- Installing on Linux:
    ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    nvm install node
    ```
- Installing on Mac:
    ```
    brew install nvm
    mkdir ~/.nvm
    nvm install node
    ```

## Cloning and entering the Project
- To clone the project:
    ```
    git clone https://gitlab.com/iuryamorimrj/data_viz.git
    ```
- To enter the project:
    ```
    cd data_viz
    ```

## Download dependencies and run the project]
- downloading dependencies:
    ```
    nvm use
    npm install
    ```
- running project:
    ```
    npm run dev
    ```

## Lint and Tests
- To run the lint:
    ```
    npm run lint
    ```
- To run the tests:
    ```
    npm run coverage
    ```

## Endpoint
- endpoint url: http://localhost:8080/#/stock
- method: GET
