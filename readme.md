## Cluster Monitor Server

A server to monitor the health and performance of clusters.

### Clone Repo

```bash
git clone https://github.com/SenjorWhite/cluster-monitor-server.git
```

### Installation
Navigate to Project Directory
```bash
npm install
```

#### Setup Environment Variables in .env file in the root folder
```bash
NODE_ENV=development  # Or any other appropriate environment value
PORT=3333  # Or the port number you desire
APP_KEY=your_app_key  # Set a randomly generated secure key
HOST=localhost  # Or any other host address
LOG_LEVEL=info  # Or any other log level (e.g., debug, error, warn)
```

For all the setup details, you can refer to the [Adonis.js doc](https://docs.adonisjs.com/guides/environment-variables)

### Setup the Database
#### Create a new database
```bash
node ace migration:fresh
```

#### Fill the database will seeds
```bash
node ace db:seed
```

### Testing

```bash
npm run test
```
It should pass the testings if the setup was correct


### Usage

#### Running in dev env
```bash
node ace serve
```

**It is strongly recommended to run in the dev environment. This development has not been optimized for the production environment.**

#### Running in production

You must set up the environment variables previously defined in the .env file in your working environment

```bash
npm run build
cd build
npm ci --omit="dev"
node bin/server.js
```

### Existing APIs:

#### /clusters 
Retrieve all clusters.
#### /clusters/:id
Retrieve the cluster with the specified ID.
#### /clusters/:id/iops/read
Retrieve the IOPS read records (all historical records) for the specified cluster.
#### /clusters/:id/iops/write
Retrieve the IOPS write records (all historical records) for the specified cluster."

### TODO
#### Primary
* Add a UUID to the Cluster and implement related logic
* Create Throughput Model, related logic, and API
* Create Snapshot Policy Model, related logic, and API
#### Secondary
* Further optimize the design of the IOPS read & write tables
* Improve the exception handler
* Implement the security auth token with middleware
* Implement the timezone logics
* Implement selecting by date range for the traffic data

