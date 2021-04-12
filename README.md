# ***Simple Open Channel Logger for xCally***

### DESCRIPTION:

```
This is a simple Open Channel Logger for xCally.

The purpose of this logger is to log the incoming Request body from xCally's Open Channel integration in order to view the incoming JSON data sent by xCally.

This is a handy tool if you are busy builing a custom integration with the xCally Open Channel, but don't know what kind of data to expect from xCally.

```

### REQUIREMENTS:

* Node.js v8^
* Yarn


### INSTALLATION:

* If you don't already have Node.js installed, install it first. You can get it from the [Node.JS](https://nodejs.org/en/download/) website.
* Install Yarn
    ```bash
    npm i -g yarn
    ```


### USAGE:

```
cd Open-Channel-Logger/
```
```bash
yarn install
```
If you encounter an error try running the following command.
```bash
yarn install --ignore-engines
```
```bash
yarn dev
```

### API:

#### METHOD: POST

#### ENDPOINT: http://localhost:9996/

### LOGS:

Once a request is received it will be logged in Open-Channel.log 